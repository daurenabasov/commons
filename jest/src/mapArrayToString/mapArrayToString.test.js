const mapArrayToString = require("./mapArrayToString")

/**
 * 
 * метод toEqual нужен чтобы сравнивать значение для ссылочных типов данных
 */


describe("mapArrayToString", () => {

    test("Корректное значение", () => {
        expect(mapArrayToString([1, 2, 3]).toEqual(["1", "2", "3"]))


    })
})