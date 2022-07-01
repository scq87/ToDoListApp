export interface User{
    _id?: string
    username: string
    password: string
}

export interface IToDoItem{
    name: string
    datetime: string
    attributes?: string
    priority: number
    _id?: string
    _todolistid?: number
    _personid?: number
}

export interface IToDoList{
    name: string
    _id?: string
    personId: number
    person: any
}