/// <reference types="node" />
import EventEmitter from 'events';
export declare const dfuse: import("@dfuse/client").DfuseClient;
export declare function createFirehoseSubscription(query: string): Promise<{
    on: <K>(eventName: string | symbol, listener: (...args: any[]) => void) => EventEmitter<[never]>;
    stream: import("@dfuse/client").Stream;
}>;
//# sourceMappingURL=dfuse-client.d.ts.map