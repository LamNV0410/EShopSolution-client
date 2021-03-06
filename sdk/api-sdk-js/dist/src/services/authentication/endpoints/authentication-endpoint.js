import axios from "axios";
import { ESHOP } from "../../../core/eshop";
var AuthenticationEndpoint = /** @class */ (function () {
    /**
     *
     */
    function AuthenticationEndpoint() {
        // TODO : Endpoint :
        this.endpoint = 'api/v1/authentication/login';
        this.baseUrl = ESHOP.options.apiBaseUrls.authenticationUrl;
    }
    AuthenticationEndpoint.prototype.login = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios.post(_this.baseUrl + "/" + _this.endpoint, request)
                .then(function (res) {
                resolve(res.data);
            })
                .catch(function (error) {
                var _a;
                console.error(error);
                reject((_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
            });
        });
    };
    return AuthenticationEndpoint;
}());
export { AuthenticationEndpoint };
//# sourceMappingURL=authentication-endpoint.js.map