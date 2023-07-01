import { resolve } from "path";

import { ISocketClient, SocketOptions, SocketType } from "@cova/core/socket";
import { NetSocketClient } from "@cova/core/socket/client/net-socket.client";
import { NetSocketSyncClient } from "@cova/core/socket/client/net-socket.sync.client";
import { SocketIOClient } from "@cova/core/socket/client/socketio.client";
import { WebSocketClient } from "@cova/core/socket/client/websocket.client";
import { BinaryStore } from "@cova/core/socket/store/binary.store";
import { EventStore } from "@cova/core/socket/store/event.store";

export class SocketFactory {}
