import * as signalR from "@microsoft/signalr";
import { ESHOP } from "../../../core/eshop";
import { DeviceInfo } from "../models/device-info";
export class UserLoginHub {
    endpoint = '/login-hub';
    private baseUrl: string = ESHOP.options.apiBaseUrls.authSignalRBaseUrl;
    connection;
    constructor() {
        // this.baseUrl = BaseUrl.getAuthSignalRBaseUrl();
        this.baseUrl += this.endpoint
        var token = ESHOP.getConfig().token;

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(this.baseUrl, { accessTokenFactory: () => token })
            // .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Debug)
            .build();
    }

    start(): Promise<void> {
        console.log(`hub start, this.connection.state`, this.connection.state);
        return this.connection.start();
    }

    dispose() {
        if (this.connection) {
            console.warn(`stop hub`);
            this.connection.stop();
        }
    }

    /**
     * Vào phòng 
     * */
    joinLogin(request: { userId: string, firstName: string, lastName: string, device: DeviceInfo }): Promise<void> {
        return this.connection.invoke("joinLogin", request);
    };
}