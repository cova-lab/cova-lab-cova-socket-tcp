import { Observable, ReplaySubject, Subject } from "rxjs";
import { IBinaryStore } from "@cova/core/socket";

export class BinaryStore implements IBinaryStore {
  private chunks: Array<Chunks>;
  private buffer$: Subject<Buffer>;
  private readonly timer: NodeJS.Timer;

  constructor() {
    this.chunks = [];
    this.buffer$ = new ReplaySubject(100);
    this.timer = setInterval(() => this.add(Buffer.alloc(0)), 1000);
  }
  listen() {
    throw new Error("Method not implemented.");
  }
  add(data: Buffer): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    clearInterval(this.timer);
    this.clear();
  }

  clear(): void {
    this.chunks = [];
    this.buffer$ = new ReplaySubject(100);
  }

  private pushIfNecessary(chunk: Buffer): void {
    if (chunk.length > 0) {
      this.chunks.push({ date: Date.now(), chunk: chunk });
    }
  }
}

type Chunks = {
  date: number;
  chunk: Buffer;
};
