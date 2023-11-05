import {createHttpClient} from "@/libs/http-client";
import TodoList from "@/domain/todoList/index";

const { VITE_API_KEY, VITE_COMP_CODE, VITE_API_SECRET, VITE_TESSA_AUTH_CENTER_HOST } = import.meta.env


const header = {
    "Content-Type": "application/json",
    apiKey: VITE_API_KEY,
    compCode: VITE_COMP_CODE,
    apiSecret: VITE_API_SECRET,
}

const instance = createHttpClient()
    .setBaseUrl(process.server || process.env.VITEST ? `${VITE_TESSA_AUTH_CENTER_HOST}/tessa-service-v2` : `/tessa-service-v2`)
    .setHeader(header)
    .build();

type ErrorResponse = {
    code: string;
    message: string;
}


export function getTodoListAll(): Promise<Array<object>> {
    return instance.get(`/todo-list`)
        .then((res: Array<object>) => {
            return res
        })
        .catch((error: ErrorResponse) => {
            console.log(`${error?.code} :::: ${error?.message}`)
        });
}

export function getTodoListById(id: number): Promise<TodoList> {
    return instance.get(`/todo-list/${id}`)
        .then((res: TodoList) => {
            return new TodoList(res)
        })
        .catch((error: ErrorResponse) => {
            console.log(`${error?.code} :::: ${error?.message}`)
        });
}

