package com.xyzz.gsdd.personregistrationslowservice.models

import java.util.UUID

data class Person(val firstName: String, val lastName: String, val id: UUID? = null)
