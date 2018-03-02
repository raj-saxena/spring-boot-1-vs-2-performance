package com.xyzz.gsdd.samplespringboot2.controllers

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.xyzz.gsdd.samplespringboot2.models.Person
import com.xyzz.gsdd.samplespringboot2.services.PersonRegistrationService
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.BDDMockito.given
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.http.MediaType.APPLICATION_JSON_UTF8
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import java.util.UUID

@RunWith(SpringRunner::class)
@WebMvcTest(controllers = [(PersonController::class)])
class PersonControllerTest {
    @MockBean
    lateinit var personRegistrationService: PersonRegistrationService

    @Autowired
    lateinit var mockMvc: MockMvc
    @Autowired
    lateinit var mapper: ObjectMapper

    @Test
    fun `adds a Person`() {
        val person = Person("firstName", "lastName")
        given(personRegistrationService.addPerson(person)).willReturn(person.copy(id = UUID.randomUUID()))

        val result = mockMvc.perform(post("/persons")
                .content(mapper.writeValueAsString(person))
                .contentType(APPLICATION_JSON_UTF8)
                .accept(APPLICATION_JSON_UTF8))
                .andExpect(status().isCreated)
                .andReturn()

        val addedPerson = mapper.readValue<Person>(result.response.contentAsString)
        assertThat(addedPerson.firstName).isEqualTo(person.firstName)
        assertThat(addedPerson.lastName).isEqualTo(person.lastName)
        assertThat(addedPerson.id).isNotNull()
    }
}
