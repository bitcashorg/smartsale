
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model auction_details
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type auction_details = $Result.DefaultSelection<Prisma.$auction_detailsPayload>
/**
 * Model orders
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model users
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model session
 * 
 */
export type session = $Result.DefaultSelection<Prisma.$sessionPayload>
/**
 * Model transfers
 * 
 */
export type transfers = $Result.DefaultSelection<Prisma.$transfersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auction_details
 * const auction_details = await prisma.auction_details.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auction_details
   * const auction_details = await prisma.auction_details.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.auction_details`: Exposes CRUD operations for the **auction_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auction_details
    * const auction_details = await prisma.auction_details.findMany()
    * ```
    */
  get auction_details(): Prisma.auction_detailsDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.sessionDelegate<ExtArgs>;

  /**
   * `prisma.transfers`: Exposes CRUD operations for the **transfers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transfers
    * const transfers = await prisma.transfers.findMany()
    * ```
    */
  get transfers(): Prisma.transfersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    auction_details: 'auction_details',
    orders: 'orders',
    users: 'users',
    session: 'session',
    transfers: 'transfers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'auction_details' | 'orders' | 'users' | 'session' | 'transfers'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      auction_details: {
        payload: Prisma.$auction_detailsPayload<ExtArgs>
        fields: Prisma.auction_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auction_detailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auction_detailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload>
          }
          findFirst: {
            args: Prisma.auction_detailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auction_detailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload>
          }
          findMany: {
            args: Prisma.auction_detailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload>[]
          }
          create: {
            args: Prisma.auction_detailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload>
          }
          createMany: {
            args: Prisma.auction_detailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.auction_detailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload>
          }
          update: {
            args: Prisma.auction_detailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload>
          }
          deleteMany: {
            args: Prisma.auction_detailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.auction_detailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.auction_detailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$auction_detailsPayload>
          }
          aggregate: {
            args: Prisma.Auction_detailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuction_details>
          }
          groupBy: {
            args: Prisma.auction_detailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Auction_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.auction_detailsCountArgs<ExtArgs>,
            result: $Utils.Optional<Auction_detailsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      session: {
        payload: Prisma.$sessionPayload<ExtArgs>
        fields: Prisma.sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findFirst: {
            args: Prisma.sessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findMany: {
            args: Prisma.sessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          create: {
            args: Prisma.sessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          createMany: {
            args: Prisma.sessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          update: {
            args: Prisma.sessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          deleteMany: {
            args: Prisma.sessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.sessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      transfers: {
        payload: Prisma.$transfersPayload<ExtArgs>
        fields: Prisma.transfersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transfersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transfersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          findFirst: {
            args: Prisma.transfersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transfersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          findMany: {
            args: Prisma.transfersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>[]
          }
          create: {
            args: Prisma.transfersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          createMany: {
            args: Prisma.transfersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transfersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          update: {
            args: Prisma.transfersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          deleteMany: {
            args: Prisma.transfersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transfersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transfersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          aggregate: {
            args: Prisma.TransfersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransfers>
          }
          groupBy: {
            args: Prisma.transfersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransfersGroupByOutputType>[]
          }
          count: {
            args: Prisma.transfersCountArgs<ExtArgs>,
            result: $Utils.Optional<TransfersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model auction_details
   */

  export type AggregateAuction_details = {
    _count: Auction_detailsCountAggregateOutputType | null
    _avg: Auction_detailsAvgAggregateOutputType | null
    _sum: Auction_detailsSumAggregateOutputType | null
    _min: Auction_detailsMinAggregateOutputType | null
    _max: Auction_detailsMaxAggregateOutputType | null
  }

  export type Auction_detailsAvgAggregateOutputType = {
    exact_order_id: number | null
    decimals_auctioning_token: number | null
    decimals_bidding_token: number | null
    minimum_bidding_amount_per_order: number | null
    min_funding_threshold: number | null
    current_volume: number | null
    current_clearing_order_sell_amount: number | null
    current_clearing_order_buy_amount: number | null
    current_clearing_price: number | null
    current_bidding_amount: number | null
    interest_score: number | null
    usd_amount_traded: number | null
    chain_id: number | null
  }

  export type Auction_detailsSumAggregateOutputType = {
    exact_order_id: bigint | null
    decimals_auctioning_token: number | null
    decimals_bidding_token: number | null
    minimum_bidding_amount_per_order: bigint | null
    min_funding_threshold: bigint | null
    current_volume: number | null
    current_clearing_order_sell_amount: bigint | null
    current_clearing_order_buy_amount: bigint | null
    current_clearing_price: number | null
    current_bidding_amount: bigint | null
    interest_score: number | null
    usd_amount_traded: number | null
    chain_id: bigint | null
  }

  export type Auction_detailsMinAggregateOutputType = {
    created_at: Date | null
    exact_order_id: bigint | null
    symbol_auctioning_token: string | null
    symbol_bidding_token: string | null
    address_auctioning_token: string | null
    address_bidding_token: string | null
    decimals_auctioning_token: number | null
    decimals_bidding_token: number | null
    end_time_timestamp: Date | null
    order_cancellation_end_date: Date | null
    starting_time_stamp: Date | null
    minimum_bidding_amount_per_order: bigint | null
    min_funding_threshold: bigint | null
    allow_list_manager: string | null
    allow_list_signer: string | null
    current_volume: number | null
    current_clearing_order_sell_amount: bigint | null
    current_clearing_order_buy_amount: bigint | null
    current_clearing_price: number | null
    current_bidding_amount: bigint | null
    is_atomic_closure_allowed: boolean | null
    is_private_auction: boolean | null
    interest_score: number | null
    usd_amount_traded: number | null
    chain_id: bigint | null
  }

  export type Auction_detailsMaxAggregateOutputType = {
    created_at: Date | null
    exact_order_id: bigint | null
    symbol_auctioning_token: string | null
    symbol_bidding_token: string | null
    address_auctioning_token: string | null
    address_bidding_token: string | null
    decimals_auctioning_token: number | null
    decimals_bidding_token: number | null
    end_time_timestamp: Date | null
    order_cancellation_end_date: Date | null
    starting_time_stamp: Date | null
    minimum_bidding_amount_per_order: bigint | null
    min_funding_threshold: bigint | null
    allow_list_manager: string | null
    allow_list_signer: string | null
    current_volume: number | null
    current_clearing_order_sell_amount: bigint | null
    current_clearing_order_buy_amount: bigint | null
    current_clearing_price: number | null
    current_bidding_amount: bigint | null
    is_atomic_closure_allowed: boolean | null
    is_private_auction: boolean | null
    interest_score: number | null
    usd_amount_traded: number | null
    chain_id: bigint | null
  }

  export type Auction_detailsCountAggregateOutputType = {
    created_at: number
    exact_order_id: number
    symbol_auctioning_token: number
    symbol_bidding_token: number
    address_auctioning_token: number
    address_bidding_token: number
    decimals_auctioning_token: number
    decimals_bidding_token: number
    end_time_timestamp: number
    order_cancellation_end_date: number
    starting_time_stamp: number
    minimum_bidding_amount_per_order: number
    min_funding_threshold: number
    allow_list_manager: number
    allow_list_signer: number
    current_volume: number
    current_clearing_order_sell_amount: number
    current_clearing_order_buy_amount: number
    current_clearing_price: number
    current_bidding_amount: number
    is_atomic_closure_allowed: number
    is_private_auction: number
    interest_score: number
    usd_amount_traded: number
    chain_id: number
    _all: number
  }


  export type Auction_detailsAvgAggregateInputType = {
    exact_order_id?: true
    decimals_auctioning_token?: true
    decimals_bidding_token?: true
    minimum_bidding_amount_per_order?: true
    min_funding_threshold?: true
    current_volume?: true
    current_clearing_order_sell_amount?: true
    current_clearing_order_buy_amount?: true
    current_clearing_price?: true
    current_bidding_amount?: true
    interest_score?: true
    usd_amount_traded?: true
    chain_id?: true
  }

  export type Auction_detailsSumAggregateInputType = {
    exact_order_id?: true
    decimals_auctioning_token?: true
    decimals_bidding_token?: true
    minimum_bidding_amount_per_order?: true
    min_funding_threshold?: true
    current_volume?: true
    current_clearing_order_sell_amount?: true
    current_clearing_order_buy_amount?: true
    current_clearing_price?: true
    current_bidding_amount?: true
    interest_score?: true
    usd_amount_traded?: true
    chain_id?: true
  }

  export type Auction_detailsMinAggregateInputType = {
    created_at?: true
    exact_order_id?: true
    symbol_auctioning_token?: true
    symbol_bidding_token?: true
    address_auctioning_token?: true
    address_bidding_token?: true
    decimals_auctioning_token?: true
    decimals_bidding_token?: true
    end_time_timestamp?: true
    order_cancellation_end_date?: true
    starting_time_stamp?: true
    minimum_bidding_amount_per_order?: true
    min_funding_threshold?: true
    allow_list_manager?: true
    allow_list_signer?: true
    current_volume?: true
    current_clearing_order_sell_amount?: true
    current_clearing_order_buy_amount?: true
    current_clearing_price?: true
    current_bidding_amount?: true
    is_atomic_closure_allowed?: true
    is_private_auction?: true
    interest_score?: true
    usd_amount_traded?: true
    chain_id?: true
  }

  export type Auction_detailsMaxAggregateInputType = {
    created_at?: true
    exact_order_id?: true
    symbol_auctioning_token?: true
    symbol_bidding_token?: true
    address_auctioning_token?: true
    address_bidding_token?: true
    decimals_auctioning_token?: true
    decimals_bidding_token?: true
    end_time_timestamp?: true
    order_cancellation_end_date?: true
    starting_time_stamp?: true
    minimum_bidding_amount_per_order?: true
    min_funding_threshold?: true
    allow_list_manager?: true
    allow_list_signer?: true
    current_volume?: true
    current_clearing_order_sell_amount?: true
    current_clearing_order_buy_amount?: true
    current_clearing_price?: true
    current_bidding_amount?: true
    is_atomic_closure_allowed?: true
    is_private_auction?: true
    interest_score?: true
    usd_amount_traded?: true
    chain_id?: true
  }

  export type Auction_detailsCountAggregateInputType = {
    created_at?: true
    exact_order_id?: true
    symbol_auctioning_token?: true
    symbol_bidding_token?: true
    address_auctioning_token?: true
    address_bidding_token?: true
    decimals_auctioning_token?: true
    decimals_bidding_token?: true
    end_time_timestamp?: true
    order_cancellation_end_date?: true
    starting_time_stamp?: true
    minimum_bidding_amount_per_order?: true
    min_funding_threshold?: true
    allow_list_manager?: true
    allow_list_signer?: true
    current_volume?: true
    current_clearing_order_sell_amount?: true
    current_clearing_order_buy_amount?: true
    current_clearing_price?: true
    current_bidding_amount?: true
    is_atomic_closure_allowed?: true
    is_private_auction?: true
    interest_score?: true
    usd_amount_traded?: true
    chain_id?: true
    _all?: true
  }

  export type Auction_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auction_details to aggregate.
     */
    where?: auction_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auction_details to fetch.
     */
    orderBy?: auction_detailsOrderByWithRelationInput | auction_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auction_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auction_details
    **/
    _count?: true | Auction_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auction_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auction_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auction_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auction_detailsMaxAggregateInputType
  }

  export type GetAuction_detailsAggregateType<T extends Auction_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction_details[P]>
      : GetScalarType<T[P], AggregateAuction_details[P]>
  }




  export type auction_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auction_detailsWhereInput
    orderBy?: auction_detailsOrderByWithAggregationInput | auction_detailsOrderByWithAggregationInput[]
    by: Auction_detailsScalarFieldEnum[] | Auction_detailsScalarFieldEnum
    having?: auction_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auction_detailsCountAggregateInputType | true
    _avg?: Auction_detailsAvgAggregateInputType
    _sum?: Auction_detailsSumAggregateInputType
    _min?: Auction_detailsMinAggregateInputType
    _max?: Auction_detailsMaxAggregateInputType
  }

  export type Auction_detailsGroupByOutputType = {
    created_at: Date
    exact_order_id: bigint
    symbol_auctioning_token: string | null
    symbol_bidding_token: string | null
    address_auctioning_token: string | null
    address_bidding_token: string | null
    decimals_auctioning_token: number | null
    decimals_bidding_token: number | null
    end_time_timestamp: Date | null
    order_cancellation_end_date: Date | null
    starting_time_stamp: Date | null
    minimum_bidding_amount_per_order: bigint | null
    min_funding_threshold: bigint | null
    allow_list_manager: string | null
    allow_list_signer: string | null
    current_volume: number | null
    current_clearing_order_sell_amount: bigint | null
    current_clearing_order_buy_amount: bigint | null
    current_clearing_price: number | null
    current_bidding_amount: bigint | null
    is_atomic_closure_allowed: boolean | null
    is_private_auction: boolean | null
    interest_score: number | null
    usd_amount_traded: number | null
    chain_id: bigint
    _count: Auction_detailsCountAggregateOutputType | null
    _avg: Auction_detailsAvgAggregateOutputType | null
    _sum: Auction_detailsSumAggregateOutputType | null
    _min: Auction_detailsMinAggregateOutputType | null
    _max: Auction_detailsMaxAggregateOutputType | null
  }

  type GetAuction_detailsGroupByPayload<T extends auction_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auction_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auction_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auction_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Auction_detailsGroupByOutputType[P]>
        }
      >
    >


  export type auction_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    exact_order_id?: boolean
    symbol_auctioning_token?: boolean
    symbol_bidding_token?: boolean
    address_auctioning_token?: boolean
    address_bidding_token?: boolean
    decimals_auctioning_token?: boolean
    decimals_bidding_token?: boolean
    end_time_timestamp?: boolean
    order_cancellation_end_date?: boolean
    starting_time_stamp?: boolean
    minimum_bidding_amount_per_order?: boolean
    min_funding_threshold?: boolean
    allow_list_manager?: boolean
    allow_list_signer?: boolean
    current_volume?: boolean
    current_clearing_order_sell_amount?: boolean
    current_clearing_order_buy_amount?: boolean
    current_clearing_price?: boolean
    current_bidding_amount?: boolean
    is_atomic_closure_allowed?: boolean
    is_private_auction?: boolean
    interest_score?: boolean
    usd_amount_traded?: boolean
    chain_id?: boolean
  }, ExtArgs["result"]["auction_details"]>

  export type auction_detailsSelectScalar = {
    created_at?: boolean
    exact_order_id?: boolean
    symbol_auctioning_token?: boolean
    symbol_bidding_token?: boolean
    address_auctioning_token?: boolean
    address_bidding_token?: boolean
    decimals_auctioning_token?: boolean
    decimals_bidding_token?: boolean
    end_time_timestamp?: boolean
    order_cancellation_end_date?: boolean
    starting_time_stamp?: boolean
    minimum_bidding_amount_per_order?: boolean
    min_funding_threshold?: boolean
    allow_list_manager?: boolean
    allow_list_signer?: boolean
    current_volume?: boolean
    current_clearing_order_sell_amount?: boolean
    current_clearing_order_buy_amount?: boolean
    current_clearing_price?: boolean
    current_bidding_amount?: boolean
    is_atomic_closure_allowed?: boolean
    is_private_auction?: boolean
    interest_score?: boolean
    usd_amount_traded?: boolean
    chain_id?: boolean
  }


  export type $auction_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auction_details"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date
      exact_order_id: bigint
      symbol_auctioning_token: string | null
      symbol_bidding_token: string | null
      address_auctioning_token: string | null
      address_bidding_token: string | null
      decimals_auctioning_token: number | null
      decimals_bidding_token: number | null
      end_time_timestamp: Date | null
      order_cancellation_end_date: Date | null
      starting_time_stamp: Date | null
      minimum_bidding_amount_per_order: bigint | null
      min_funding_threshold: bigint | null
      allow_list_manager: string | null
      allow_list_signer: string | null
      current_volume: number | null
      current_clearing_order_sell_amount: bigint | null
      current_clearing_order_buy_amount: bigint | null
      current_clearing_price: number | null
      current_bidding_amount: bigint | null
      is_atomic_closure_allowed: boolean | null
      is_private_auction: boolean | null
      interest_score: number | null
      usd_amount_traded: number | null
      chain_id: bigint
    }, ExtArgs["result"]["auction_details"]>
    composites: {}
  }


  type auction_detailsGetPayload<S extends boolean | null | undefined | auction_detailsDefaultArgs> = $Result.GetResult<Prisma.$auction_detailsPayload, S>

  type auction_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<auction_detailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Auction_detailsCountAggregateInputType | true
    }

  export interface auction_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auction_details'], meta: { name: 'auction_details' } }
    /**
     * Find zero or one Auction_details that matches the filter.
     * @param {auction_detailsFindUniqueArgs} args - Arguments to find a Auction_details
     * @example
     * // Get one Auction_details
     * const auction_details = await prisma.auction_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends auction_detailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, auction_detailsFindUniqueArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Auction_details that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {auction_detailsFindUniqueOrThrowArgs} args - Arguments to find a Auction_details
     * @example
     * // Get one Auction_details
     * const auction_details = await prisma.auction_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends auction_detailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, auction_detailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Auction_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auction_detailsFindFirstArgs} args - Arguments to find a Auction_details
     * @example
     * // Get one Auction_details
     * const auction_details = await prisma.auction_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends auction_detailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, auction_detailsFindFirstArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Auction_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auction_detailsFindFirstOrThrowArgs} args - Arguments to find a Auction_details
     * @example
     * // Get one Auction_details
     * const auction_details = await prisma.auction_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends auction_detailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, auction_detailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Auction_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auction_detailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auction_details
     * const auction_details = await prisma.auction_details.findMany()
     * 
     * // Get first 10 Auction_details
     * const auction_details = await prisma.auction_details.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const auction_detailsWithCreated_atOnly = await prisma.auction_details.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends auction_detailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auction_detailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Auction_details.
     * @param {auction_detailsCreateArgs} args - Arguments to create a Auction_details.
     * @example
     * // Create one Auction_details
     * const Auction_details = await prisma.auction_details.create({
     *   data: {
     *     // ... data to create a Auction_details
     *   }
     * })
     * 
    **/
    create<T extends auction_detailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, auction_detailsCreateArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Auction_details.
     *     @param {auction_detailsCreateManyArgs} args - Arguments to create many Auction_details.
     *     @example
     *     // Create many Auction_details
     *     const auction_details = await prisma.auction_details.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends auction_detailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auction_detailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auction_details.
     * @param {auction_detailsDeleteArgs} args - Arguments to delete one Auction_details.
     * @example
     * // Delete one Auction_details
     * const Auction_details = await prisma.auction_details.delete({
     *   where: {
     *     // ... filter to delete one Auction_details
     *   }
     * })
     * 
    **/
    delete<T extends auction_detailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, auction_detailsDeleteArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Auction_details.
     * @param {auction_detailsUpdateArgs} args - Arguments to update one Auction_details.
     * @example
     * // Update one Auction_details
     * const auction_details = await prisma.auction_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends auction_detailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, auction_detailsUpdateArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Auction_details.
     * @param {auction_detailsDeleteManyArgs} args - Arguments to filter Auction_details to delete.
     * @example
     * // Delete a few Auction_details
     * const { count } = await prisma.auction_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends auction_detailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, auction_detailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auction_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auction_details
     * const auction_details = await prisma.auction_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends auction_detailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, auction_detailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auction_details.
     * @param {auction_detailsUpsertArgs} args - Arguments to update or create a Auction_details.
     * @example
     * // Update or create a Auction_details
     * const auction_details = await prisma.auction_details.upsert({
     *   create: {
     *     // ... data to create a Auction_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction_details we want to update
     *   }
     * })
    **/
    upsert<T extends auction_detailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, auction_detailsUpsertArgs<ExtArgs>>
    ): Prisma__auction_detailsClient<$Result.GetResult<Prisma.$auction_detailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Auction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auction_detailsCountArgs} args - Arguments to filter Auction_details to count.
     * @example
     * // Count the number of Auction_details
     * const count = await prisma.auction_details.count({
     *   where: {
     *     // ... the filter for the Auction_details we want to count
     *   }
     * })
    **/
    count<T extends auction_detailsCountArgs>(
      args?: Subset<T, auction_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auction_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auction_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auction_detailsAggregateArgs>(args: Subset<T, Auction_detailsAggregateArgs>): Prisma.PrismaPromise<GetAuction_detailsAggregateType<T>>

    /**
     * Group by Auction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auction_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auction_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auction_detailsGroupByArgs['orderBy'] }
        : { orderBy?: auction_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auction_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuction_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auction_details model
   */
  readonly fields: auction_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auction_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auction_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the auction_details model
   */ 
  interface auction_detailsFieldRefs {
    readonly created_at: FieldRef<"auction_details", 'DateTime'>
    readonly exact_order_id: FieldRef<"auction_details", 'BigInt'>
    readonly symbol_auctioning_token: FieldRef<"auction_details", 'String'>
    readonly symbol_bidding_token: FieldRef<"auction_details", 'String'>
    readonly address_auctioning_token: FieldRef<"auction_details", 'String'>
    readonly address_bidding_token: FieldRef<"auction_details", 'String'>
    readonly decimals_auctioning_token: FieldRef<"auction_details", 'Int'>
    readonly decimals_bidding_token: FieldRef<"auction_details", 'Int'>
    readonly end_time_timestamp: FieldRef<"auction_details", 'DateTime'>
    readonly order_cancellation_end_date: FieldRef<"auction_details", 'DateTime'>
    readonly starting_time_stamp: FieldRef<"auction_details", 'DateTime'>
    readonly minimum_bidding_amount_per_order: FieldRef<"auction_details", 'BigInt'>
    readonly min_funding_threshold: FieldRef<"auction_details", 'BigInt'>
    readonly allow_list_manager: FieldRef<"auction_details", 'String'>
    readonly allow_list_signer: FieldRef<"auction_details", 'String'>
    readonly current_volume: FieldRef<"auction_details", 'Int'>
    readonly current_clearing_order_sell_amount: FieldRef<"auction_details", 'BigInt'>
    readonly current_clearing_order_buy_amount: FieldRef<"auction_details", 'BigInt'>
    readonly current_clearing_price: FieldRef<"auction_details", 'Int'>
    readonly current_bidding_amount: FieldRef<"auction_details", 'BigInt'>
    readonly is_atomic_closure_allowed: FieldRef<"auction_details", 'Boolean'>
    readonly is_private_auction: FieldRef<"auction_details", 'Boolean'>
    readonly interest_score: FieldRef<"auction_details", 'Int'>
    readonly usd_amount_traded: FieldRef<"auction_details", 'Int'>
    readonly chain_id: FieldRef<"auction_details", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * auction_details findUnique
   */
  export type auction_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * Filter, which auction_details to fetch.
     */
    where: auction_detailsWhereUniqueInput
  }


  /**
   * auction_details findUniqueOrThrow
   */
  export type auction_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * Filter, which auction_details to fetch.
     */
    where: auction_detailsWhereUniqueInput
  }


  /**
   * auction_details findFirst
   */
  export type auction_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * Filter, which auction_details to fetch.
     */
    where?: auction_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auction_details to fetch.
     */
    orderBy?: auction_detailsOrderByWithRelationInput | auction_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auction_details.
     */
    cursor?: auction_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auction_details.
     */
    distinct?: Auction_detailsScalarFieldEnum | Auction_detailsScalarFieldEnum[]
  }


  /**
   * auction_details findFirstOrThrow
   */
  export type auction_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * Filter, which auction_details to fetch.
     */
    where?: auction_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auction_details to fetch.
     */
    orderBy?: auction_detailsOrderByWithRelationInput | auction_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auction_details.
     */
    cursor?: auction_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auction_details.
     */
    distinct?: Auction_detailsScalarFieldEnum | Auction_detailsScalarFieldEnum[]
  }


  /**
   * auction_details findMany
   */
  export type auction_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * Filter, which auction_details to fetch.
     */
    where?: auction_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auction_details to fetch.
     */
    orderBy?: auction_detailsOrderByWithRelationInput | auction_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auction_details.
     */
    cursor?: auction_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auction_details.
     */
    skip?: number
    distinct?: Auction_detailsScalarFieldEnum | Auction_detailsScalarFieldEnum[]
  }


  /**
   * auction_details create
   */
  export type auction_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * The data needed to create a auction_details.
     */
    data: XOR<auction_detailsCreateInput, auction_detailsUncheckedCreateInput>
  }


  /**
   * auction_details createMany
   */
  export type auction_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auction_details.
     */
    data: auction_detailsCreateManyInput | auction_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * auction_details update
   */
  export type auction_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * The data needed to update a auction_details.
     */
    data: XOR<auction_detailsUpdateInput, auction_detailsUncheckedUpdateInput>
    /**
     * Choose, which auction_details to update.
     */
    where: auction_detailsWhereUniqueInput
  }


  /**
   * auction_details updateMany
   */
  export type auction_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auction_details.
     */
    data: XOR<auction_detailsUpdateManyMutationInput, auction_detailsUncheckedUpdateManyInput>
    /**
     * Filter which auction_details to update
     */
    where?: auction_detailsWhereInput
  }


  /**
   * auction_details upsert
   */
  export type auction_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * The filter to search for the auction_details to update in case it exists.
     */
    where: auction_detailsWhereUniqueInput
    /**
     * In case the auction_details found by the `where` argument doesn't exist, create a new auction_details with this data.
     */
    create: XOR<auction_detailsCreateInput, auction_detailsUncheckedCreateInput>
    /**
     * In case the auction_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auction_detailsUpdateInput, auction_detailsUncheckedUpdateInput>
  }


  /**
   * auction_details delete
   */
  export type auction_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
    /**
     * Filter which auction_details to delete.
     */
    where: auction_detailsWhereUniqueInput
  }


  /**
   * auction_details deleteMany
   */
  export type auction_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auction_details to delete
     */
    where?: auction_detailsWhereInput
  }


  /**
   * auction_details without action
   */
  export type auction_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auction_details
     */
    select?: auction_detailsSelect<ExtArgs> | null
  }



  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    auction_id: number | null
    sell_amount: number | null
    buy_amount: number | null
    user_id: number | null
    price: number | null
    volume: number | null
  }

  export type OrdersSumAggregateOutputType = {
    auction_id: bigint | null
    sell_amount: bigint | null
    buy_amount: bigint | null
    user_id: bigint | null
    price: number | null
    volume: bigint | null
  }

  export type OrdersMinAggregateOutputType = {
    created_at: Date | null
    auction_id: bigint | null
    sell_amount: bigint | null
    buy_amount: bigint | null
    user_id: bigint | null
    price: number | null
    volume: bigint | null
    timestamp: Date | null
    transactionHash: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    created_at: Date | null
    auction_id: bigint | null
    sell_amount: bigint | null
    buy_amount: bigint | null
    user_id: bigint | null
    price: number | null
    volume: bigint | null
    timestamp: Date | null
    transactionHash: string | null
  }

  export type OrdersCountAggregateOutputType = {
    created_at: number
    auction_id: number
    sell_amount: number
    buy_amount: number
    user_id: number
    price: number
    volume: number
    timestamp: number
    transactionHash: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    auction_id?: true
    sell_amount?: true
    buy_amount?: true
    user_id?: true
    price?: true
    volume?: true
  }

  export type OrdersSumAggregateInputType = {
    auction_id?: true
    sell_amount?: true
    buy_amount?: true
    user_id?: true
    price?: true
    volume?: true
  }

  export type OrdersMinAggregateInputType = {
    created_at?: true
    auction_id?: true
    sell_amount?: true
    buy_amount?: true
    user_id?: true
    price?: true
    volume?: true
    timestamp?: true
    transactionHash?: true
  }

  export type OrdersMaxAggregateInputType = {
    created_at?: true
    auction_id?: true
    sell_amount?: true
    buy_amount?: true
    user_id?: true
    price?: true
    volume?: true
    timestamp?: true
    transactionHash?: true
  }

  export type OrdersCountAggregateInputType = {
    created_at?: true
    auction_id?: true
    sell_amount?: true
    buy_amount?: true
    user_id?: true
    price?: true
    volume?: true
    timestamp?: true
    transactionHash?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    created_at: Date
    auction_id: bigint
    sell_amount: bigint
    buy_amount: bigint
    user_id: bigint
    price: number | null
    volume: bigint | null
    timestamp: Date | null
    transactionHash: string
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    auction_id?: boolean
    sell_amount?: boolean
    buy_amount?: boolean
    user_id?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
    transactionHash?: boolean
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    created_at?: boolean
    auction_id?: boolean
    sell_amount?: boolean
    buy_amount?: boolean
    user_id?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
    transactionHash?: boolean
  }


  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      created_at: Date
      auction_id: bigint
      sell_amount: bigint
      buy_amount: bigint
      user_id: bigint
      price: number | null
      volume: bigint | null
      timestamp: Date | null
      transactionHash: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }


  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `created_at`
     * const ordersWithCreated_atOnly = await prisma.orders.findMany({ select: { created_at: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersCreateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the orders model
   */ 
  interface ordersFieldRefs {
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly auction_id: FieldRef<"orders", 'BigInt'>
    readonly sell_amount: FieldRef<"orders", 'BigInt'>
    readonly buy_amount: FieldRef<"orders", 'BigInt'>
    readonly user_id: FieldRef<"orders", 'BigInt'>
    readonly price: FieldRef<"orders", 'Int'>
    readonly volume: FieldRef<"orders", 'BigInt'>
    readonly timestamp: FieldRef<"orders", 'DateTime'>
    readonly transactionHash: FieldRef<"orders", 'String'>
  }
    

  // Custom InputTypes

  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }


  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    address: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    address: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    address: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    address?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    address?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    address?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    created_at: Date
    address: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    address?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    created_at?: boolean
    address?: boolean
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      address: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly address: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
  }



  /**
   * Model session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    tx: string | null
    account: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    tx: string | null
    account: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    created_at: number
    tx: number
    account: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    created_at?: true
    tx?: true
    account?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    created_at?: true
    tx?: true
    account?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    created_at?: true
    tx?: true
    account?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session to aggregate.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithAggregationInput | sessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    created_at: Date
    tx: string
    account: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    tx?: boolean
    account?: boolean
  }, ExtArgs["result"]["session"]>

  export type sessionSelectScalar = {
    id?: boolean
    created_at?: boolean
    tx?: boolean
    account?: boolean
  }


  export type $sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      tx: string
      account: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type sessionGetPayload<S extends boolean | null | undefined | sessionDefaultArgs> = $Result.GetResult<Prisma.$sessionPayload, S>

  type sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session'], meta: { name: 'session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {sessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sessionFindUniqueArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionFindFirstArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {sessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends sessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sessionCreateArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {sessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {sessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends sessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sessionDeleteArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {sessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sessionUpdateArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {sessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {sessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends sessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sessionUpsertArgs<ExtArgs>>
    ): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionCountArgs>(
      args?: Subset<T, sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionGroupByArgs['orderBy'] }
        : { orderBy?: sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session model
   */
  readonly fields: sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the session model
   */ 
  interface sessionFieldRefs {
    readonly id: FieldRef<"session", 'String'>
    readonly created_at: FieldRef<"session", 'DateTime'>
    readonly tx: FieldRef<"session", 'String'>
    readonly account: FieldRef<"session", 'String'>
  }
    

  // Custom InputTypes

  /**
   * session findUnique
   */
  export type sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }


  /**
   * session findUniqueOrThrow
   */
  export type sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }


  /**
   * session findFirst
   */
  export type sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * session findFirstOrThrow
   */
  export type sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * session findMany
   */
  export type sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * session create
   */
  export type sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * The data needed to create a session.
     */
    data: XOR<sessionCreateInput, sessionUncheckedCreateInput>
  }


  /**
   * session createMany
   */
  export type sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * session update
   */
  export type sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * The data needed to update a session.
     */
    data: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
    /**
     * Choose, which session to update.
     */
    where: sessionWhereUniqueInput
  }


  /**
   * session updateMany
   */
  export type sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
  }


  /**
   * session upsert
   */
  export type sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * The filter to search for the session to update in case it exists.
     */
    where: sessionWhereUniqueInput
    /**
     * In case the session found by the `where` argument doesn't exist, create a new session with this data.
     */
    create: XOR<sessionCreateInput, sessionUncheckedCreateInput>
    /**
     * In case the session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
  }


  /**
   * session delete
   */
  export type sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Filter which session to delete.
     */
    where: sessionWhereUniqueInput
  }


  /**
   * session deleteMany
   */
  export type sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionWhereInput
  }


  /**
   * session without action
   */
  export type sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
  }



  /**
   * Model transfers
   */

  export type AggregateTransfers = {
    _count: TransfersCountAggregateOutputType | null
    _avg: TransfersAvgAggregateOutputType | null
    _sum: TransfersSumAggregateOutputType | null
    _min: TransfersMinAggregateOutputType | null
    _max: TransfersMaxAggregateOutputType | null
  }

  export type TransfersAvgAggregateOutputType = {
    chain_id: Decimal | null
  }

  export type TransfersSumAggregateOutputType = {
    chain_id: Decimal | null
  }

  export type TransfersMinAggregateOutputType = {
    trx_hash: string | null
    created_at: Date | null
    chain_id: Decimal | null
    token: string | null
    from: string | null
    to: string | null
    type: string | null
    amount: string | null
  }

  export type TransfersMaxAggregateOutputType = {
    trx_hash: string | null
    created_at: Date | null
    chain_id: Decimal | null
    token: string | null
    from: string | null
    to: string | null
    type: string | null
    amount: string | null
  }

  export type TransfersCountAggregateOutputType = {
    trx_hash: number
    created_at: number
    chain_id: number
    token: number
    from: number
    to: number
    type: number
    amount: number
    _all: number
  }


  export type TransfersAvgAggregateInputType = {
    chain_id?: true
  }

  export type TransfersSumAggregateInputType = {
    chain_id?: true
  }

  export type TransfersMinAggregateInputType = {
    trx_hash?: true
    created_at?: true
    chain_id?: true
    token?: true
    from?: true
    to?: true
    type?: true
    amount?: true
  }

  export type TransfersMaxAggregateInputType = {
    trx_hash?: true
    created_at?: true
    chain_id?: true
    token?: true
    from?: true
    to?: true
    type?: true
    amount?: true
  }

  export type TransfersCountAggregateInputType = {
    trx_hash?: true
    created_at?: true
    chain_id?: true
    token?: true
    from?: true
    to?: true
    type?: true
    amount?: true
    _all?: true
  }

  export type TransfersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transfers to aggregate.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transfers
    **/
    _count?: true | TransfersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransfersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransfersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransfersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransfersMaxAggregateInputType
  }

  export type GetTransfersAggregateType<T extends TransfersAggregateArgs> = {
        [P in keyof T & keyof AggregateTransfers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransfers[P]>
      : GetScalarType<T[P], AggregateTransfers[P]>
  }




  export type transfersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transfersWhereInput
    orderBy?: transfersOrderByWithAggregationInput | transfersOrderByWithAggregationInput[]
    by: TransfersScalarFieldEnum[] | TransfersScalarFieldEnum
    having?: transfersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransfersCountAggregateInputType | true
    _avg?: TransfersAvgAggregateInputType
    _sum?: TransfersSumAggregateInputType
    _min?: TransfersMinAggregateInputType
    _max?: TransfersMaxAggregateInputType
  }

  export type TransfersGroupByOutputType = {
    trx_hash: string
    created_at: Date
    chain_id: Decimal | null
    token: string | null
    from: string | null
    to: string | null
    type: string | null
    amount: string | null
    _count: TransfersCountAggregateOutputType | null
    _avg: TransfersAvgAggregateOutputType | null
    _sum: TransfersSumAggregateOutputType | null
    _min: TransfersMinAggregateOutputType | null
    _max: TransfersMaxAggregateOutputType | null
  }

  type GetTransfersGroupByPayload<T extends transfersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransfersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransfersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransfersGroupByOutputType[P]>
            : GetScalarType<T[P], TransfersGroupByOutputType[P]>
        }
      >
    >


  export type transfersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trx_hash?: boolean
    created_at?: boolean
    chain_id?: boolean
    token?: boolean
    from?: boolean
    to?: boolean
    type?: boolean
    amount?: boolean
  }, ExtArgs["result"]["transfers"]>

  export type transfersSelectScalar = {
    trx_hash?: boolean
    created_at?: boolean
    chain_id?: boolean
    token?: boolean
    from?: boolean
    to?: boolean
    type?: boolean
    amount?: boolean
  }


  export type $transfersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transfers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      trx_hash: string
      created_at: Date
      chain_id: Prisma.Decimal | null
      token: string | null
      from: string | null
      to: string | null
      type: string | null
      amount: string | null
    }, ExtArgs["result"]["transfers"]>
    composites: {}
  }


  type transfersGetPayload<S extends boolean | null | undefined | transfersDefaultArgs> = $Result.GetResult<Prisma.$transfersPayload, S>

  type transfersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transfersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransfersCountAggregateInputType | true
    }

  export interface transfersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transfers'], meta: { name: 'transfers' } }
    /**
     * Find zero or one Transfers that matches the filter.
     * @param {transfersFindUniqueArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transfersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transfersFindUniqueArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transfers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transfersFindUniqueOrThrowArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transfersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transfersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersFindFirstArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transfersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transfersFindFirstArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transfers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersFindFirstOrThrowArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transfersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transfersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transfers
     * const transfers = await prisma.transfers.findMany()
     * 
     * // Get first 10 Transfers
     * const transfers = await prisma.transfers.findMany({ take: 10 })
     * 
     * // Only select the `trx_hash`
     * const transfersWithTrx_hashOnly = await prisma.transfers.findMany({ select: { trx_hash: true } })
     * 
    **/
    findMany<T extends transfersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transfersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transfers.
     * @param {transfersCreateArgs} args - Arguments to create a Transfers.
     * @example
     * // Create one Transfers
     * const Transfers = await prisma.transfers.create({
     *   data: {
     *     // ... data to create a Transfers
     *   }
     * })
     * 
    **/
    create<T extends transfersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transfersCreateArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transfers.
     *     @param {transfersCreateManyArgs} args - Arguments to create many Transfers.
     *     @example
     *     // Create many Transfers
     *     const transfers = await prisma.transfers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transfersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transfersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transfers.
     * @param {transfersDeleteArgs} args - Arguments to delete one Transfers.
     * @example
     * // Delete one Transfers
     * const Transfers = await prisma.transfers.delete({
     *   where: {
     *     // ... filter to delete one Transfers
     *   }
     * })
     * 
    **/
    delete<T extends transfersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transfersDeleteArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transfers.
     * @param {transfersUpdateArgs} args - Arguments to update one Transfers.
     * @example
     * // Update one Transfers
     * const transfers = await prisma.transfers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transfersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transfersUpdateArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transfers.
     * @param {transfersDeleteManyArgs} args - Arguments to filter Transfers to delete.
     * @example
     * // Delete a few Transfers
     * const { count } = await prisma.transfers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transfersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transfersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transfers
     * const transfers = await prisma.transfers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transfersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transfersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transfers.
     * @param {transfersUpsertArgs} args - Arguments to update or create a Transfers.
     * @example
     * // Update or create a Transfers
     * const transfers = await prisma.transfers.upsert({
     *   create: {
     *     // ... data to create a Transfers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transfers we want to update
     *   }
     * })
    **/
    upsert<T extends transfersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transfersUpsertArgs<ExtArgs>>
    ): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersCountArgs} args - Arguments to filter Transfers to count.
     * @example
     * // Count the number of Transfers
     * const count = await prisma.transfers.count({
     *   where: {
     *     // ... the filter for the Transfers we want to count
     *   }
     * })
    **/
    count<T extends transfersCountArgs>(
      args?: Subset<T, transfersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransfersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransfersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransfersAggregateArgs>(args: Subset<T, TransfersAggregateArgs>): Prisma.PrismaPromise<GetTransfersAggregateType<T>>

    /**
     * Group by Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transfersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transfersGroupByArgs['orderBy'] }
        : { orderBy?: transfersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transfersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransfersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transfers model
   */
  readonly fields: transfersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transfers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transfersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transfers model
   */ 
  interface transfersFieldRefs {
    readonly trx_hash: FieldRef<"transfers", 'String'>
    readonly created_at: FieldRef<"transfers", 'DateTime'>
    readonly chain_id: FieldRef<"transfers", 'Decimal'>
    readonly token: FieldRef<"transfers", 'String'>
    readonly from: FieldRef<"transfers", 'String'>
    readonly to: FieldRef<"transfers", 'String'>
    readonly type: FieldRef<"transfers", 'String'>
    readonly amount: FieldRef<"transfers", 'String'>
  }
    

  // Custom InputTypes

  /**
   * transfers findUnique
   */
  export type transfersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where: transfersWhereUniqueInput
  }


  /**
   * transfers findUniqueOrThrow
   */
  export type transfersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where: transfersWhereUniqueInput
  }


  /**
   * transfers findFirst
   */
  export type transfersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transfers.
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transfers.
     */
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }


  /**
   * transfers findFirstOrThrow
   */
  export type transfersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transfers.
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transfers.
     */
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }


  /**
   * transfers findMany
   */
  export type transfersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transfers.
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }


  /**
   * transfers create
   */
  export type transfersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * The data needed to create a transfers.
     */
    data: XOR<transfersCreateInput, transfersUncheckedCreateInput>
  }


  /**
   * transfers createMany
   */
  export type transfersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transfers.
     */
    data: transfersCreateManyInput | transfersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * transfers update
   */
  export type transfersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * The data needed to update a transfers.
     */
    data: XOR<transfersUpdateInput, transfersUncheckedUpdateInput>
    /**
     * Choose, which transfers to update.
     */
    where: transfersWhereUniqueInput
  }


  /**
   * transfers updateMany
   */
  export type transfersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transfers.
     */
    data: XOR<transfersUpdateManyMutationInput, transfersUncheckedUpdateManyInput>
    /**
     * Filter which transfers to update
     */
    where?: transfersWhereInput
  }


  /**
   * transfers upsert
   */
  export type transfersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * The filter to search for the transfers to update in case it exists.
     */
    where: transfersWhereUniqueInput
    /**
     * In case the transfers found by the `where` argument doesn't exist, create a new transfers with this data.
     */
    create: XOR<transfersCreateInput, transfersUncheckedCreateInput>
    /**
     * In case the transfers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transfersUpdateInput, transfersUncheckedUpdateInput>
  }


  /**
   * transfers delete
   */
  export type transfersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Filter which transfers to delete.
     */
    where: transfersWhereUniqueInput
  }


  /**
   * transfers deleteMany
   */
  export type transfersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transfers to delete
     */
    where?: transfersWhereInput
  }


  /**
   * transfers without action
   */
  export type transfersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Auction_detailsScalarFieldEnum: {
    created_at: 'created_at',
    exact_order_id: 'exact_order_id',
    symbol_auctioning_token: 'symbol_auctioning_token',
    symbol_bidding_token: 'symbol_bidding_token',
    address_auctioning_token: 'address_auctioning_token',
    address_bidding_token: 'address_bidding_token',
    decimals_auctioning_token: 'decimals_auctioning_token',
    decimals_bidding_token: 'decimals_bidding_token',
    end_time_timestamp: 'end_time_timestamp',
    order_cancellation_end_date: 'order_cancellation_end_date',
    starting_time_stamp: 'starting_time_stamp',
    minimum_bidding_amount_per_order: 'minimum_bidding_amount_per_order',
    min_funding_threshold: 'min_funding_threshold',
    allow_list_manager: 'allow_list_manager',
    allow_list_signer: 'allow_list_signer',
    current_volume: 'current_volume',
    current_clearing_order_sell_amount: 'current_clearing_order_sell_amount',
    current_clearing_order_buy_amount: 'current_clearing_order_buy_amount',
    current_clearing_price: 'current_clearing_price',
    current_bidding_amount: 'current_bidding_amount',
    is_atomic_closure_allowed: 'is_atomic_closure_allowed',
    is_private_auction: 'is_private_auction',
    interest_score: 'interest_score',
    usd_amount_traded: 'usd_amount_traded',
    chain_id: 'chain_id'
  };

  export type Auction_detailsScalarFieldEnum = (typeof Auction_detailsScalarFieldEnum)[keyof typeof Auction_detailsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    created_at: 'created_at',
    auction_id: 'auction_id',
    sell_amount: 'sell_amount',
    buy_amount: 'buy_amount',
    user_id: 'user_id',
    price: 'price',
    volume: 'volume',
    timestamp: 'timestamp',
    transactionHash: 'transactionHash'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    address: 'address'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    tx: 'tx',
    account: 'account'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TransfersScalarFieldEnum: {
    trx_hash: 'trx_hash',
    created_at: 'created_at',
    chain_id: 'chain_id',
    token: 'token',
    from: 'from',
    to: 'to',
    type: 'type',
    amount: 'amount'
  };

  export type TransfersScalarFieldEnum = (typeof TransfersScalarFieldEnum)[keyof typeof TransfersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type auction_detailsWhereInput = {
    AND?: auction_detailsWhereInput | auction_detailsWhereInput[]
    OR?: auction_detailsWhereInput[]
    NOT?: auction_detailsWhereInput | auction_detailsWhereInput[]
    created_at?: DateTimeFilter<"auction_details"> | Date | string
    exact_order_id?: BigIntFilter<"auction_details"> | bigint | number
    symbol_auctioning_token?: StringNullableFilter<"auction_details"> | string | null
    symbol_bidding_token?: StringNullableFilter<"auction_details"> | string | null
    address_auctioning_token?: StringNullableFilter<"auction_details"> | string | null
    address_bidding_token?: StringNullableFilter<"auction_details"> | string | null
    decimals_auctioning_token?: IntNullableFilter<"auction_details"> | number | null
    decimals_bidding_token?: IntNullableFilter<"auction_details"> | number | null
    end_time_timestamp?: DateTimeNullableFilter<"auction_details"> | Date | string | null
    order_cancellation_end_date?: DateTimeNullableFilter<"auction_details"> | Date | string | null
    starting_time_stamp?: DateTimeNullableFilter<"auction_details"> | Date | string | null
    minimum_bidding_amount_per_order?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    min_funding_threshold?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    allow_list_manager?: StringNullableFilter<"auction_details"> | string | null
    allow_list_signer?: StringNullableFilter<"auction_details"> | string | null
    current_volume?: IntNullableFilter<"auction_details"> | number | null
    current_clearing_order_sell_amount?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    current_clearing_order_buy_amount?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    current_clearing_price?: IntNullableFilter<"auction_details"> | number | null
    current_bidding_amount?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    is_atomic_closure_allowed?: BoolNullableFilter<"auction_details"> | boolean | null
    is_private_auction?: BoolNullableFilter<"auction_details"> | boolean | null
    interest_score?: IntNullableFilter<"auction_details"> | number | null
    usd_amount_traded?: IntNullableFilter<"auction_details"> | number | null
    chain_id?: BigIntFilter<"auction_details"> | bigint | number
  }

  export type auction_detailsOrderByWithRelationInput = {
    created_at?: SortOrder
    exact_order_id?: SortOrder
    symbol_auctioning_token?: SortOrderInput | SortOrder
    symbol_bidding_token?: SortOrderInput | SortOrder
    address_auctioning_token?: SortOrderInput | SortOrder
    address_bidding_token?: SortOrderInput | SortOrder
    decimals_auctioning_token?: SortOrderInput | SortOrder
    decimals_bidding_token?: SortOrderInput | SortOrder
    end_time_timestamp?: SortOrderInput | SortOrder
    order_cancellation_end_date?: SortOrderInput | SortOrder
    starting_time_stamp?: SortOrderInput | SortOrder
    minimum_bidding_amount_per_order?: SortOrderInput | SortOrder
    min_funding_threshold?: SortOrderInput | SortOrder
    allow_list_manager?: SortOrderInput | SortOrder
    allow_list_signer?: SortOrderInput | SortOrder
    current_volume?: SortOrderInput | SortOrder
    current_clearing_order_sell_amount?: SortOrderInput | SortOrder
    current_clearing_order_buy_amount?: SortOrderInput | SortOrder
    current_clearing_price?: SortOrderInput | SortOrder
    current_bidding_amount?: SortOrderInput | SortOrder
    is_atomic_closure_allowed?: SortOrderInput | SortOrder
    is_private_auction?: SortOrderInput | SortOrder
    interest_score?: SortOrderInput | SortOrder
    usd_amount_traded?: SortOrderInput | SortOrder
    chain_id?: SortOrder
  }

  export type auction_detailsWhereUniqueInput = Prisma.AtLeast<{
    exact_order_id_chain_id?: auction_detailsExact_order_idChain_idCompoundUniqueInput
    AND?: auction_detailsWhereInput | auction_detailsWhereInput[]
    OR?: auction_detailsWhereInput[]
    NOT?: auction_detailsWhereInput | auction_detailsWhereInput[]
    created_at?: DateTimeFilter<"auction_details"> | Date | string
    exact_order_id?: BigIntFilter<"auction_details"> | bigint | number
    symbol_auctioning_token?: StringNullableFilter<"auction_details"> | string | null
    symbol_bidding_token?: StringNullableFilter<"auction_details"> | string | null
    address_auctioning_token?: StringNullableFilter<"auction_details"> | string | null
    address_bidding_token?: StringNullableFilter<"auction_details"> | string | null
    decimals_auctioning_token?: IntNullableFilter<"auction_details"> | number | null
    decimals_bidding_token?: IntNullableFilter<"auction_details"> | number | null
    end_time_timestamp?: DateTimeNullableFilter<"auction_details"> | Date | string | null
    order_cancellation_end_date?: DateTimeNullableFilter<"auction_details"> | Date | string | null
    starting_time_stamp?: DateTimeNullableFilter<"auction_details"> | Date | string | null
    minimum_bidding_amount_per_order?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    min_funding_threshold?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    allow_list_manager?: StringNullableFilter<"auction_details"> | string | null
    allow_list_signer?: StringNullableFilter<"auction_details"> | string | null
    current_volume?: IntNullableFilter<"auction_details"> | number | null
    current_clearing_order_sell_amount?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    current_clearing_order_buy_amount?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    current_clearing_price?: IntNullableFilter<"auction_details"> | number | null
    current_bidding_amount?: BigIntNullableFilter<"auction_details"> | bigint | number | null
    is_atomic_closure_allowed?: BoolNullableFilter<"auction_details"> | boolean | null
    is_private_auction?: BoolNullableFilter<"auction_details"> | boolean | null
    interest_score?: IntNullableFilter<"auction_details"> | number | null
    usd_amount_traded?: IntNullableFilter<"auction_details"> | number | null
    chain_id?: BigIntFilter<"auction_details"> | bigint | number
  }, "exact_order_id_chain_id">

  export type auction_detailsOrderByWithAggregationInput = {
    created_at?: SortOrder
    exact_order_id?: SortOrder
    symbol_auctioning_token?: SortOrderInput | SortOrder
    symbol_bidding_token?: SortOrderInput | SortOrder
    address_auctioning_token?: SortOrderInput | SortOrder
    address_bidding_token?: SortOrderInput | SortOrder
    decimals_auctioning_token?: SortOrderInput | SortOrder
    decimals_bidding_token?: SortOrderInput | SortOrder
    end_time_timestamp?: SortOrderInput | SortOrder
    order_cancellation_end_date?: SortOrderInput | SortOrder
    starting_time_stamp?: SortOrderInput | SortOrder
    minimum_bidding_amount_per_order?: SortOrderInput | SortOrder
    min_funding_threshold?: SortOrderInput | SortOrder
    allow_list_manager?: SortOrderInput | SortOrder
    allow_list_signer?: SortOrderInput | SortOrder
    current_volume?: SortOrderInput | SortOrder
    current_clearing_order_sell_amount?: SortOrderInput | SortOrder
    current_clearing_order_buy_amount?: SortOrderInput | SortOrder
    current_clearing_price?: SortOrderInput | SortOrder
    current_bidding_amount?: SortOrderInput | SortOrder
    is_atomic_closure_allowed?: SortOrderInput | SortOrder
    is_private_auction?: SortOrderInput | SortOrder
    interest_score?: SortOrderInput | SortOrder
    usd_amount_traded?: SortOrderInput | SortOrder
    chain_id?: SortOrder
    _count?: auction_detailsCountOrderByAggregateInput
    _avg?: auction_detailsAvgOrderByAggregateInput
    _max?: auction_detailsMaxOrderByAggregateInput
    _min?: auction_detailsMinOrderByAggregateInput
    _sum?: auction_detailsSumOrderByAggregateInput
  }

  export type auction_detailsScalarWhereWithAggregatesInput = {
    AND?: auction_detailsScalarWhereWithAggregatesInput | auction_detailsScalarWhereWithAggregatesInput[]
    OR?: auction_detailsScalarWhereWithAggregatesInput[]
    NOT?: auction_detailsScalarWhereWithAggregatesInput | auction_detailsScalarWhereWithAggregatesInput[]
    created_at?: DateTimeWithAggregatesFilter<"auction_details"> | Date | string
    exact_order_id?: BigIntWithAggregatesFilter<"auction_details"> | bigint | number
    symbol_auctioning_token?: StringNullableWithAggregatesFilter<"auction_details"> | string | null
    symbol_bidding_token?: StringNullableWithAggregatesFilter<"auction_details"> | string | null
    address_auctioning_token?: StringNullableWithAggregatesFilter<"auction_details"> | string | null
    address_bidding_token?: StringNullableWithAggregatesFilter<"auction_details"> | string | null
    decimals_auctioning_token?: IntNullableWithAggregatesFilter<"auction_details"> | number | null
    decimals_bidding_token?: IntNullableWithAggregatesFilter<"auction_details"> | number | null
    end_time_timestamp?: DateTimeNullableWithAggregatesFilter<"auction_details"> | Date | string | null
    order_cancellation_end_date?: DateTimeNullableWithAggregatesFilter<"auction_details"> | Date | string | null
    starting_time_stamp?: DateTimeNullableWithAggregatesFilter<"auction_details"> | Date | string | null
    minimum_bidding_amount_per_order?: BigIntNullableWithAggregatesFilter<"auction_details"> | bigint | number | null
    min_funding_threshold?: BigIntNullableWithAggregatesFilter<"auction_details"> | bigint | number | null
    allow_list_manager?: StringNullableWithAggregatesFilter<"auction_details"> | string | null
    allow_list_signer?: StringNullableWithAggregatesFilter<"auction_details"> | string | null
    current_volume?: IntNullableWithAggregatesFilter<"auction_details"> | number | null
    current_clearing_order_sell_amount?: BigIntNullableWithAggregatesFilter<"auction_details"> | bigint | number | null
    current_clearing_order_buy_amount?: BigIntNullableWithAggregatesFilter<"auction_details"> | bigint | number | null
    current_clearing_price?: IntNullableWithAggregatesFilter<"auction_details"> | number | null
    current_bidding_amount?: BigIntNullableWithAggregatesFilter<"auction_details"> | bigint | number | null
    is_atomic_closure_allowed?: BoolNullableWithAggregatesFilter<"auction_details"> | boolean | null
    is_private_auction?: BoolNullableWithAggregatesFilter<"auction_details"> | boolean | null
    interest_score?: IntNullableWithAggregatesFilter<"auction_details"> | number | null
    usd_amount_traded?: IntNullableWithAggregatesFilter<"auction_details"> | number | null
    chain_id?: BigIntWithAggregatesFilter<"auction_details"> | bigint | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    created_at?: DateTimeFilter<"orders"> | Date | string
    auction_id?: BigIntFilter<"orders"> | bigint | number
    sell_amount?: BigIntFilter<"orders"> | bigint | number
    buy_amount?: BigIntFilter<"orders"> | bigint | number
    user_id?: BigIntFilter<"orders"> | bigint | number
    price?: IntNullableFilter<"orders"> | number | null
    volume?: BigIntNullableFilter<"orders"> | bigint | number | null
    timestamp?: DateTimeNullableFilter<"orders"> | Date | string | null
    transactionHash?: StringFilter<"orders"> | string
  }

  export type ordersOrderByWithRelationInput = {
    created_at?: SortOrder
    auction_id?: SortOrder
    sell_amount?: SortOrder
    buy_amount?: SortOrder
    user_id?: SortOrder
    price?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    transactionHash?: SortOrder
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    transactionHash?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    created_at?: DateTimeFilter<"orders"> | Date | string
    auction_id?: BigIntFilter<"orders"> | bigint | number
    sell_amount?: BigIntFilter<"orders"> | bigint | number
    buy_amount?: BigIntFilter<"orders"> | bigint | number
    user_id?: BigIntFilter<"orders"> | bigint | number
    price?: IntNullableFilter<"orders"> | number | null
    volume?: BigIntNullableFilter<"orders"> | bigint | number | null
    timestamp?: DateTimeNullableFilter<"orders"> | Date | string | null
  }, "transactionHash">

  export type ordersOrderByWithAggregationInput = {
    created_at?: SortOrder
    auction_id?: SortOrder
    sell_amount?: SortOrder
    buy_amount?: SortOrder
    user_id?: SortOrder
    price?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    transactionHash?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    auction_id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    sell_amount?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    buy_amount?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"orders"> | bigint | number
    price?: IntNullableWithAggregatesFilter<"orders"> | number | null
    volume?: BigIntNullableWithAggregatesFilter<"orders"> | bigint | number | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    transactionHash?: StringWithAggregatesFilter<"orders"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    created_at?: DateTimeFilter<"users"> | Date | string
    address?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    address?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_created_at?: usersIdCreated_atCompoundUniqueInput
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    created_at?: DateTimeFilter<"users"> | Date | string
    address?: StringFilter<"users"> | string
  }, "id_created_at">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    address?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    address?: StringWithAggregatesFilter<"users"> | string
  }

  export type sessionWhereInput = {
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    id?: UuidFilter<"session"> | string
    created_at?: DateTimeFilter<"session"> | Date | string
    tx?: StringFilter<"session"> | string
    account?: StringFilter<"session"> | string
  }

  export type sessionOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    tx?: SortOrder
    account?: SortOrder
  }

  export type sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tx?: string
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    created_at?: DateTimeFilter<"session"> | Date | string
    account?: StringFilter<"session"> | string
  }, "id" | "tx">

  export type sessionOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    tx?: SortOrder
    account?: SortOrder
    _count?: sessionCountOrderByAggregateInput
    _max?: sessionMaxOrderByAggregateInput
    _min?: sessionMinOrderByAggregateInput
  }

  export type sessionScalarWhereWithAggregatesInput = {
    AND?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    OR?: sessionScalarWhereWithAggregatesInput[]
    NOT?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"session"> | string
    created_at?: DateTimeWithAggregatesFilter<"session"> | Date | string
    tx?: StringWithAggregatesFilter<"session"> | string
    account?: StringWithAggregatesFilter<"session"> | string
  }

  export type transfersWhereInput = {
    AND?: transfersWhereInput | transfersWhereInput[]
    OR?: transfersWhereInput[]
    NOT?: transfersWhereInput | transfersWhereInput[]
    trx_hash?: StringFilter<"transfers"> | string
    created_at?: DateTimeFilter<"transfers"> | Date | string
    chain_id?: DecimalNullableFilter<"transfers"> | Decimal | DecimalJsLike | number | string | null
    token?: StringNullableFilter<"transfers"> | string | null
    from?: StringNullableFilter<"transfers"> | string | null
    to?: StringNullableFilter<"transfers"> | string | null
    type?: StringNullableFilter<"transfers"> | string | null
    amount?: StringNullableFilter<"transfers"> | string | null
  }

  export type transfersOrderByWithRelationInput = {
    trx_hash?: SortOrder
    created_at?: SortOrder
    chain_id?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
  }

  export type transfersWhereUniqueInput = Prisma.AtLeast<{
    trx_hash?: string
    AND?: transfersWhereInput | transfersWhereInput[]
    OR?: transfersWhereInput[]
    NOT?: transfersWhereInput | transfersWhereInput[]
    created_at?: DateTimeFilter<"transfers"> | Date | string
    chain_id?: DecimalNullableFilter<"transfers"> | Decimal | DecimalJsLike | number | string | null
    token?: StringNullableFilter<"transfers"> | string | null
    from?: StringNullableFilter<"transfers"> | string | null
    to?: StringNullableFilter<"transfers"> | string | null
    type?: StringNullableFilter<"transfers"> | string | null
    amount?: StringNullableFilter<"transfers"> | string | null
  }, "trx_hash">

  export type transfersOrderByWithAggregationInput = {
    trx_hash?: SortOrder
    created_at?: SortOrder
    chain_id?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    from?: SortOrderInput | SortOrder
    to?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    _count?: transfersCountOrderByAggregateInput
    _avg?: transfersAvgOrderByAggregateInput
    _max?: transfersMaxOrderByAggregateInput
    _min?: transfersMinOrderByAggregateInput
    _sum?: transfersSumOrderByAggregateInput
  }

  export type transfersScalarWhereWithAggregatesInput = {
    AND?: transfersScalarWhereWithAggregatesInput | transfersScalarWhereWithAggregatesInput[]
    OR?: transfersScalarWhereWithAggregatesInput[]
    NOT?: transfersScalarWhereWithAggregatesInput | transfersScalarWhereWithAggregatesInput[]
    trx_hash?: StringWithAggregatesFilter<"transfers"> | string
    created_at?: DateTimeWithAggregatesFilter<"transfers"> | Date | string
    chain_id?: DecimalNullableWithAggregatesFilter<"transfers"> | Decimal | DecimalJsLike | number | string | null
    token?: StringNullableWithAggregatesFilter<"transfers"> | string | null
    from?: StringNullableWithAggregatesFilter<"transfers"> | string | null
    to?: StringNullableWithAggregatesFilter<"transfers"> | string | null
    type?: StringNullableWithAggregatesFilter<"transfers"> | string | null
    amount?: StringNullableWithAggregatesFilter<"transfers"> | string | null
  }

  export type auction_detailsCreateInput = {
    created_at?: Date | string
    exact_order_id: bigint | number
    symbol_auctioning_token?: string | null
    symbol_bidding_token?: string | null
    address_auctioning_token?: string | null
    address_bidding_token?: string | null
    decimals_auctioning_token?: number | null
    decimals_bidding_token?: number | null
    end_time_timestamp?: Date | string | null
    order_cancellation_end_date?: Date | string | null
    starting_time_stamp?: Date | string | null
    minimum_bidding_amount_per_order?: bigint | number | null
    min_funding_threshold?: bigint | number | null
    allow_list_manager?: string | null
    allow_list_signer?: string | null
    current_volume?: number | null
    current_clearing_order_sell_amount?: bigint | number | null
    current_clearing_order_buy_amount?: bigint | number | null
    current_clearing_price?: number | null
    current_bidding_amount?: bigint | number | null
    is_atomic_closure_allowed?: boolean | null
    is_private_auction?: boolean | null
    interest_score?: number | null
    usd_amount_traded?: number | null
    chain_id: bigint | number
  }

  export type auction_detailsUncheckedCreateInput = {
    created_at?: Date | string
    exact_order_id: bigint | number
    symbol_auctioning_token?: string | null
    symbol_bidding_token?: string | null
    address_auctioning_token?: string | null
    address_bidding_token?: string | null
    decimals_auctioning_token?: number | null
    decimals_bidding_token?: number | null
    end_time_timestamp?: Date | string | null
    order_cancellation_end_date?: Date | string | null
    starting_time_stamp?: Date | string | null
    minimum_bidding_amount_per_order?: bigint | number | null
    min_funding_threshold?: bigint | number | null
    allow_list_manager?: string | null
    allow_list_signer?: string | null
    current_volume?: number | null
    current_clearing_order_sell_amount?: bigint | number | null
    current_clearing_order_buy_amount?: bigint | number | null
    current_clearing_price?: number | null
    current_bidding_amount?: bigint | number | null
    is_atomic_closure_allowed?: boolean | null
    is_private_auction?: boolean | null
    interest_score?: number | null
    usd_amount_traded?: number | null
    chain_id: bigint | number
  }

  export type auction_detailsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    exact_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    symbol_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    decimals_auctioning_token?: NullableIntFieldUpdateOperationsInput | number | null
    decimals_bidding_token?: NullableIntFieldUpdateOperationsInput | number | null
    end_time_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_cancellation_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time_stamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minimum_bidding_amount_per_order?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_funding_threshold?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    allow_list_manager?: NullableStringFieldUpdateOperationsInput | string | null
    allow_list_signer?: NullableStringFieldUpdateOperationsInput | string | null
    current_volume?: NullableIntFieldUpdateOperationsInput | number | null
    current_clearing_order_sell_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_order_buy_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_price?: NullableIntFieldUpdateOperationsInput | number | null
    current_bidding_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_atomic_closure_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_private_auction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    interest_score?: NullableIntFieldUpdateOperationsInput | number | null
    usd_amount_traded?: NullableIntFieldUpdateOperationsInput | number | null
    chain_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auction_detailsUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    exact_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    symbol_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    decimals_auctioning_token?: NullableIntFieldUpdateOperationsInput | number | null
    decimals_bidding_token?: NullableIntFieldUpdateOperationsInput | number | null
    end_time_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_cancellation_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time_stamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minimum_bidding_amount_per_order?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_funding_threshold?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    allow_list_manager?: NullableStringFieldUpdateOperationsInput | string | null
    allow_list_signer?: NullableStringFieldUpdateOperationsInput | string | null
    current_volume?: NullableIntFieldUpdateOperationsInput | number | null
    current_clearing_order_sell_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_order_buy_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_price?: NullableIntFieldUpdateOperationsInput | number | null
    current_bidding_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_atomic_closure_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_private_auction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    interest_score?: NullableIntFieldUpdateOperationsInput | number | null
    usd_amount_traded?: NullableIntFieldUpdateOperationsInput | number | null
    chain_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auction_detailsCreateManyInput = {
    created_at?: Date | string
    exact_order_id: bigint | number
    symbol_auctioning_token?: string | null
    symbol_bidding_token?: string | null
    address_auctioning_token?: string | null
    address_bidding_token?: string | null
    decimals_auctioning_token?: number | null
    decimals_bidding_token?: number | null
    end_time_timestamp?: Date | string | null
    order_cancellation_end_date?: Date | string | null
    starting_time_stamp?: Date | string | null
    minimum_bidding_amount_per_order?: bigint | number | null
    min_funding_threshold?: bigint | number | null
    allow_list_manager?: string | null
    allow_list_signer?: string | null
    current_volume?: number | null
    current_clearing_order_sell_amount?: bigint | number | null
    current_clearing_order_buy_amount?: bigint | number | null
    current_clearing_price?: number | null
    current_bidding_amount?: bigint | number | null
    is_atomic_closure_allowed?: boolean | null
    is_private_auction?: boolean | null
    interest_score?: number | null
    usd_amount_traded?: number | null
    chain_id: bigint | number
  }

  export type auction_detailsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    exact_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    symbol_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    decimals_auctioning_token?: NullableIntFieldUpdateOperationsInput | number | null
    decimals_bidding_token?: NullableIntFieldUpdateOperationsInput | number | null
    end_time_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_cancellation_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time_stamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minimum_bidding_amount_per_order?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_funding_threshold?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    allow_list_manager?: NullableStringFieldUpdateOperationsInput | string | null
    allow_list_signer?: NullableStringFieldUpdateOperationsInput | string | null
    current_volume?: NullableIntFieldUpdateOperationsInput | number | null
    current_clearing_order_sell_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_order_buy_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_price?: NullableIntFieldUpdateOperationsInput | number | null
    current_bidding_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_atomic_closure_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_private_auction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    interest_score?: NullableIntFieldUpdateOperationsInput | number | null
    usd_amount_traded?: NullableIntFieldUpdateOperationsInput | number | null
    chain_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type auction_detailsUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    exact_order_id?: BigIntFieldUpdateOperationsInput | bigint | number
    symbol_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    symbol_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_auctioning_token?: NullableStringFieldUpdateOperationsInput | string | null
    address_bidding_token?: NullableStringFieldUpdateOperationsInput | string | null
    decimals_auctioning_token?: NullableIntFieldUpdateOperationsInput | number | null
    decimals_bidding_token?: NullableIntFieldUpdateOperationsInput | number | null
    end_time_timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_cancellation_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    starting_time_stamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minimum_bidding_amount_per_order?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_funding_threshold?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    allow_list_manager?: NullableStringFieldUpdateOperationsInput | string | null
    allow_list_signer?: NullableStringFieldUpdateOperationsInput | string | null
    current_volume?: NullableIntFieldUpdateOperationsInput | number | null
    current_clearing_order_sell_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_order_buy_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    current_clearing_price?: NullableIntFieldUpdateOperationsInput | number | null
    current_bidding_amount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    is_atomic_closure_allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_private_auction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    interest_score?: NullableIntFieldUpdateOperationsInput | number | null
    usd_amount_traded?: NullableIntFieldUpdateOperationsInput | number | null
    chain_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ordersCreateInput = {
    created_at?: Date | string
    auction_id: bigint | number
    sell_amount: bigint | number
    buy_amount: bigint | number
    user_id: bigint | number
    price?: number | null
    volume?: bigint | number | null
    timestamp?: Date | string | null
    transactionHash: string
  }

  export type ordersUncheckedCreateInput = {
    created_at?: Date | string
    auction_id: bigint | number
    sell_amount: bigint | number
    buy_amount: bigint | number
    user_id: bigint | number
    price?: number | null
    volume?: bigint | number | null
    timestamp?: Date | string | null
    transactionHash: string
  }

  export type ordersUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auction_id?: BigIntFieldUpdateOperationsInput | bigint | number
    sell_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    buy_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type ordersUncheckedUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auction_id?: BigIntFieldUpdateOperationsInput | bigint | number
    sell_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    buy_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type ordersCreateManyInput = {
    created_at?: Date | string
    auction_id: bigint | number
    sell_amount: bigint | number
    buy_amount: bigint | number
    user_id: bigint | number
    price?: number | null
    volume?: bigint | number | null
    timestamp?: Date | string | null
    transactionHash: string
  }

  export type ordersUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auction_id?: BigIntFieldUpdateOperationsInput | bigint | number
    sell_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    buy_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type ordersUncheckedUpdateManyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auction_id?: BigIntFieldUpdateOperationsInput | bigint | number
    sell_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    buy_amount?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: NullableIntFieldUpdateOperationsInput | number | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactionHash?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id: bigint | number
    created_at?: Date | string
    address: string
  }

  export type usersUncheckedCreateInput = {
    id: bigint | number
    created_at?: Date | string
    address: string
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id: bigint | number
    created_at?: Date | string
    address: string
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type sessionCreateInput = {
    id?: string
    created_at?: Date | string
    tx: string
    account: string
  }

  export type sessionUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    tx: string
    account: string
  }

  export type sessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tx?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type sessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tx?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type sessionCreateManyInput = {
    id?: string
    created_at?: Date | string
    tx: string
    account: string
  }

  export type sessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tx?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type sessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tx?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type transfersCreateInput = {
    trx_hash: string
    created_at?: Date | string
    chain_id?: Decimal | DecimalJsLike | number | string | null
    token?: string | null
    from?: string | null
    to?: string | null
    type?: string | null
    amount?: string | null
  }

  export type transfersUncheckedCreateInput = {
    trx_hash: string
    created_at?: Date | string
    chain_id?: Decimal | DecimalJsLike | number | string | null
    token?: string | null
    from?: string | null
    to?: string | null
    type?: string | null
    amount?: string | null
  }

  export type transfersUpdateInput = {
    trx_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chain_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transfersUncheckedUpdateInput = {
    trx_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chain_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transfersCreateManyInput = {
    trx_hash: string
    created_at?: Date | string
    chain_id?: Decimal | DecimalJsLike | number | string | null
    token?: string | null
    from?: string | null
    to?: string | null
    type?: string | null
    amount?: string | null
  }

  export type transfersUpdateManyMutationInput = {
    trx_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chain_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transfersUncheckedUpdateManyInput = {
    trx_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chain_id?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    from?: NullableStringFieldUpdateOperationsInput | string | null
    to?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type auction_detailsExact_order_idChain_idCompoundUniqueInput = {
    exact_order_id: bigint | number
    chain_id: bigint | number
  }

  export type auction_detailsCountOrderByAggregateInput = {
    created_at?: SortOrder
    exact_order_id?: SortOrder
    symbol_auctioning_token?: SortOrder
    symbol_bidding_token?: SortOrder
    address_auctioning_token?: SortOrder
    address_bidding_token?: SortOrder
    decimals_auctioning_token?: SortOrder
    decimals_bidding_token?: SortOrder
    end_time_timestamp?: SortOrder
    order_cancellation_end_date?: SortOrder
    starting_time_stamp?: SortOrder
    minimum_bidding_amount_per_order?: SortOrder
    min_funding_threshold?: SortOrder
    allow_list_manager?: SortOrder
    allow_list_signer?: SortOrder
    current_volume?: SortOrder
    current_clearing_order_sell_amount?: SortOrder
    current_clearing_order_buy_amount?: SortOrder
    current_clearing_price?: SortOrder
    current_bidding_amount?: SortOrder
    is_atomic_closure_allowed?: SortOrder
    is_private_auction?: SortOrder
    interest_score?: SortOrder
    usd_amount_traded?: SortOrder
    chain_id?: SortOrder
  }

  export type auction_detailsAvgOrderByAggregateInput = {
    exact_order_id?: SortOrder
    decimals_auctioning_token?: SortOrder
    decimals_bidding_token?: SortOrder
    minimum_bidding_amount_per_order?: SortOrder
    min_funding_threshold?: SortOrder
    current_volume?: SortOrder
    current_clearing_order_sell_amount?: SortOrder
    current_clearing_order_buy_amount?: SortOrder
    current_clearing_price?: SortOrder
    current_bidding_amount?: SortOrder
    interest_score?: SortOrder
    usd_amount_traded?: SortOrder
    chain_id?: SortOrder
  }

  export type auction_detailsMaxOrderByAggregateInput = {
    created_at?: SortOrder
    exact_order_id?: SortOrder
    symbol_auctioning_token?: SortOrder
    symbol_bidding_token?: SortOrder
    address_auctioning_token?: SortOrder
    address_bidding_token?: SortOrder
    decimals_auctioning_token?: SortOrder
    decimals_bidding_token?: SortOrder
    end_time_timestamp?: SortOrder
    order_cancellation_end_date?: SortOrder
    starting_time_stamp?: SortOrder
    minimum_bidding_amount_per_order?: SortOrder
    min_funding_threshold?: SortOrder
    allow_list_manager?: SortOrder
    allow_list_signer?: SortOrder
    current_volume?: SortOrder
    current_clearing_order_sell_amount?: SortOrder
    current_clearing_order_buy_amount?: SortOrder
    current_clearing_price?: SortOrder
    current_bidding_amount?: SortOrder
    is_atomic_closure_allowed?: SortOrder
    is_private_auction?: SortOrder
    interest_score?: SortOrder
    usd_amount_traded?: SortOrder
    chain_id?: SortOrder
  }

  export type auction_detailsMinOrderByAggregateInput = {
    created_at?: SortOrder
    exact_order_id?: SortOrder
    symbol_auctioning_token?: SortOrder
    symbol_bidding_token?: SortOrder
    address_auctioning_token?: SortOrder
    address_bidding_token?: SortOrder
    decimals_auctioning_token?: SortOrder
    decimals_bidding_token?: SortOrder
    end_time_timestamp?: SortOrder
    order_cancellation_end_date?: SortOrder
    starting_time_stamp?: SortOrder
    minimum_bidding_amount_per_order?: SortOrder
    min_funding_threshold?: SortOrder
    allow_list_manager?: SortOrder
    allow_list_signer?: SortOrder
    current_volume?: SortOrder
    current_clearing_order_sell_amount?: SortOrder
    current_clearing_order_buy_amount?: SortOrder
    current_clearing_price?: SortOrder
    current_bidding_amount?: SortOrder
    is_atomic_closure_allowed?: SortOrder
    is_private_auction?: SortOrder
    interest_score?: SortOrder
    usd_amount_traded?: SortOrder
    chain_id?: SortOrder
  }

  export type auction_detailsSumOrderByAggregateInput = {
    exact_order_id?: SortOrder
    decimals_auctioning_token?: SortOrder
    decimals_bidding_token?: SortOrder
    minimum_bidding_amount_per_order?: SortOrder
    min_funding_threshold?: SortOrder
    current_volume?: SortOrder
    current_clearing_order_sell_amount?: SortOrder
    current_clearing_order_buy_amount?: SortOrder
    current_clearing_price?: SortOrder
    current_bidding_amount?: SortOrder
    interest_score?: SortOrder
    usd_amount_traded?: SortOrder
    chain_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ordersCountOrderByAggregateInput = {
    created_at?: SortOrder
    auction_id?: SortOrder
    sell_amount?: SortOrder
    buy_amount?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    transactionHash?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    auction_id?: SortOrder
    sell_amount?: SortOrder
    buy_amount?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    volume?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    created_at?: SortOrder
    auction_id?: SortOrder
    sell_amount?: SortOrder
    buy_amount?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    transactionHash?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    created_at?: SortOrder
    auction_id?: SortOrder
    sell_amount?: SortOrder
    buy_amount?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    transactionHash?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    auction_id?: SortOrder
    sell_amount?: SortOrder
    buy_amount?: SortOrder
    user_id?: SortOrder
    price?: SortOrder
    volume?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usersIdCreated_atCompoundUniqueInput = {
    id: bigint | number
    created_at: Date | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    address?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    address?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    address?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type sessionCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    tx?: SortOrder
    account?: SortOrder
  }

  export type sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    tx?: SortOrder
    account?: SortOrder
  }

  export type sessionMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    tx?: SortOrder
    account?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type transfersCountOrderByAggregateInput = {
    trx_hash?: SortOrder
    created_at?: SortOrder
    chain_id?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    amount?: SortOrder
  }

  export type transfersAvgOrderByAggregateInput = {
    chain_id?: SortOrder
  }

  export type transfersMaxOrderByAggregateInput = {
    trx_hash?: SortOrder
    created_at?: SortOrder
    chain_id?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    amount?: SortOrder
  }

  export type transfersMinOrderByAggregateInput = {
    trx_hash?: SortOrder
    created_at?: SortOrder
    chain_id?: SortOrder
    token?: SortOrder
    from?: SortOrder
    to?: SortOrder
    type?: SortOrder
    amount?: SortOrder
  }

  export type transfersSumOrderByAggregateInput = {
    chain_id?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use auction_detailsDefaultArgs instead
     */
    export type auction_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = auction_detailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ordersDefaultArgs instead
     */
    export type ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ordersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sessionDefaultArgs instead
     */
    export type sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transfersDefaultArgs instead
     */
    export type transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transfersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}