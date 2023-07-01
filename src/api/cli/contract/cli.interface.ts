import { CliConfig } from "@cova/api/cli";
import { IHttpServer } from "@cova/api/http";
import { ISocketClient } from "@cova/core/socket";

export interface ICliInteractive {
  listen(server: IHttpServer, client: ISocketClient): Promise<void>;
}

export interface ICliParser {
  parse(args?: string[]): CliConfig;
}
