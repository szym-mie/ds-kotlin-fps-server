package com.szymmie.fps.server

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping

@CrossOrigin("http://localhost")
@Controller
class HtmlController {
    @GetMapping("/")
    fun index(model: Model): String =
        model.let {
            it["title"] = "Index"
            it["chunk"] = "index.js"
            "index"
        }

    @GetMapping("/game")
    fun game(model: Model): String =
        model.let {
            it["title"] = "Game"
            it["chunk"] = "game.js"
            "game"
        }

    @GetMapping("/editor")
    fun editor(model: Model): String =
        model.let {
            it["title"] = "Map Editor"
            it["chunk"] = "editor.js"
            "editor"
        }
}