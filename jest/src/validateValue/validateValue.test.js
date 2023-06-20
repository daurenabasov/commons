const validateValue = require("./validateValue")

/**
 * expect(value) ​
Функция expect используется каждый раз, когда вы хотите проверить значение. Однако, вам редко придется вызывать expect саму по себе. Вместо этого вы будете использовать expect вместе с функцией-проверкой для утверждения чего-либо о значении.
 * 
 * toBe использует Object.is для проверки точного совпадения.  * If you want to check the value of an object, use toEqual
 *
 *toBe для сравнения примитивных значений или проверки референциальной идентичности экземпляров объекта. 
 */


describe("validate value или тест кэйс", () => {
    // прописанием фукнцию тест, принимает в себя название теста и коллбэк
    test("Валидация значения", () => {
        expect(validateValue(10)).toBe(true)
    })
    test("меньше корректного", () => {
        expect(validateValue(-1)).toBe(false)
    })
    test("Больше корректного", () => {
        expect(validateValue(101)).toBe(false)
    })
    test("Пограничное значение снизу", () => {
        expect(validateValue(0)).toBe(true)
    })
    test("Пограничное значение сверху", () => {
        expect(validateValue(100)).toBe(true)
    })
})