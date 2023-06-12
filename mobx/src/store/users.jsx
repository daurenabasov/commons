import { makeAutoObservable } from "mobx";

export class Users {
    _value = []

    constructor() {
        makeAutoObservable(this)
    }

    get users() {
        return this._value
    }

    fetchUsers = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            this.updateUsers(data)
            this._value = data
        } catch (error) {
            console.error(error.message)
        }
    }

    updateUsers = (users) => {
        this._value = users
    }


}