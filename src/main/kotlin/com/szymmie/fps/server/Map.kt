package com.szymmie.fps.server

data class Map(
    var name: String,
    var cols: Int,
    var rows: Int,
    var tiles: ShortArray = ShortArray(cols * rows) { 0 }
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Map

        if (cols != other.cols) return false
        if (rows != other.rows) return false
        if (name != other.name) return false
        if (!tiles.contentEquals(other.tiles)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = cols
        result = 31 * result + rows
        result = 31 * result + name.hashCode()
        result = 31 * result + tiles.contentHashCode()
        return result
    }

    fun size() = rows * cols
}