package com.szymmie.fps.server

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
class MapController(
    private val mapService: MapService
) {
    @PostMapping("/maps/list")
    @ResponseBody
    fun list() = mapService.list()

    @PostMapping("/maps/push")
    @ResponseBody
    fun push(@RequestBody new: Map) = mapService.push(new)

    @PostMapping("/maps/pull")
    @ResponseBody
    fun pullLatest() = mapService.pull()

    @PostMapping("/maps/pull/{name}")
    @ResponseBody
    fun pullByName(@PathVariable name: String) = mapService.pull(name)

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NoSuchElementException::class)
    fun handleNotFound(exception: NoSuchElementException) = exception.message

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException::class)
    fun handleBadValue(exception: IllegalArgumentException) = exception.message
}