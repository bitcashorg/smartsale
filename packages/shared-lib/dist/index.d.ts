import { ClassValue } from 'clsx';

/**
 * Return a slugified copy of a string.
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
declare function toSlug(str: string): string;

declare function cn(...inputs: ClassValue[]): string;

declare const platform: {
    userAgent: string;
    isBrowser: boolean;
    isNode: boolean;
    isPhone: boolean;
    isIpad: boolean;
    isMobile: boolean;
    isPhantom: boolean;
    solana: false | undefined;
};

declare const logger: {
    log: (message?: any, ...optionalParams: any[]) => void;
    info: (message?: any, ...optionalParams: any[]) => void;
    error: (message?: any, ...optionalParams: any[]) => void;
};

declare function fetchJson<JSON = {}>(input: RequestInfo, init?: RequestInit): Promise<JSON>;
declare class FetchError extends Error {
    response: Response;
    data: {
        message: string;
    };
    constructor({ message, response, data, }: {
        message: string;
        response: Response;
        data: {
            message: string;
        };
    });
}

declare const decrypt: (text: string) => string;
declare const encrypt: (param: string) => string;
declare const isEncrypted: (param: string) => boolean;

declare const base64Encode: (obj: {}) => string;
declare const base64Decode: (str: string) => any;
declare function getBase64(file: File): Promise<any>;
declare function validateUUID(str?: string): boolean | undefined;

declare function formatAddress(key: string): string;

type ErrorWithMessage = {
    message: string;
};
declare function isErrorWithMessage(error: unknown): error is ErrorWithMessage;
declare function toErrorWithMessage(maybeError: unknown): ErrorWithMessage;
declare function getErrorMessage(error: unknown): string;

export { ErrorWithMessage, FetchError, base64Decode, base64Encode, cn, decrypt, encrypt, fetchJson, formatAddress, getBase64, getErrorMessage, isEncrypted, isErrorWithMessage, logger, platform, toErrorWithMessage, toSlug, validateUUID };
