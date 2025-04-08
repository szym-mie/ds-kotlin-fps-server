package com.szymmie.fps.server

import org.springframework.stereotype.Service

@Service
class MapService {
    private val maps = mutableMapOf<String, Map>()
    private val changes = mutableMapOf<String, List<Change>>()

    fun list() = maps.values.map {
        MapInfo(it.name, it.size(), changes[it.name]?.lastOrNull()?.updated ?: 0)
    }
    fun changes() = changes.values.flatten().sortedBy { it.updated }

    fun push(new: Map): MapInfo {
        val time = System.currentTimeMillis()
        val key = new.name.replace(Regex("[ &?!%$@<>=+/\\\\]"), "_")
        if (key.length < 8)
            throw IllegalArgumentException("name too short (must be at least 8 chars)")

        new.let {
            maps[key] = new.apply {
                name = key
            }
            changes[key] = changes.getOrPut(key) { emptyList() } + Change(it, time)
            return MapInfo(key, it.size(), time)
        }
    }

    fun pull() = changes().last().map
    fun pull(name: String) = maps.getValue(name)
}