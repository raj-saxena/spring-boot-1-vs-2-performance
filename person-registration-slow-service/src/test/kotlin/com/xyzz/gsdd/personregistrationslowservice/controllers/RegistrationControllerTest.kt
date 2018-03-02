package com.xyzz.gsdd.personregistrationslowservice.controllers

import com.xyzz.gsdd.personregistrationslowservice.models.Person
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest
import org.springframework.http.MediaType.APPLICATION_JSON_UTF8
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.web.reactive.function.BodyInserters

@RunWith(SpringRunner::class)
@WebFluxTest(controllers = [RegistrationController::class])
class RegistrationControllerTest {
    @Autowired
    lateinit var webTestClient: WebTestClient

    @Test
    fun `should register a person`() {
        val person = Person("firstName", "secondName")

        webTestClient.post().uri("/register")
                .contentType(APPLICATION_JSON_UTF8)
                .accept(APPLICATION_JSON_UTF8)
                .body(BodyInserters.fromObject(person))
                .exchange()
                .expectStatus().isCreated
                .expectBody()
                .jsonPath("firstName").isEqualTo(person.firstName)
                .jsonPath("lastName").isEqualTo(person.lastName)
                .jsonPath("id").isNotEmpty
    }
}
