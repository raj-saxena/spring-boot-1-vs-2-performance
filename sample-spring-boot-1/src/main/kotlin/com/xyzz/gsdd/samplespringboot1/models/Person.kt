package com.xyzz.gsdd.samplespringboot1.models

import java.util.UUID

data class Person(val firstName: String, val lastName: String, val id:UUID? = null)
