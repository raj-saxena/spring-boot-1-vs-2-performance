package com.xyzz.gsdd.samplereactivespringboot2.controllers

import com.xyzz.gsdd.samplereactivespringboot2.models.Person
import com.xyzz.gsdd.samplereactivespringboot2.services.PersonRegistrationService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus.CREATED
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController("/persons")
class PersonController {
    @Autowired
    lateinit var personRegistrationService: PersonRegistrationService

    @PostMapping
    @ResponseStatus(CREATED)
    fun addPerson(@RequestBody person: Person): Mono<Person> {
        return personRegistrationService.addPerson(person)
    }
}
