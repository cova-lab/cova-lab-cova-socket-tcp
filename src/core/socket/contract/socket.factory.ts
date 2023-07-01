import { resolve } from "path";

import { ISocketClient, SocketOptions, SocketType } from "@cova/core/socket";
import { NetSocketClient } from "@cova/core/socket/client/net-socket.client";
import { NetSocketSyncClient } from "@cova/core/socket/client/net-socket.sync.client";
import { SocketIOClient } from "@cova/core/socket/client/socketio.client";
import { WebSocketClient } from "@cova/core/socket/client/websocket.client";
import { BinaryStore } from "@cova/core/socket/store/binary.store";
import { EventStore } from "@cova/core/socket/store/event.store";

export class SocketFactory {
  static createClient(options: SocketOptions): ISocketClient {
    const factory: Record<SocketType, () => ISocketClient> = {
      [SocketType.SocketIO]: () =>
        new SocketIOClient(options, new EventStore()),
      [SocketType.WebSocket]: () =>
        new WebSocketClient(options, new EventStore()),
      [SocketType.Tcp]: () => this.createNetSocket(options),
      [SocketType.Unix]: () => this.createNetSocket(options),
    };

    return factory[options.type]();
  }

  private static createNetSocket(options: SocketOptions): ISocketClient {
    if (options.type === SocketType.Unix) {
      options.address = resolve(process.cwd(), options.address);
    }
    if (options.netSync) {
      return new NetSocketSyncClient(options, new EventStore());
    }

    return new NetSocketClient(options, new EventStore(), new BinaryStore());
  }
}
