import { IonicEnvironment, ServeDetails, ServeOptions } from '../../definitions';
export declare function serve({env, options}: {
    env: IonicEnvironment;
    options: ServeOptions;
}): Promise<ServeDetails>;
export declare function injectLiveReloadScript(content: any, host: string, port: number): any;
