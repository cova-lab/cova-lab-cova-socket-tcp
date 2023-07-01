import { DynamicModule } from "@nestjs/common";

import { HttpController } from "@cova/api/http/nest/http.controller";
import { ISocketClient } from "@cova/core/socket";

export class HttpModule {
  static forRoot(client: ISocketClient): DynamicModule {
    return {
      module: HttpModule,
      providers: [
        {
          provide: "SOCKET_CLIENT",
          useValue: client,
        },
      ],
      controllers: [HttpController],
    };
  }
}
