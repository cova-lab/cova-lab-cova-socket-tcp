import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { IHttpServer } from "@cova/api/http";
import { HttpFilter } from "@cova/api/http/nest/http.filter";
import { HttpModule } from "@cova/api/http/nest/http.module";
import { ISocketClient } from "@cova/core/socket";

export class HttpServer implements IHttpServer {
  constructor(
    private readonly client: ISocketClient,
    private readonly version: string,

    private app?: INestApplication
  ) {}

  async listen(host: string, port: number): Promise<string> {
    this.app = await this.init();
    await this.app.listen(port, host);

    return this.app.getUrl();
  }

  engine(): any {
    return this.app;
  }

  private async init(): Promise<INestApplication> {
    const app = await NestFactory.create(HttpModule.forRoot(this.client), {
      logger: false,
    });

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalFilters(new HttpFilter());
    app.enableCors();

    const swaggerConfig = new DocumentBuilder()
      .setTitle("cova")
      .setDescription("API documentation for cova client")
      .setVersion(this.version)
      .build();

    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

    SwaggerModule.setup("swagger", app, swaggerDocument);

    return app;
  }
}
