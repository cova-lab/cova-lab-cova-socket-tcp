import {
  AnyObject,
  BinaryEncoding,
  SocketIOTransport,
} from "@cova/core/common";
import { SocketType } from "@cova/core/socket";

export type CliConfig = {
  apiPort: number;
  apiHost: string;
  socketType: SocketType;
  socketAddress: string;
  emoji: boolean;
  connectionTimeout: number;
  reconnectionInterval: number;
  replyTimeout: number;
  headers?: AnyObject;
  ioAuth?: AnyObject;
  ioTransport?: SocketIOTransport;
  netSync?: boolean;
  binaryEncoding?: BinaryEncoding;
};
