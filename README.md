# spring-boot-1-vs-2-performance

The aim of the project is to analyze the performance of spring-boot web against the spring-boot web-reactive framework. We are comparing:
* Spring-boot web - 1.5.10.RELEASE
* spring-boot web - 2.0.0.RELEASE
* spring-boot reactive-web - 2.0.0.RELEASE

For testing, we have a rest endpoint `POST /persons` that accepts a json `Person` object and returns an object with UUID.  
**[Gatlin](https://gatling.io/)** is used to run the tests and generate report.

### Start the app with
```
mvn spring-boot:run
```

### Start the backing service

To run the benchmark, you'll need the backing service at the beginning.

```bash
cd person-registration-slow-service
mvn spring-boot:run
```

### Run tests with
```
./gradlew loadTest -D SIM_USERS=5000
```
