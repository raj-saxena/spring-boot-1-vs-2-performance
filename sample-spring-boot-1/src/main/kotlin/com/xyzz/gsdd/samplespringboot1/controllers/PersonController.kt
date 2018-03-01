package com.xyzz.gsdd.samplespringboot1.controllers

import com.xyzz.gsdd.samplespringboot1.models.Person
import org.springframework.http.HttpStatus.CREATED
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController("/persons")
class PersonController {

    @PostMapping
    @ResponseStatus(CREATED)
    fun addPerson(@RequestBody person: Person): Person {
        return Person(person.firstName, person.lastName, UUID.randomUUID())
    }
}
