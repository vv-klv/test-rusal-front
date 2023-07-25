export type User = {
    username: string,
    password: string
}

export type Task = {
    "userName": string,
    "id": number,
    "createDate": string,
    "updateDate": string,
    "taskName": string,
    "taskDescr": string,
    "taskStatus": string
}

export type taskUpdateOrAddInfo = {
    "taskName": string,
    "taskDescr": string,
    "taskStatus": string
}
