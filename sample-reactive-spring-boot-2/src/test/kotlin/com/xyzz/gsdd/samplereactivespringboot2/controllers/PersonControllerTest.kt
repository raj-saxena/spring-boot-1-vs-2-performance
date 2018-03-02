package com.xyzz.gsdd.samplereactivespringboot2.controllers

import com.xyzz.gsdd.samplereactivespringboot2.models.Person
import org.junit.Before
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT
import org.springframework.boot.web.server.LocalServerPort
import org.springframework.http.HttpStatus.CREATED
import org.springframework.http.MediaType.APPLICATION_JSON_UTF8
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import reactor.test.test

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
class PersonControllerTest {
    @LocalServerPort
    var port: Int? = null

    lateinit var webClient: WebClient

    @Before
    fun setUp() {
        webClient = WebClient.create("http://localhost:$port")
    }

    @Test
    fun `should add a Person`() {
        val person = Person("firstName", "lastName")

        webClient.post().uri("/persons")
                .accept(APPLICATION_JSON_UTF8)
                .body(Mono.just(person), Person::class.java)
                .exchange()
                .map { it.statusCode() }
                .test()
                .expectNext(CREATED)
                .verifyComplete()
    }
}
