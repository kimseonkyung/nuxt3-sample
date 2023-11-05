import type {HTTPClientBuilder} from "./HTTPClient.ts";
import {FetchClientBuilder} from "./FetchClient.ts";

export function createHttpClient(): HTTPClientBuilder {
    const builder: HTTPClientBuilder = new FetchClientBuilder();

    return builder
        .setSuccessFilter((body: any) => body)
        .setFailFilter((body: any) => Promise.reject(body));
}
