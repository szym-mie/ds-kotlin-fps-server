package szymmie.fps.server

import org.springframework.web.bind.annotation.*

@RestController
class MapController {
    private val map = Map("NEWMAP", 10, 10, ShortArray(100))

//    @PostMapping("/maps/list")
//    @ResponseBody
//    fun list(@RequestBody params: Maps.Companion.ListReqParams): List<Map> =
//        maps.list(params)

    @PostMapping("/maps/push")
    @ResponseBody
    fun push(@RequestBody new: Map): Status =
        map.run {
            name = new.name
            cols = new.cols
            rows = new.rows
            tiles = new.tiles
            println(this)
            Status(name)
        }

    @PostMapping("/maps/pull")
    @ResponseBody
    fun pull(): Map = map
}