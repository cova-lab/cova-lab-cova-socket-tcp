import { CliConfig, ICliInteractive, ICliParser } from "@cova/api/cli";
import { CliInteractive } from "@cova/api/cli/cli/cli.interactive";
import { CliParser } from "@cova/api/cli/cli/cli.parser";

export class CliFactory {
  static createParser(version: string): ICliParser {
    return new CliParser(version);
  }

  static createInteractive(config: CliConfig): ICliInteractive {
    return new CliInteractive(config);
  }
}
