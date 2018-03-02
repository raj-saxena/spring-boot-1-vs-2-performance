package com.xyzz.gsdd.samplespringboot2.services

import com.fasterxml.jackson.databind.ObjectMapper
import com.xyzz.gsdd.samplespringboot2.models.Person
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.http.HttpEntity
import org.springframework.stereotype.Service

@Service
class PersonRegistrationService(restTemplateBuilder: RestTemplateBuilder) {
    @Value("\${registration.service}")
    private lateinit var registrationServiceEndpoint: String

    @Autowired
    lateinit var objectMapper: ObjectMapper

    private val restTemplate = restTemplateBuilder.build()

    fun addPerson(person: Person): Person {
        val nullablePerson = restTemplate.postForEntity("$registrationServiceEndpoint/register", HttpEntity(person),
                Person::class.java)
        return nullablePerson.body ?: person
    }
}
