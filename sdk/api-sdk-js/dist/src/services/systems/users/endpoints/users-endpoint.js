import axios from "axios";
import { ESHOP } from "../../../../core/eshop";
var UsersEndpoint = /** @class */ (function () {
    function UsersEndpoint() {
        /**
         *
         */
        this.baseUrl = ESHOP.options.apiBaseUrls.systemUrl;
        this.baseUrl += '/api/v1/users';
    }
    UsersEndpoint.prototype.getAll = function (request) {
        var _this = this;
        var endpoint = '';
        return new Promise(function (resolve, reject) {
            axios.get("" + _this.baseUrl + endpoint, { params: request })
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
    UsersEndpoint.prototype.create = function (request) {
        var _this = this;
        var endpoint = '';
        return new Promise(function (resolve, reject) {
            axios.post("" + _this.baseUrl + endpoint, request)
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
    UsersEndpoint.prototype.edit = function (id, request) {
        var _this = this;
        var endpoint = "/" + id;
        return new Promise(function (resolve, reject) {
            axios.patch("" + _this.baseUrl + endpoint, request)
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
    UsersEndpoint.prototype.getById = function (id) {
        var _this = this;
        var endpoint = "" + id;
        return new Promise(function (resolve, reject) {
            axios.get(_this.baseUrl + "/" + endpoint)
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
    return UsersEndpoint;
}());
export { UsersEndpoint };
//# sourceMappingURL=users-endpoint.js.map