import { Observable } from "rxjs";
import {
  SocketEvent,
  SocketEventType,
  SocketSendReply,
} from "@cova/core/socket";

export interface ISocketClient {
  readonly store: ISocketEventStore;

  connect(): Promise<void>;
  sendData<TData>(data: TData, event?: string): Promise<SocketSendReply>;
  sendBytes(bytes: number[], event?: string): Promise<SocketSendReply>;
  close(): void;
}
