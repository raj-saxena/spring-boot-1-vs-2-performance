package com.xyzz.gsdd.samplespringboot1.services

import com.github.tomakehurst.wiremock.client.WireMock.aResponse
import com.github.tomakehurst.wiremock.client.WireMock.post
import com.github.tomakehurst.wiremock.client.WireMock.stubFor
import com.github.tomakehurst.wiremock.junit.WireMockRule
import com.xyzz.gsdd.samplespringboot1.models.Person
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.web.client.RestTemplate


@RunWith(SpringRunner::class)
@SpringBootTest
class PersonRegistrationServiceTest {
    @Autowired
    private lateinit var personRegistrationService: PersonRegistrationService

    private lateinit var restTemplate: RestTemplate

    @get:Rule
    val wireMockRule = WireMockRule(8090)

    @Before
    fun setUp() {
        restTemplate = RestTemplateBuilder().build()
    }

    @Test
    fun `should call registrationService`() {
        val person = Person("firstName", "lastName")
        stubFor(post("/register")
                .willReturn(
                        aResponse()
                                .withHeader("Content-Type", APPLICATION_JSON_UTF8_VALUE)
                                .withBody("""{
                            | "firstName": "${person.firstName}",
                            | "lastName": "${person.lastName}",
                            | "id": "ee0495d7-348f-44fc-968c-1d03104c0456"
                            |}
                        """.trimMargin())
                ))

        val result = personRegistrationService.addPerson(person)

        assertThat(result.firstName).isEqualTo(person.firstName)
        assertThat(result.lastName).isEqualTo(person.lastName)
        assertThat(result.id).isNotNull()
    }
}
