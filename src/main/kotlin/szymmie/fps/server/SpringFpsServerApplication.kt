package szymmie.fps.server

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringFpsServerApplication

fun main(args: Array<String>) {
    runApplication<SpringFpsServerApplication>(*args)
}
