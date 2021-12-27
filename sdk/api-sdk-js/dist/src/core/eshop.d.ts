export declare class ESHOP {
    static options: {
        apiBaseUrl: string;
        apiBaseUrls: {
            systemUrl: string;
            productUrl: string;
            orderService: string;
            authenticationUrl: string;
            authSignalRBaseUrl: string;
        };
        apiKey: string;
        token: string;
    };
    constructor();
    init(): void;
    static getConfig(): {
        apiBaseUrl: string;
        apiBaseUrls: {
            systemUrl: string;
            productUrl: string;
            orderService: string;
            authenticationUrl: string;
            authSignalRBaseUrl: string;
        };
        apiKey: string;
        token: string;
    };
    setToken(token: string): void;
    /**
     * extend object
     * @param target
     * @param sources
     */
    private extendObject;
}
