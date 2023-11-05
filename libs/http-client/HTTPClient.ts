export default interface HTTPClient {
    get(url: string): Promise<unknown>;
    post(url: string, body: Object): Promise<unknown>;
}

export type Filter = (result: Record<string, unknown>) => Record<string, unknown>;

export interface HTTPClientBuilder {
    setBaseUrl(url: string): HTTPClientBuilder;
    setHeader(config: Object): HTTPClientBuilder;
    setSuccessFilter(filter: Filter): HTTPClientBuilder;
    setFailFilter(filter: Filter): HTTPClientBuilder;
    build(): HTTPClient;
}
