import axios from "axios";

export class ESHOP {
    public static options = {
        apiBaseUrl: '',
        apiBaseUrls: {
            systemUrl: `http://localhost:30001`,
            productUrl: `http://localhost:30002`,
            orderService: `http://localhost:30003`,
            authenticationUrl: `http://localhost:4444`,
            authSignalRBaseUrl: `http://localhost:5555`,
        },
        apiKey: '',
        token: ''
    };

    constructor() {
        // CLS.options = this.extendObject([], CLS.options, options);
    }

    public init() {
        axios.interceptors.request.use((config) => {
            const token = localStorage.getItem('auth');
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });
    }

    public static getConfig() {
        return ESHOP.options;
    }

    public setToken(token: string) {
        ESHOP.options.token = token;
    }

    /**
     * extend object
     * @param target 
     * @param sources 
     */
    private extendObject(target: any, ...sources: any[]) {
        sources.forEach(function (source) {
            for (var prop in source) {
                target[prop] = source[prop];
            }
        });
        return target;
    }
}