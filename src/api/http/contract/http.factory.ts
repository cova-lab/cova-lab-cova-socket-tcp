import { IHttpServer } from "@cova/api/http";
import { HttpServer } from "@cova/api/http/nest/http.server";
import { ISocketClient } from "@cova/core/socket";

export class HttpFactory {
  static createServer(client: ISocketClient, version: string): IHttpServer {
    return new HttpServer(client, version);
  }
}
