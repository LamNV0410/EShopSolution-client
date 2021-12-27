import axios from "axios";
import { ESHOP } from "../../../../core/eshop";
var UserTypeEndpoint = /** @class */ (function () {
    function UserTypeEndpoint() {
        /**
             *
     /api​/v1​/UserType​/{id}
             */
        this.baseUrl = ESHOP.options.apiBaseUrls.systemUrl;
        this.baseUrl += '/api/v1/UserTypes';
    }
    UserTypeEndpoint.prototype.getAllPaging = function (request) {
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
    UserTypeEndpoint.prototype.create = function (user) {
        var _this = this;
        var endpoint = '';
        return new Promise(function (resolve, reject) {
            axios.post("" + _this.baseUrl + endpoint, user)
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
    UserTypeEndpoint.prototype.update = function (id, user) {
        var _this = this;
        var endpoint = "/" + id;
        return new Promise(function (resolve, reject) {
            axios.patch("" + _this.baseUrl + endpoint, user)
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
    /** Get for combobox */
    UserTypeEndpoint.prototype.getAllUserTypeRolesSelect = function (request) {
        var _this = this;
        var endpoint = '/actions/usertype-roles-select';
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
    UserTypeEndpoint.prototype.getAllUserTypesSelect = function () {
        var _this = this;
        var endpoint = '/actions/usertypes-select';
        return new Promise(function (resolve, reject) {
            axios.get("" + _this.baseUrl + endpoint)
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
    /**
        *   /api​/v1​/UserType​/{id}
            */
    UserTypeEndpoint.prototype.getById = function (id) {
        var _this = this;
        var endpoint = "/" + id;
        return new Promise(function (resolve, reject) {
            axios.get("" + _this.baseUrl + endpoint)
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
    return UserTypeEndpoint;
}());
export { UserTypeEndpoint };
//# sourceMappingURL=user-type-endpoint.js.map