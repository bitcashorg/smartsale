"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  FetchError: () => FetchError,
  base64Decode: () => base64Decode,
  base64Encode: () => base64Encode,
  cn: () => cn,
  decrypt: () => decrypt,
  encrypt: () => encrypt,
  fetchJson: () => fetchJson,
  formatAddress: () => formatAddress,
  getBase64: () => getBase64,
  getErrorMessage: () => getErrorMessage,
  isEncrypted: () => isEncrypted,
  isErrorWithMessage: () => isErrorWithMessage,
  logger: () => logger,
  platform: () => platform,
  toErrorWithMessage: () => toErrorWithMessage,
  toSlug: () => toSlug,
  validateUUID: () => validateUUID
});
module.exports = __toCommonJS(src_exports);

// src/text/text.lib.ts
function toSlug(str) {
  let s = str;
  if (!s) {
    return "";
  }
  s = s.toLowerCase().trim();
  s = s.replace(/ & /g, " and ");
  s = s.replace(/[ ]+/g, "-");
  s = s.replace(/[-]+/g, "-");
  s = s.replace(/[^a-z0-9-]+/g, "");
  return s;
}

// src/tailwind/tailwind.lib.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/runtime/runtime.lib.ts
var import_lodash = __toESM(require("lodash"));
var platform = (() => {
  const isBrowser = typeof window !== "undefined";
  const userAgent = isBrowser ? import_lodash.default.get(window, "navigator.userAgent") : "";
  const isAndroid = /(Android)/i.test(userAgent);
  const isPhone = /(iPhone|iPod)/i.test(userAgent);
  const isIpad = /(iPad)/i.test(userAgent);
  const isMobile = isPhone || isAndroid;
  const solana = isBrowser && import_lodash.default.get(window, "solana");
  const isPhantom = isBrowser && import_lodash.default.has(window, "solana.isPhantom");
  return {
    userAgent,
    isBrowser,
    isNode: !isBrowser,
    isPhone,
    isIpad,
    isMobile,
    isPhantom,
    solana
  };
})();

// src/logger/logger.lib.ts
var debug = true;
var logger = {
  log: (message, ...optionalParams) => debug && console.log(message, ...optionalParams),
  info: (message, ...optionalParams) => debug && console.info(message, ...optionalParams),
  error: (message, ...optionalParams) => debug && console.log(message, ...optionalParams)
};

// src/fetch/fetch.lib.ts
async function fetchJson(input, init) {
  const response = await fetch(input, init);
  const data = await response.json();
  if (response.ok)
    return data;
  throw new FetchError({
    message: response.statusText,
    response,
    data
  });
}
var FetchError = class extends Error {
  constructor({
    message,
    response,
    data
  }) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }
    this.name = "FetchError";
    this.response = response;
    this.data = data != null ? data : { message };
  }
};

// src/encryption/encryption.lib.ts
var import_crypto = require("crypto");
var algorithm = "aes-256-cbc";
var key = "9314214900ed961a9f15688e0e2f26f3c5afa8dd56afb8c527602548e53d1883";
var IV_LENGHT = 16;
var decrypt = (text) => {
  const alltexts = text.includes(":") ? text.split(":") : [];
  const privateIV = alltexts.shift() || "";
  const finaltext = alltexts.shift() || "";
  const encryptedText = Buffer.from(finaltext, "hex");
  const decipher = (0, import_crypto.createDecipheriv)(algorithm, Buffer.from(key, "hex"), Buffer.from(privateIV, "hex"));
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
var encrypt = (param) => {
  const iv = (0, import_crypto.randomBytes)(IV_LENGHT);
  const cipher = (0, import_crypto.createCipheriv)(algorithm, Buffer.from(key, "hex"), iv);
  let encrypted = cipher.update(param);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
};
var isEncrypted = (param) => {
  if (param && param.length > 0 && param.length == 65 && param.includes(":")) {
    const alltexts = param.split(":");
    const first = alltexts.shift() || "";
    const second = alltexts.shift() || "";
    return first.length == 32 && second.length == 32;
  }
  return false;
};

// src/encoding/encoding.lib.ts
var base64Encode = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64");
var base64Decode = (str) => {
  try {
    return JSON.parse(Buffer.from(str, "base64").toString());
  } catch (error) {
    return Buffer.from(str).toString();
  }
};
function getBase64(file) {
  return new Promise((resolve, rejects) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      resolve(reader == null ? void 0 : reader.result);
    };
    reader.onerror = function(error) {
      rejects(error);
    };
  });
}
function validateUUID(str) {
  if (!str)
    return;
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return regexExp.test(str);
}

// src/blockchain/blockchain.lib.ts
function formatAddress(key2) {
  return `${key2.slice(0, 4)}...${key2.slice(-4)}`;
}

// src/error/error.lib.ts
function isErrorWithMessage(error) {
  return typeof error === "object" && error !== null && "message" in error && typeof error.message === "string";
}
function toErrorWithMessage(maybeError) {
  if (isErrorWithMessage(maybeError))
    return maybeError;
  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}
function getErrorMessage(error) {
  return toErrorWithMessage(error).message;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FetchError,
  base64Decode,
  base64Encode,
  cn,
  decrypt,
  encrypt,
  fetchJson,
  formatAddress,
  getBase64,
  getErrorMessage,
  isEncrypted,
  isErrorWithMessage,
  logger,
  platform,
  toErrorWithMessage,
  toSlug,
  validateUUID
});
