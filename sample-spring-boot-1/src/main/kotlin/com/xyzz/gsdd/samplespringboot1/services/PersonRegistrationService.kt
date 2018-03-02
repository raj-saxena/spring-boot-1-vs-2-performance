package com.xyzz.gsdd.samplespringboot1.services

import com.xyzz.gsdd.samplespringboot1.models.Person
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.http.HttpEntity
import org.springframework.stereotype.Service

@Service
class PersonRegistrationService(restTemplateBuilder: RestTemplateBuilder) {
    @Value("\${registration.service}")
    private lateinit var registrationServiceEndpoint: String

    private val restTemplate = restTemplateBuilder.build()

    fun addPerson(person: Person): Person {
        val nullablePerson = restTemplate.postForEntity("$registrationServiceEndpoint/register", HttpEntity(person),
                Person::class.java)
        return nullablePerson.body ?: person
    }
}
