package com.xyzz.gsdd.samplespringboot1.controllers

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.xyzz.gsdd.samplespringboot1.models.Person
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType.APPLICATION_JSON_UTF8
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@RunWith(SpringRunner::class)
@WebMvcTest(controllers = [(PersonController::class)])
class PersonControllerTest {
    @Autowired
    lateinit var mockMvc: MockMvc
    @Autowired
    lateinit var mapper: ObjectMapper

    @Test
    fun `adds a Person`() {
        val person = Person("firstName", "lastName")

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
