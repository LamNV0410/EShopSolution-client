import axios from "axios";
import { ESHOP } from "../../../core/eshop";
var CategoryEndpoint = /** @class */ (function () {
    function CategoryEndpoint() {
        /**
         *
         */
        this.baseUrl = ESHOP.options.apiBaseUrls.productUrl;
        this.baseUrl += '/api/v1/categories';
    }
    CategoryEndpoint.prototype.getAll = function (request) {
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
    CategoryEndpoint.prototype.getById = function (id) {
        var _this = this;
        var endpoint = "/" + id;
        return new Promise(function (resolve, reject) {
            axios.get("" + _this.baseUrl + endpoint, { params: id })
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
    CategoryEndpoint.prototype.create = function (category) {
        var _this = this;
        var endpoint = "";
        return new Promise(function (resolve, reject) {
            axios.post("" + _this.baseUrl + endpoint, category)
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
    CategoryEndpoint.prototype.update = function (category) {
        var _this = this;
        var endpoint = "/" + category.id;
        return new Promise(function (resolve, reject) {
            axios.patch("" + _this.baseUrl + endpoint, category)
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
    CategoryEndpoint.prototype.delete = function (id) {
        var _this = this;
        var endpoint = "/" + id;
        return new Promise(function (resolve, reject) {
            axios.delete("" + _this.baseUrl + endpoint, { params: id })
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
    return CategoryEndpoint;
}());
export { CategoryEndpoint };
function Injectable() {
    throw new Error("Function not implemented.");
}
//# sourceMappingURL=category-endpoints.js.map