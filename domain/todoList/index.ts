
type User = {
    id, number
    name: string,
    age: number
}


export default class TodoList {
    user: User

    constructor(obj) {
        this.user = obj.user
    }

    static getCustomName(name: string) {
        return `${name}님`
    }

}
