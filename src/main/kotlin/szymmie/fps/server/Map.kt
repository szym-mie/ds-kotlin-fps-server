package szymmie.fps.server

// import org.springframework.data.mongodb.core.mapping.Document

// @Document(collection = "maps")
data class Map(
    var name: String,
    var cols: Short,
    var rows: Short,
    var tiles: ShortArray
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Map

        if (name != other.name) return false
        if (cols != other.cols) return false
        if (rows != other.rows) return false
        if (!tiles.contentEquals(other.tiles)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name.hashCode()
        result = 31 * result + cols
        result = 31 * result + rows
        result = 31 * result + tiles.contentHashCode()
        return result
    }
}