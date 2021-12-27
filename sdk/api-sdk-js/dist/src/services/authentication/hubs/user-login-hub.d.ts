import * as signalR from "@microsoft/signalr";
import { DeviceInfo } from "../models/device-info";
export declare class UserLoginHub {
    endpoint: string;
    private baseUrl;
    connection: signalR.HubConnection;
    constructor();
    start(): Promise<void>;
    dispose(): void;
    /**
     * Vào phòng
     * */
    joinLogin(request: {
        userId: string;
        firstName: string;
        lastName: string;
        device: DeviceInfo;
    }): Promise<void>;
}
