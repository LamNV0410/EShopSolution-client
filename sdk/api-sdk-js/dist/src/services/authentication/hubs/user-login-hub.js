import * as signalR from "@microsoft/signalr";
import { ESHOP } from "../../../core/eshop";
var UserLoginHub = /** @class */ (function () {
    function UserLoginHub() {
        this.endpoint = '/login-hub';
        this.baseUrl = ESHOP.options.apiBaseUrls.authSignalRBaseUrl;
        // this.baseUrl = BaseUrl.getAuthSignalRBaseUrl();
        this.baseUrl += this.endpoint;
        var token = ESHOP.getConfig().token;
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(this.baseUrl, { accessTokenFactory: function () { return token; } })
            // .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Debug)
            .build();
    }
    UserLoginHub.prototype.start = function () {
        console.log("hub start, this.connection.state", this.connection.state);
        return this.connection.start();
    };
    UserLoginHub.prototype.dispose = function () {
        if (this.connection) {
            console.warn("stop hub");
            this.connection.stop();
        }
    };
    /**
     * Vào phòng
     * */
    UserLoginHub.prototype.joinLogin = function (request) {
        return this.connection.invoke("joinLogin", request);
    };
    ;
    return UserLoginHub;
}());
export { UserLoginHub };
//# sourceMappingURL=user-login-hub.js.map