import axios from "axios";
var ESHOP = /** @class */ (function () {
    function ESHOP() {
        // CLS.options = this.extendObject([], CLS.options, options);
    }
    ESHOP.prototype.init = function () {
        axios.interceptors.request.use(function (config) {
            var token = localStorage.getItem('auth');
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
    };
    ESHOP.getConfig = function () {
        return ESHOP.options;
    };
    ESHOP.prototype.setToken = function (token) {
        ESHOP.options.token = token;
    };
    /**
     * extend object
     * @param target
     * @param sources
     */
    ESHOP.prototype.extendObject = function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources.forEach(function (source) {
            for (var prop in source) {
                target[prop] = source[prop];
            }
        });
        return target;
    };
    ESHOP.options = {
        apiBaseUrl: '',
        apiBaseUrls: {
            systemUrl: "http://localhost:30001",
            productUrl: "http://localhost:30002",
            orderService: "http://localhost:30003",
            authenticationUrl: "http://localhost:50000",
            authSignalRBaseUrl: "http://localhost:5555",
        },
        apiKey: '',
        token: ''
    };
    return ESHOP;
}());
export { ESHOP };
//# sourceMappingURL=eshop.js.map