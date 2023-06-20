const mapArrayToString = (arr) => {
    return arr.filter(item => Number.isInteger(item)).map(String)
}

const map = new Map()

const lol = map.set("hello", "world")

console.log(lol);

module.exports = mapArrayToString