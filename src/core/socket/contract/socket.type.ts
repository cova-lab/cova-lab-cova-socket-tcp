import {
  AnyObject,
  BinaryEncoding,
  SocketIOTransport,
} from "@cova/core/common";
import { SocketEventType, SocketType } from "@cova/core/socket";

export type SocketSendReply<TReply = any> = {
  messageId: number;
  reply?: TReply;
};
