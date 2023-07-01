import "module-alias/register";

import { TestUtil } from "@cova/test/util/test.util";
import { WsServer } from "@cova/test/server/ws.server";

(async (): Promise<void> => {
  const port = await TestUtil.findFreePort();
  const wss = new WsServer();

  wss.start(port);

  console.log("WS server running on ws://127.0.0.1:" + port);
})();
