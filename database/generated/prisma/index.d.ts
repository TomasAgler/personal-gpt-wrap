
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
 * Model InterviewPrep
 * 
 */
export type InterviewPrep = $Result.DefaultSelection<Prisma.$InterviewPrepPayload>
/**
 * Model InterviewPrepQuestion
 * 
 */
export type InterviewPrepQuestion = $Result.DefaultSelection<Prisma.$InterviewPrepQuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more InterviewPreps
 * const interviewPreps = await prisma.interviewPrep.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more InterviewPreps
   * const interviewPreps = await prisma.interviewPrep.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.interviewPrep`: Exposes CRUD operations for the **InterviewPrep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewPreps
    * const interviewPreps = await prisma.interviewPrep.findMany()
    * ```
    */
  get interviewPrep(): Prisma.InterviewPrepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewPrepQuestion`: Exposes CRUD operations for the **InterviewPrepQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewPrepQuestions
    * const interviewPrepQuestions = await prisma.interviewPrepQuestion.findMany()
    * ```
    */
  get interviewPrepQuestion(): Prisma.InterviewPrepQuestionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    InterviewPrep: 'InterviewPrep',
    InterviewPrepQuestion: 'InterviewPrepQuestion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "interviewPrep" | "interviewPrepQuestion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      InterviewPrep: {
        payload: Prisma.$InterviewPrepPayload<ExtArgs>
        fields: Prisma.InterviewPrepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewPrepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewPrepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          findFirst: {
            args: Prisma.InterviewPrepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewPrepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          findMany: {
            args: Prisma.InterviewPrepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>[]
          }
          create: {
            args: Prisma.InterviewPrepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          createMany: {
            args: Prisma.InterviewPrepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewPrepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>[]
          }
          delete: {
            args: Prisma.InterviewPrepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          update: {
            args: Prisma.InterviewPrepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          deleteMany: {
            args: Prisma.InterviewPrepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewPrepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewPrepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>[]
          }
          upsert: {
            args: Prisma.InterviewPrepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepPayload>
          }
          aggregate: {
            args: Prisma.InterviewPrepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewPrep>
          }
          groupBy: {
            args: Prisma.InterviewPrepGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewPrepGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewPrepCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewPrepCountAggregateOutputType> | number
          }
        }
      }
      InterviewPrepQuestion: {
        payload: Prisma.$InterviewPrepQuestionPayload<ExtArgs>
        fields: Prisma.InterviewPrepQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewPrepQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewPrepQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>
          }
          findFirst: {
            args: Prisma.InterviewPrepQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewPrepQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>
          }
          findMany: {
            args: Prisma.InterviewPrepQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>[]
          }
          create: {
            args: Prisma.InterviewPrepQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>
          }
          createMany: {
            args: Prisma.InterviewPrepQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewPrepQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>[]
          }
          delete: {
            args: Prisma.InterviewPrepQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>
          }
          update: {
            args: Prisma.InterviewPrepQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>
          }
          deleteMany: {
            args: Prisma.InterviewPrepQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewPrepQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewPrepQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>[]
          }
          upsert: {
            args: Prisma.InterviewPrepQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewPrepQuestionPayload>
          }
          aggregate: {
            args: Prisma.InterviewPrepQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewPrepQuestion>
          }
          groupBy: {
            args: Prisma.InterviewPrepQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewPrepQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewPrepQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewPrepQuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    interviewPrep?: InterviewPrepOmit
    interviewPrepQuestion?: InterviewPrepQuestionOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type InterviewPrepCountOutputType
   */

  export type InterviewPrepCountOutputType = {
    questions: number
  }

  export type InterviewPrepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | InterviewPrepCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * InterviewPrepCountOutputType without action
   */
  export type InterviewPrepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepCountOutputType
     */
    select?: InterviewPrepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterviewPrepCountOutputType without action
   */
  export type InterviewPrepCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewPrepQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model InterviewPrep
   */

  export type AggregateInterviewPrep = {
    _count: InterviewPrepCountAggregateOutputType | null
    _avg: InterviewPrepAvgAggregateOutputType | null
    _sum: InterviewPrepSumAggregateOutputType | null
    _min: InterviewPrepMinAggregateOutputType | null
    _max: InterviewPrepMaxAggregateOutputType | null
  }

  export type InterviewPrepAvgAggregateOutputType = {
    id: number | null
  }

  export type InterviewPrepSumAggregateOutputType = {
    id: number | null
  }

  export type InterviewPrepMinAggregateOutputType = {
    id: number | null
    jobPosition: string | null
    jobRequirements: string | null
    jobResponsibilities: string | null
    evaluation: string | null
  }

  export type InterviewPrepMaxAggregateOutputType = {
    id: number | null
    jobPosition: string | null
    jobRequirements: string | null
    jobResponsibilities: string | null
    evaluation: string | null
  }

  export type InterviewPrepCountAggregateOutputType = {
    id: number
    jobPosition: number
    jobRequirements: number
    jobResponsibilities: number
    evaluation: number
    _all: number
  }


  export type InterviewPrepAvgAggregateInputType = {
    id?: true
  }

  export type InterviewPrepSumAggregateInputType = {
    id?: true
  }

  export type InterviewPrepMinAggregateInputType = {
    id?: true
    jobPosition?: true
    jobRequirements?: true
    jobResponsibilities?: true
    evaluation?: true
  }

  export type InterviewPrepMaxAggregateInputType = {
    id?: true
    jobPosition?: true
    jobRequirements?: true
    jobResponsibilities?: true
    evaluation?: true
  }

  export type InterviewPrepCountAggregateInputType = {
    id?: true
    jobPosition?: true
    jobRequirements?: true
    jobResponsibilities?: true
    evaluation?: true
    _all?: true
  }

  export type InterviewPrepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPrep to aggregate.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewPreps
    **/
    _count?: true | InterviewPrepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewPrepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewPrepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewPrepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewPrepMaxAggregateInputType
  }

  export type GetInterviewPrepAggregateType<T extends InterviewPrepAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewPrep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewPrep[P]>
      : GetScalarType<T[P], AggregateInterviewPrep[P]>
  }




  export type InterviewPrepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewPrepWhereInput
    orderBy?: InterviewPrepOrderByWithAggregationInput | InterviewPrepOrderByWithAggregationInput[]
    by: InterviewPrepScalarFieldEnum[] | InterviewPrepScalarFieldEnum
    having?: InterviewPrepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewPrepCountAggregateInputType | true
    _avg?: InterviewPrepAvgAggregateInputType
    _sum?: InterviewPrepSumAggregateInputType
    _min?: InterviewPrepMinAggregateInputType
    _max?: InterviewPrepMaxAggregateInputType
  }

  export type InterviewPrepGroupByOutputType = {
    id: number
    jobPosition: string
    jobRequirements: string
    jobResponsibilities: string
    evaluation: string | null
    _count: InterviewPrepCountAggregateOutputType | null
    _avg: InterviewPrepAvgAggregateOutputType | null
    _sum: InterviewPrepSumAggregateOutputType | null
    _min: InterviewPrepMinAggregateOutputType | null
    _max: InterviewPrepMaxAggregateOutputType | null
  }

  type GetInterviewPrepGroupByPayload<T extends InterviewPrepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewPrepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewPrepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewPrepGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewPrepGroupByOutputType[P]>
        }
      >
    >


  export type InterviewPrepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobPosition?: boolean
    jobRequirements?: boolean
    jobResponsibilities?: boolean
    evaluation?: boolean
    questions?: boolean | InterviewPrep$questionsArgs<ExtArgs>
    _count?: boolean | InterviewPrepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewPrep"]>

  export type InterviewPrepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobPosition?: boolean
    jobRequirements?: boolean
    jobResponsibilities?: boolean
    evaluation?: boolean
  }, ExtArgs["result"]["interviewPrep"]>

  export type InterviewPrepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobPosition?: boolean
    jobRequirements?: boolean
    jobResponsibilities?: boolean
    evaluation?: boolean
  }, ExtArgs["result"]["interviewPrep"]>

  export type InterviewPrepSelectScalar = {
    id?: boolean
    jobPosition?: boolean
    jobRequirements?: boolean
    jobResponsibilities?: boolean
    evaluation?: boolean
  }

  export type InterviewPrepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobPosition" | "jobRequirements" | "jobResponsibilities" | "evaluation", ExtArgs["result"]["interviewPrep"]>
  export type InterviewPrepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | InterviewPrep$questionsArgs<ExtArgs>
    _count?: boolean | InterviewPrepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterviewPrepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InterviewPrepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InterviewPrepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewPrep"
    objects: {
      questions: Prisma.$InterviewPrepQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobPosition: string
      jobRequirements: string
      jobResponsibilities: string
      evaluation: string | null
    }, ExtArgs["result"]["interviewPrep"]>
    composites: {}
  }

  type InterviewPrepGetPayload<S extends boolean | null | undefined | InterviewPrepDefaultArgs> = $Result.GetResult<Prisma.$InterviewPrepPayload, S>

  type InterviewPrepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewPrepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewPrepCountAggregateInputType | true
    }

  export interface InterviewPrepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewPrep'], meta: { name: 'InterviewPrep' } }
    /**
     * Find zero or one InterviewPrep that matches the filter.
     * @param {InterviewPrepFindUniqueArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewPrepFindUniqueArgs>(args: SelectSubset<T, InterviewPrepFindUniqueArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewPrep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewPrepFindUniqueOrThrowArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewPrepFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewPrepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewPrep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepFindFirstArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewPrepFindFirstArgs>(args?: SelectSubset<T, InterviewPrepFindFirstArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewPrep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepFindFirstOrThrowArgs} args - Arguments to find a InterviewPrep
     * @example
     * // Get one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewPrepFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewPrepFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewPreps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewPreps
     * const interviewPreps = await prisma.interviewPrep.findMany()
     * 
     * // Get first 10 InterviewPreps
     * const interviewPreps = await prisma.interviewPrep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewPrepWithIdOnly = await prisma.interviewPrep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewPrepFindManyArgs>(args?: SelectSubset<T, InterviewPrepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewPrep.
     * @param {InterviewPrepCreateArgs} args - Arguments to create a InterviewPrep.
     * @example
     * // Create one InterviewPrep
     * const InterviewPrep = await prisma.interviewPrep.create({
     *   data: {
     *     // ... data to create a InterviewPrep
     *   }
     * })
     * 
     */
    create<T extends InterviewPrepCreateArgs>(args: SelectSubset<T, InterviewPrepCreateArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewPreps.
     * @param {InterviewPrepCreateManyArgs} args - Arguments to create many InterviewPreps.
     * @example
     * // Create many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewPrepCreateManyArgs>(args?: SelectSubset<T, InterviewPrepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewPreps and returns the data saved in the database.
     * @param {InterviewPrepCreateManyAndReturnArgs} args - Arguments to create many InterviewPreps.
     * @example
     * // Create many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewPreps and only return the `id`
     * const interviewPrepWithIdOnly = await prisma.interviewPrep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewPrepCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewPrepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewPrep.
     * @param {InterviewPrepDeleteArgs} args - Arguments to delete one InterviewPrep.
     * @example
     * // Delete one InterviewPrep
     * const InterviewPrep = await prisma.interviewPrep.delete({
     *   where: {
     *     // ... filter to delete one InterviewPrep
     *   }
     * })
     * 
     */
    delete<T extends InterviewPrepDeleteArgs>(args: SelectSubset<T, InterviewPrepDeleteArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewPrep.
     * @param {InterviewPrepUpdateArgs} args - Arguments to update one InterviewPrep.
     * @example
     * // Update one InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewPrepUpdateArgs>(args: SelectSubset<T, InterviewPrepUpdateArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewPreps.
     * @param {InterviewPrepDeleteManyArgs} args - Arguments to filter InterviewPreps to delete.
     * @example
     * // Delete a few InterviewPreps
     * const { count } = await prisma.interviewPrep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewPrepDeleteManyArgs>(args?: SelectSubset<T, InterviewPrepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewPreps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewPrepUpdateManyArgs>(args: SelectSubset<T, InterviewPrepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewPreps and returns the data updated in the database.
     * @param {InterviewPrepUpdateManyAndReturnArgs} args - Arguments to update many InterviewPreps.
     * @example
     * // Update many InterviewPreps
     * const interviewPrep = await prisma.interviewPrep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewPreps and only return the `id`
     * const interviewPrepWithIdOnly = await prisma.interviewPrep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewPrepUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewPrepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewPrep.
     * @param {InterviewPrepUpsertArgs} args - Arguments to update or create a InterviewPrep.
     * @example
     * // Update or create a InterviewPrep
     * const interviewPrep = await prisma.interviewPrep.upsert({
     *   create: {
     *     // ... data to create a InterviewPrep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewPrep we want to update
     *   }
     * })
     */
    upsert<T extends InterviewPrepUpsertArgs>(args: SelectSubset<T, InterviewPrepUpsertArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewPreps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepCountArgs} args - Arguments to filter InterviewPreps to count.
     * @example
     * // Count the number of InterviewPreps
     * const count = await prisma.interviewPrep.count({
     *   where: {
     *     // ... the filter for the InterviewPreps we want to count
     *   }
     * })
    **/
    count<T extends InterviewPrepCountArgs>(
      args?: Subset<T, InterviewPrepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewPrepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewPrep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewPrepAggregateArgs>(args: Subset<T, InterviewPrepAggregateArgs>): Prisma.PrismaPromise<GetInterviewPrepAggregateType<T>>

    /**
     * Group by InterviewPrep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepGroupByArgs} args - Group by arguments.
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
      T extends InterviewPrepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewPrepGroupByArgs['orderBy'] }
        : { orderBy?: InterviewPrepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewPrepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewPrepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewPrep model
   */
  readonly fields: InterviewPrepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewPrep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewPrepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends InterviewPrep$questionsArgs<ExtArgs> = {}>(args?: Subset<T, InterviewPrep$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewPrep model
   */
  interface InterviewPrepFieldRefs {
    readonly id: FieldRef<"InterviewPrep", 'Int'>
    readonly jobPosition: FieldRef<"InterviewPrep", 'String'>
    readonly jobRequirements: FieldRef<"InterviewPrep", 'String'>
    readonly jobResponsibilities: FieldRef<"InterviewPrep", 'String'>
    readonly evaluation: FieldRef<"InterviewPrep", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InterviewPrep findUnique
   */
  export type InterviewPrepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep findUniqueOrThrow
   */
  export type InterviewPrepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep findFirst
   */
  export type InterviewPrepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewPreps.
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewPreps.
     */
    distinct?: InterviewPrepScalarFieldEnum | InterviewPrepScalarFieldEnum[]
  }

  /**
   * InterviewPrep findFirstOrThrow
   */
  export type InterviewPrepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrep to fetch.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewPreps.
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewPreps.
     */
    distinct?: InterviewPrepScalarFieldEnum | InterviewPrepScalarFieldEnum[]
  }

  /**
   * InterviewPrep findMany
   */
  export type InterviewPrepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPreps to fetch.
     */
    where?: InterviewPrepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPreps to fetch.
     */
    orderBy?: InterviewPrepOrderByWithRelationInput | InterviewPrepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewPreps.
     */
    cursor?: InterviewPrepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPreps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPreps.
     */
    skip?: number
    distinct?: InterviewPrepScalarFieldEnum | InterviewPrepScalarFieldEnum[]
  }

  /**
   * InterviewPrep create
   */
  export type InterviewPrepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewPrep.
     */
    data: XOR<InterviewPrepCreateInput, InterviewPrepUncheckedCreateInput>
  }

  /**
   * InterviewPrep createMany
   */
  export type InterviewPrepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewPreps.
     */
    data: InterviewPrepCreateManyInput | InterviewPrepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewPrep createManyAndReturn
   */
  export type InterviewPrepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewPreps.
     */
    data: InterviewPrepCreateManyInput | InterviewPrepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewPrep update
   */
  export type InterviewPrepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewPrep.
     */
    data: XOR<InterviewPrepUpdateInput, InterviewPrepUncheckedUpdateInput>
    /**
     * Choose, which InterviewPrep to update.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep updateMany
   */
  export type InterviewPrepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewPreps.
     */
    data: XOR<InterviewPrepUpdateManyMutationInput, InterviewPrepUncheckedUpdateManyInput>
    /**
     * Filter which InterviewPreps to update
     */
    where?: InterviewPrepWhereInput
    /**
     * Limit how many InterviewPreps to update.
     */
    limit?: number
  }

  /**
   * InterviewPrep updateManyAndReturn
   */
  export type InterviewPrepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * The data used to update InterviewPreps.
     */
    data: XOR<InterviewPrepUpdateManyMutationInput, InterviewPrepUncheckedUpdateManyInput>
    /**
     * Filter which InterviewPreps to update
     */
    where?: InterviewPrepWhereInput
    /**
     * Limit how many InterviewPreps to update.
     */
    limit?: number
  }

  /**
   * InterviewPrep upsert
   */
  export type InterviewPrepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewPrep to update in case it exists.
     */
    where: InterviewPrepWhereUniqueInput
    /**
     * In case the InterviewPrep found by the `where` argument doesn't exist, create a new InterviewPrep with this data.
     */
    create: XOR<InterviewPrepCreateInput, InterviewPrepUncheckedCreateInput>
    /**
     * In case the InterviewPrep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewPrepUpdateInput, InterviewPrepUncheckedUpdateInput>
  }

  /**
   * InterviewPrep delete
   */
  export type InterviewPrepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    /**
     * Filter which InterviewPrep to delete.
     */
    where: InterviewPrepWhereUniqueInput
  }

  /**
   * InterviewPrep deleteMany
   */
  export type InterviewPrepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPreps to delete
     */
    where?: InterviewPrepWhereInput
    /**
     * Limit how many InterviewPreps to delete.
     */
    limit?: number
  }

  /**
   * InterviewPrep.questions
   */
  export type InterviewPrep$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    where?: InterviewPrepQuestionWhereInput
    orderBy?: InterviewPrepQuestionOrderByWithRelationInput | InterviewPrepQuestionOrderByWithRelationInput[]
    cursor?: InterviewPrepQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewPrepQuestionScalarFieldEnum | InterviewPrepQuestionScalarFieldEnum[]
  }

  /**
   * InterviewPrep without action
   */
  export type InterviewPrepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
  }


  /**
   * Model InterviewPrepQuestion
   */

  export type AggregateInterviewPrepQuestion = {
    _count: InterviewPrepQuestionCountAggregateOutputType | null
    _avg: InterviewPrepQuestionAvgAggregateOutputType | null
    _sum: InterviewPrepQuestionSumAggregateOutputType | null
    _min: InterviewPrepQuestionMinAggregateOutputType | null
    _max: InterviewPrepQuestionMaxAggregateOutputType | null
  }

  export type InterviewPrepQuestionAvgAggregateOutputType = {
    id: number | null
    score: number | null
    interviewPrepId: number | null
  }

  export type InterviewPrepQuestionSumAggregateOutputType = {
    id: number | null
    score: number | null
    interviewPrepId: number | null
  }

  export type InterviewPrepQuestionMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    evaluation: string | null
    improvementTip: string | null
    score: number | null
    interviewPrepId: number | null
  }

  export type InterviewPrepQuestionMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    evaluation: string | null
    improvementTip: string | null
    score: number | null
    interviewPrepId: number | null
  }

  export type InterviewPrepQuestionCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    evaluation: number
    improvementTip: number
    score: number
    interviewPrepId: number
    _all: number
  }


  export type InterviewPrepQuestionAvgAggregateInputType = {
    id?: true
    score?: true
    interviewPrepId?: true
  }

  export type InterviewPrepQuestionSumAggregateInputType = {
    id?: true
    score?: true
    interviewPrepId?: true
  }

  export type InterviewPrepQuestionMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    evaluation?: true
    improvementTip?: true
    score?: true
    interviewPrepId?: true
  }

  export type InterviewPrepQuestionMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    evaluation?: true
    improvementTip?: true
    score?: true
    interviewPrepId?: true
  }

  export type InterviewPrepQuestionCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    evaluation?: true
    improvementTip?: true
    score?: true
    interviewPrepId?: true
    _all?: true
  }

  export type InterviewPrepQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPrepQuestion to aggregate.
     */
    where?: InterviewPrepQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPrepQuestions to fetch.
     */
    orderBy?: InterviewPrepQuestionOrderByWithRelationInput | InterviewPrepQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewPrepQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPrepQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPrepQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewPrepQuestions
    **/
    _count?: true | InterviewPrepQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterviewPrepQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterviewPrepQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewPrepQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewPrepQuestionMaxAggregateInputType
  }

  export type GetInterviewPrepQuestionAggregateType<T extends InterviewPrepQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewPrepQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewPrepQuestion[P]>
      : GetScalarType<T[P], AggregateInterviewPrepQuestion[P]>
  }




  export type InterviewPrepQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewPrepQuestionWhereInput
    orderBy?: InterviewPrepQuestionOrderByWithAggregationInput | InterviewPrepQuestionOrderByWithAggregationInput[]
    by: InterviewPrepQuestionScalarFieldEnum[] | InterviewPrepQuestionScalarFieldEnum
    having?: InterviewPrepQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewPrepQuestionCountAggregateInputType | true
    _avg?: InterviewPrepQuestionAvgAggregateInputType
    _sum?: InterviewPrepQuestionSumAggregateInputType
    _min?: InterviewPrepQuestionMinAggregateInputType
    _max?: InterviewPrepQuestionMaxAggregateInputType
  }

  export type InterviewPrepQuestionGroupByOutputType = {
    id: number
    question: string
    answer: string | null
    evaluation: string | null
    improvementTip: string | null
    score: number | null
    interviewPrepId: number | null
    _count: InterviewPrepQuestionCountAggregateOutputType | null
    _avg: InterviewPrepQuestionAvgAggregateOutputType | null
    _sum: InterviewPrepQuestionSumAggregateOutputType | null
    _min: InterviewPrepQuestionMinAggregateOutputType | null
    _max: InterviewPrepQuestionMaxAggregateOutputType | null
  }

  type GetInterviewPrepQuestionGroupByPayload<T extends InterviewPrepQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewPrepQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewPrepQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewPrepQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewPrepQuestionGroupByOutputType[P]>
        }
      >
    >


  export type InterviewPrepQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    evaluation?: boolean
    improvementTip?: boolean
    score?: boolean
    interviewPrepId?: boolean
    interviewPrep?: boolean | InterviewPrepQuestion$interviewPrepArgs<ExtArgs>
  }, ExtArgs["result"]["interviewPrepQuestion"]>

  export type InterviewPrepQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    evaluation?: boolean
    improvementTip?: boolean
    score?: boolean
    interviewPrepId?: boolean
    interviewPrep?: boolean | InterviewPrepQuestion$interviewPrepArgs<ExtArgs>
  }, ExtArgs["result"]["interviewPrepQuestion"]>

  export type InterviewPrepQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    evaluation?: boolean
    improvementTip?: boolean
    score?: boolean
    interviewPrepId?: boolean
    interviewPrep?: boolean | InterviewPrepQuestion$interviewPrepArgs<ExtArgs>
  }, ExtArgs["result"]["interviewPrepQuestion"]>

  export type InterviewPrepQuestionSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    evaluation?: boolean
    improvementTip?: boolean
    score?: boolean
    interviewPrepId?: boolean
  }

  export type InterviewPrepQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "evaluation" | "improvementTip" | "score" | "interviewPrepId", ExtArgs["result"]["interviewPrepQuestion"]>
  export type InterviewPrepQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewPrep?: boolean | InterviewPrepQuestion$interviewPrepArgs<ExtArgs>
  }
  export type InterviewPrepQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewPrep?: boolean | InterviewPrepQuestion$interviewPrepArgs<ExtArgs>
  }
  export type InterviewPrepQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interviewPrep?: boolean | InterviewPrepQuestion$interviewPrepArgs<ExtArgs>
  }

  export type $InterviewPrepQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewPrepQuestion"
    objects: {
      interviewPrep: Prisma.$InterviewPrepPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string | null
      evaluation: string | null
      improvementTip: string | null
      score: number | null
      interviewPrepId: number | null
    }, ExtArgs["result"]["interviewPrepQuestion"]>
    composites: {}
  }

  type InterviewPrepQuestionGetPayload<S extends boolean | null | undefined | InterviewPrepQuestionDefaultArgs> = $Result.GetResult<Prisma.$InterviewPrepQuestionPayload, S>

  type InterviewPrepQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewPrepQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewPrepQuestionCountAggregateInputType | true
    }

  export interface InterviewPrepQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewPrepQuestion'], meta: { name: 'InterviewPrepQuestion' } }
    /**
     * Find zero or one InterviewPrepQuestion that matches the filter.
     * @param {InterviewPrepQuestionFindUniqueArgs} args - Arguments to find a InterviewPrepQuestion
     * @example
     * // Get one InterviewPrepQuestion
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewPrepQuestionFindUniqueArgs>(args: SelectSubset<T, InterviewPrepQuestionFindUniqueArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewPrepQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewPrepQuestionFindUniqueOrThrowArgs} args - Arguments to find a InterviewPrepQuestion
     * @example
     * // Get one InterviewPrepQuestion
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewPrepQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewPrepQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewPrepQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepQuestionFindFirstArgs} args - Arguments to find a InterviewPrepQuestion
     * @example
     * // Get one InterviewPrepQuestion
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewPrepQuestionFindFirstArgs>(args?: SelectSubset<T, InterviewPrepQuestionFindFirstArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewPrepQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepQuestionFindFirstOrThrowArgs} args - Arguments to find a InterviewPrepQuestion
     * @example
     * // Get one InterviewPrepQuestion
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewPrepQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewPrepQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewPrepQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewPrepQuestions
     * const interviewPrepQuestions = await prisma.interviewPrepQuestion.findMany()
     * 
     * // Get first 10 InterviewPrepQuestions
     * const interviewPrepQuestions = await prisma.interviewPrepQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewPrepQuestionWithIdOnly = await prisma.interviewPrepQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewPrepQuestionFindManyArgs>(args?: SelectSubset<T, InterviewPrepQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewPrepQuestion.
     * @param {InterviewPrepQuestionCreateArgs} args - Arguments to create a InterviewPrepQuestion.
     * @example
     * // Create one InterviewPrepQuestion
     * const InterviewPrepQuestion = await prisma.interviewPrepQuestion.create({
     *   data: {
     *     // ... data to create a InterviewPrepQuestion
     *   }
     * })
     * 
     */
    create<T extends InterviewPrepQuestionCreateArgs>(args: SelectSubset<T, InterviewPrepQuestionCreateArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewPrepQuestions.
     * @param {InterviewPrepQuestionCreateManyArgs} args - Arguments to create many InterviewPrepQuestions.
     * @example
     * // Create many InterviewPrepQuestions
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewPrepQuestionCreateManyArgs>(args?: SelectSubset<T, InterviewPrepQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewPrepQuestions and returns the data saved in the database.
     * @param {InterviewPrepQuestionCreateManyAndReturnArgs} args - Arguments to create many InterviewPrepQuestions.
     * @example
     * // Create many InterviewPrepQuestions
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewPrepQuestions and only return the `id`
     * const interviewPrepQuestionWithIdOnly = await prisma.interviewPrepQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewPrepQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewPrepQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewPrepQuestion.
     * @param {InterviewPrepQuestionDeleteArgs} args - Arguments to delete one InterviewPrepQuestion.
     * @example
     * // Delete one InterviewPrepQuestion
     * const InterviewPrepQuestion = await prisma.interviewPrepQuestion.delete({
     *   where: {
     *     // ... filter to delete one InterviewPrepQuestion
     *   }
     * })
     * 
     */
    delete<T extends InterviewPrepQuestionDeleteArgs>(args: SelectSubset<T, InterviewPrepQuestionDeleteArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewPrepQuestion.
     * @param {InterviewPrepQuestionUpdateArgs} args - Arguments to update one InterviewPrepQuestion.
     * @example
     * // Update one InterviewPrepQuestion
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewPrepQuestionUpdateArgs>(args: SelectSubset<T, InterviewPrepQuestionUpdateArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewPrepQuestions.
     * @param {InterviewPrepQuestionDeleteManyArgs} args - Arguments to filter InterviewPrepQuestions to delete.
     * @example
     * // Delete a few InterviewPrepQuestions
     * const { count } = await prisma.interviewPrepQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewPrepQuestionDeleteManyArgs>(args?: SelectSubset<T, InterviewPrepQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewPrepQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewPrepQuestions
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewPrepQuestionUpdateManyArgs>(args: SelectSubset<T, InterviewPrepQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewPrepQuestions and returns the data updated in the database.
     * @param {InterviewPrepQuestionUpdateManyAndReturnArgs} args - Arguments to update many InterviewPrepQuestions.
     * @example
     * // Update many InterviewPrepQuestions
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewPrepQuestions and only return the `id`
     * const interviewPrepQuestionWithIdOnly = await prisma.interviewPrepQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewPrepQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewPrepQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewPrepQuestion.
     * @param {InterviewPrepQuestionUpsertArgs} args - Arguments to update or create a InterviewPrepQuestion.
     * @example
     * // Update or create a InterviewPrepQuestion
     * const interviewPrepQuestion = await prisma.interviewPrepQuestion.upsert({
     *   create: {
     *     // ... data to create a InterviewPrepQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewPrepQuestion we want to update
     *   }
     * })
     */
    upsert<T extends InterviewPrepQuestionUpsertArgs>(args: SelectSubset<T, InterviewPrepQuestionUpsertArgs<ExtArgs>>): Prisma__InterviewPrepQuestionClient<$Result.GetResult<Prisma.$InterviewPrepQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewPrepQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepQuestionCountArgs} args - Arguments to filter InterviewPrepQuestions to count.
     * @example
     * // Count the number of InterviewPrepQuestions
     * const count = await prisma.interviewPrepQuestion.count({
     *   where: {
     *     // ... the filter for the InterviewPrepQuestions we want to count
     *   }
     * })
    **/
    count<T extends InterviewPrepQuestionCountArgs>(
      args?: Subset<T, InterviewPrepQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewPrepQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewPrepQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterviewPrepQuestionAggregateArgs>(args: Subset<T, InterviewPrepQuestionAggregateArgs>): Prisma.PrismaPromise<GetInterviewPrepQuestionAggregateType<T>>

    /**
     * Group by InterviewPrepQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewPrepQuestionGroupByArgs} args - Group by arguments.
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
      T extends InterviewPrepQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewPrepQuestionGroupByArgs['orderBy'] }
        : { orderBy?: InterviewPrepQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterviewPrepQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewPrepQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewPrepQuestion model
   */
  readonly fields: InterviewPrepQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewPrepQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewPrepQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interviewPrep<T extends InterviewPrepQuestion$interviewPrepArgs<ExtArgs> = {}>(args?: Subset<T, InterviewPrepQuestion$interviewPrepArgs<ExtArgs>>): Prisma__InterviewPrepClient<$Result.GetResult<Prisma.$InterviewPrepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewPrepQuestion model
   */
  interface InterviewPrepQuestionFieldRefs {
    readonly id: FieldRef<"InterviewPrepQuestion", 'Int'>
    readonly question: FieldRef<"InterviewPrepQuestion", 'String'>
    readonly answer: FieldRef<"InterviewPrepQuestion", 'String'>
    readonly evaluation: FieldRef<"InterviewPrepQuestion", 'String'>
    readonly improvementTip: FieldRef<"InterviewPrepQuestion", 'String'>
    readonly score: FieldRef<"InterviewPrepQuestion", 'Int'>
    readonly interviewPrepId: FieldRef<"InterviewPrepQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InterviewPrepQuestion findUnique
   */
  export type InterviewPrepQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrepQuestion to fetch.
     */
    where: InterviewPrepQuestionWhereUniqueInput
  }

  /**
   * InterviewPrepQuestion findUniqueOrThrow
   */
  export type InterviewPrepQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrepQuestion to fetch.
     */
    where: InterviewPrepQuestionWhereUniqueInput
  }

  /**
   * InterviewPrepQuestion findFirst
   */
  export type InterviewPrepQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrepQuestion to fetch.
     */
    where?: InterviewPrepQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPrepQuestions to fetch.
     */
    orderBy?: InterviewPrepQuestionOrderByWithRelationInput | InterviewPrepQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewPrepQuestions.
     */
    cursor?: InterviewPrepQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPrepQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPrepQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewPrepQuestions.
     */
    distinct?: InterviewPrepQuestionScalarFieldEnum | InterviewPrepQuestionScalarFieldEnum[]
  }

  /**
   * InterviewPrepQuestion findFirstOrThrow
   */
  export type InterviewPrepQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrepQuestion to fetch.
     */
    where?: InterviewPrepQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPrepQuestions to fetch.
     */
    orderBy?: InterviewPrepQuestionOrderByWithRelationInput | InterviewPrepQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewPrepQuestions.
     */
    cursor?: InterviewPrepQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPrepQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPrepQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewPrepQuestions.
     */
    distinct?: InterviewPrepQuestionScalarFieldEnum | InterviewPrepQuestionScalarFieldEnum[]
  }

  /**
   * InterviewPrepQuestion findMany
   */
  export type InterviewPrepQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * Filter, which InterviewPrepQuestions to fetch.
     */
    where?: InterviewPrepQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewPrepQuestions to fetch.
     */
    orderBy?: InterviewPrepQuestionOrderByWithRelationInput | InterviewPrepQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewPrepQuestions.
     */
    cursor?: InterviewPrepQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewPrepQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewPrepQuestions.
     */
    skip?: number
    distinct?: InterviewPrepQuestionScalarFieldEnum | InterviewPrepQuestionScalarFieldEnum[]
  }

  /**
   * InterviewPrepQuestion create
   */
  export type InterviewPrepQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewPrepQuestion.
     */
    data: XOR<InterviewPrepQuestionCreateInput, InterviewPrepQuestionUncheckedCreateInput>
  }

  /**
   * InterviewPrepQuestion createMany
   */
  export type InterviewPrepQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewPrepQuestions.
     */
    data: InterviewPrepQuestionCreateManyInput | InterviewPrepQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewPrepQuestion createManyAndReturn
   */
  export type InterviewPrepQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewPrepQuestions.
     */
    data: InterviewPrepQuestionCreateManyInput | InterviewPrepQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewPrepQuestion update
   */
  export type InterviewPrepQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewPrepQuestion.
     */
    data: XOR<InterviewPrepQuestionUpdateInput, InterviewPrepQuestionUncheckedUpdateInput>
    /**
     * Choose, which InterviewPrepQuestion to update.
     */
    where: InterviewPrepQuestionWhereUniqueInput
  }

  /**
   * InterviewPrepQuestion updateMany
   */
  export type InterviewPrepQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewPrepQuestions.
     */
    data: XOR<InterviewPrepQuestionUpdateManyMutationInput, InterviewPrepQuestionUncheckedUpdateManyInput>
    /**
     * Filter which InterviewPrepQuestions to update
     */
    where?: InterviewPrepQuestionWhereInput
    /**
     * Limit how many InterviewPrepQuestions to update.
     */
    limit?: number
  }

  /**
   * InterviewPrepQuestion updateManyAndReturn
   */
  export type InterviewPrepQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * The data used to update InterviewPrepQuestions.
     */
    data: XOR<InterviewPrepQuestionUpdateManyMutationInput, InterviewPrepQuestionUncheckedUpdateManyInput>
    /**
     * Filter which InterviewPrepQuestions to update
     */
    where?: InterviewPrepQuestionWhereInput
    /**
     * Limit how many InterviewPrepQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewPrepQuestion upsert
   */
  export type InterviewPrepQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewPrepQuestion to update in case it exists.
     */
    where: InterviewPrepQuestionWhereUniqueInput
    /**
     * In case the InterviewPrepQuestion found by the `where` argument doesn't exist, create a new InterviewPrepQuestion with this data.
     */
    create: XOR<InterviewPrepQuestionCreateInput, InterviewPrepQuestionUncheckedCreateInput>
    /**
     * In case the InterviewPrepQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewPrepQuestionUpdateInput, InterviewPrepQuestionUncheckedUpdateInput>
  }

  /**
   * InterviewPrepQuestion delete
   */
  export type InterviewPrepQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
    /**
     * Filter which InterviewPrepQuestion to delete.
     */
    where: InterviewPrepQuestionWhereUniqueInput
  }

  /**
   * InterviewPrepQuestion deleteMany
   */
  export type InterviewPrepQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewPrepQuestions to delete
     */
    where?: InterviewPrepQuestionWhereInput
    /**
     * Limit how many InterviewPrepQuestions to delete.
     */
    limit?: number
  }

  /**
   * InterviewPrepQuestion.interviewPrep
   */
  export type InterviewPrepQuestion$interviewPrepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrep
     */
    select?: InterviewPrepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrep
     */
    omit?: InterviewPrepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepInclude<ExtArgs> | null
    where?: InterviewPrepWhereInput
  }

  /**
   * InterviewPrepQuestion without action
   */
  export type InterviewPrepQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewPrepQuestion
     */
    select?: InterviewPrepQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewPrepQuestion
     */
    omit?: InterviewPrepQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewPrepQuestionInclude<ExtArgs> | null
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


  export const InterviewPrepScalarFieldEnum: {
    id: 'id',
    jobPosition: 'jobPosition',
    jobRequirements: 'jobRequirements',
    jobResponsibilities: 'jobResponsibilities',
    evaluation: 'evaluation'
  };

  export type InterviewPrepScalarFieldEnum = (typeof InterviewPrepScalarFieldEnum)[keyof typeof InterviewPrepScalarFieldEnum]


  export const InterviewPrepQuestionScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    evaluation: 'evaluation',
    improvementTip: 'improvementTip',
    score: 'score',
    interviewPrepId: 'interviewPrepId'
  };

  export type InterviewPrepQuestionScalarFieldEnum = (typeof InterviewPrepQuestionScalarFieldEnum)[keyof typeof InterviewPrepQuestionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type InterviewPrepWhereInput = {
    AND?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    OR?: InterviewPrepWhereInput[]
    NOT?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    id?: IntFilter<"InterviewPrep"> | number
    jobPosition?: StringFilter<"InterviewPrep"> | string
    jobRequirements?: StringFilter<"InterviewPrep"> | string
    jobResponsibilities?: StringFilter<"InterviewPrep"> | string
    evaluation?: StringNullableFilter<"InterviewPrep"> | string | null
    questions?: InterviewPrepQuestionListRelationFilter
  }

  export type InterviewPrepOrderByWithRelationInput = {
    id?: SortOrder
    jobPosition?: SortOrder
    jobRequirements?: SortOrder
    jobResponsibilities?: SortOrder
    evaluation?: SortOrderInput | SortOrder
    questions?: InterviewPrepQuestionOrderByRelationAggregateInput
  }

  export type InterviewPrepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    OR?: InterviewPrepWhereInput[]
    NOT?: InterviewPrepWhereInput | InterviewPrepWhereInput[]
    jobPosition?: StringFilter<"InterviewPrep"> | string
    jobRequirements?: StringFilter<"InterviewPrep"> | string
    jobResponsibilities?: StringFilter<"InterviewPrep"> | string
    evaluation?: StringNullableFilter<"InterviewPrep"> | string | null
    questions?: InterviewPrepQuestionListRelationFilter
  }, "id">

  export type InterviewPrepOrderByWithAggregationInput = {
    id?: SortOrder
    jobPosition?: SortOrder
    jobRequirements?: SortOrder
    jobResponsibilities?: SortOrder
    evaluation?: SortOrderInput | SortOrder
    _count?: InterviewPrepCountOrderByAggregateInput
    _avg?: InterviewPrepAvgOrderByAggregateInput
    _max?: InterviewPrepMaxOrderByAggregateInput
    _min?: InterviewPrepMinOrderByAggregateInput
    _sum?: InterviewPrepSumOrderByAggregateInput
  }

  export type InterviewPrepScalarWhereWithAggregatesInput = {
    AND?: InterviewPrepScalarWhereWithAggregatesInput | InterviewPrepScalarWhereWithAggregatesInput[]
    OR?: InterviewPrepScalarWhereWithAggregatesInput[]
    NOT?: InterviewPrepScalarWhereWithAggregatesInput | InterviewPrepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InterviewPrep"> | number
    jobPosition?: StringWithAggregatesFilter<"InterviewPrep"> | string
    jobRequirements?: StringWithAggregatesFilter<"InterviewPrep"> | string
    jobResponsibilities?: StringWithAggregatesFilter<"InterviewPrep"> | string
    evaluation?: StringNullableWithAggregatesFilter<"InterviewPrep"> | string | null
  }

  export type InterviewPrepQuestionWhereInput = {
    AND?: InterviewPrepQuestionWhereInput | InterviewPrepQuestionWhereInput[]
    OR?: InterviewPrepQuestionWhereInput[]
    NOT?: InterviewPrepQuestionWhereInput | InterviewPrepQuestionWhereInput[]
    id?: IntFilter<"InterviewPrepQuestion"> | number
    question?: StringFilter<"InterviewPrepQuestion"> | string
    answer?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    evaluation?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    improvementTip?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    score?: IntNullableFilter<"InterviewPrepQuestion"> | number | null
    interviewPrepId?: IntNullableFilter<"InterviewPrepQuestion"> | number | null
    interviewPrep?: XOR<InterviewPrepNullableScalarRelationFilter, InterviewPrepWhereInput> | null
  }

  export type InterviewPrepQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrderInput | SortOrder
    evaluation?: SortOrderInput | SortOrder
    improvementTip?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    interviewPrepId?: SortOrderInput | SortOrder
    interviewPrep?: InterviewPrepOrderByWithRelationInput
  }

  export type InterviewPrepQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InterviewPrepQuestionWhereInput | InterviewPrepQuestionWhereInput[]
    OR?: InterviewPrepQuestionWhereInput[]
    NOT?: InterviewPrepQuestionWhereInput | InterviewPrepQuestionWhereInput[]
    question?: StringFilter<"InterviewPrepQuestion"> | string
    answer?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    evaluation?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    improvementTip?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    score?: IntNullableFilter<"InterviewPrepQuestion"> | number | null
    interviewPrepId?: IntNullableFilter<"InterviewPrepQuestion"> | number | null
    interviewPrep?: XOR<InterviewPrepNullableScalarRelationFilter, InterviewPrepWhereInput> | null
  }, "id">

  export type InterviewPrepQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrderInput | SortOrder
    evaluation?: SortOrderInput | SortOrder
    improvementTip?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    interviewPrepId?: SortOrderInput | SortOrder
    _count?: InterviewPrepQuestionCountOrderByAggregateInput
    _avg?: InterviewPrepQuestionAvgOrderByAggregateInput
    _max?: InterviewPrepQuestionMaxOrderByAggregateInput
    _min?: InterviewPrepQuestionMinOrderByAggregateInput
    _sum?: InterviewPrepQuestionSumOrderByAggregateInput
  }

  export type InterviewPrepQuestionScalarWhereWithAggregatesInput = {
    AND?: InterviewPrepQuestionScalarWhereWithAggregatesInput | InterviewPrepQuestionScalarWhereWithAggregatesInput[]
    OR?: InterviewPrepQuestionScalarWhereWithAggregatesInput[]
    NOT?: InterviewPrepQuestionScalarWhereWithAggregatesInput | InterviewPrepQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InterviewPrepQuestion"> | number
    question?: StringWithAggregatesFilter<"InterviewPrepQuestion"> | string
    answer?: StringNullableWithAggregatesFilter<"InterviewPrepQuestion"> | string | null
    evaluation?: StringNullableWithAggregatesFilter<"InterviewPrepQuestion"> | string | null
    improvementTip?: StringNullableWithAggregatesFilter<"InterviewPrepQuestion"> | string | null
    score?: IntNullableWithAggregatesFilter<"InterviewPrepQuestion"> | number | null
    interviewPrepId?: IntNullableWithAggregatesFilter<"InterviewPrepQuestion"> | number | null
  }

  export type InterviewPrepCreateInput = {
    jobPosition: string
    jobRequirements: string
    jobResponsibilities: string
    evaluation?: string | null
    questions?: InterviewPrepQuestionCreateNestedManyWithoutInterviewPrepInput
  }

  export type InterviewPrepUncheckedCreateInput = {
    id?: number
    jobPosition: string
    jobRequirements: string
    jobResponsibilities: string
    evaluation?: string | null
    questions?: InterviewPrepQuestionUncheckedCreateNestedManyWithoutInterviewPrepInput
  }

  export type InterviewPrepUpdateInput = {
    jobPosition?: StringFieldUpdateOperationsInput | string
    jobRequirements?: StringFieldUpdateOperationsInput | string
    jobResponsibilities?: StringFieldUpdateOperationsInput | string
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: InterviewPrepQuestionUpdateManyWithoutInterviewPrepNestedInput
  }

  export type InterviewPrepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobPosition?: StringFieldUpdateOperationsInput | string
    jobRequirements?: StringFieldUpdateOperationsInput | string
    jobResponsibilities?: StringFieldUpdateOperationsInput | string
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: InterviewPrepQuestionUncheckedUpdateManyWithoutInterviewPrepNestedInput
  }

  export type InterviewPrepCreateManyInput = {
    id?: number
    jobPosition: string
    jobRequirements: string
    jobResponsibilities: string
    evaluation?: string | null
  }

  export type InterviewPrepUpdateManyMutationInput = {
    jobPosition?: StringFieldUpdateOperationsInput | string
    jobRequirements?: StringFieldUpdateOperationsInput | string
    jobResponsibilities?: StringFieldUpdateOperationsInput | string
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewPrepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobPosition?: StringFieldUpdateOperationsInput | string
    jobRequirements?: StringFieldUpdateOperationsInput | string
    jobResponsibilities?: StringFieldUpdateOperationsInput | string
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewPrepQuestionCreateInput = {
    question: string
    answer?: string | null
    evaluation?: string | null
    improvementTip?: string | null
    score?: number | null
    interviewPrep?: InterviewPrepCreateNestedOneWithoutQuestionsInput
  }

  export type InterviewPrepQuestionUncheckedCreateInput = {
    id?: number
    question: string
    answer?: string | null
    evaluation?: string | null
    improvementTip?: string | null
    score?: number | null
    interviewPrepId?: number | null
  }

  export type InterviewPrepQuestionUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    interviewPrep?: InterviewPrepUpdateOneWithoutQuestionsNestedInput
  }

  export type InterviewPrepQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    interviewPrepId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InterviewPrepQuestionCreateManyInput = {
    id?: number
    question: string
    answer?: string | null
    evaluation?: string | null
    improvementTip?: string | null
    score?: number | null
    interviewPrepId?: number | null
  }

  export type InterviewPrepQuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InterviewPrepQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    interviewPrepId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type InterviewPrepQuestionListRelationFilter = {
    every?: InterviewPrepQuestionWhereInput
    some?: InterviewPrepQuestionWhereInput
    none?: InterviewPrepQuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InterviewPrepQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewPrepCountOrderByAggregateInput = {
    id?: SortOrder
    jobPosition?: SortOrder
    jobRequirements?: SortOrder
    jobResponsibilities?: SortOrder
    evaluation?: SortOrder
  }

  export type InterviewPrepAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InterviewPrepMaxOrderByAggregateInput = {
    id?: SortOrder
    jobPosition?: SortOrder
    jobRequirements?: SortOrder
    jobResponsibilities?: SortOrder
    evaluation?: SortOrder
  }

  export type InterviewPrepMinOrderByAggregateInput = {
    id?: SortOrder
    jobPosition?: SortOrder
    jobRequirements?: SortOrder
    jobResponsibilities?: SortOrder
    evaluation?: SortOrder
  }

  export type InterviewPrepSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type InterviewPrepNullableScalarRelationFilter = {
    is?: InterviewPrepWhereInput | null
    isNot?: InterviewPrepWhereInput | null
  }

  export type InterviewPrepQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    evaluation?: SortOrder
    improvementTip?: SortOrder
    score?: SortOrder
    interviewPrepId?: SortOrder
  }

  export type InterviewPrepQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    interviewPrepId?: SortOrder
  }

  export type InterviewPrepQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    evaluation?: SortOrder
    improvementTip?: SortOrder
    score?: SortOrder
    interviewPrepId?: SortOrder
  }

  export type InterviewPrepQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    evaluation?: SortOrder
    improvementTip?: SortOrder
    score?: SortOrder
    interviewPrepId?: SortOrder
  }

  export type InterviewPrepQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    interviewPrepId?: SortOrder
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

  export type InterviewPrepQuestionCreateNestedManyWithoutInterviewPrepInput = {
    create?: XOR<InterviewPrepQuestionCreateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewPrepQuestionCreateWithoutInterviewPrepInput[] | InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput[]
    createMany?: InterviewPrepQuestionCreateManyInterviewPrepInputEnvelope
    connect?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
  }

  export type InterviewPrepQuestionUncheckedCreateNestedManyWithoutInterviewPrepInput = {
    create?: XOR<InterviewPrepQuestionCreateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewPrepQuestionCreateWithoutInterviewPrepInput[] | InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput[]
    createMany?: InterviewPrepQuestionCreateManyInterviewPrepInputEnvelope
    connect?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InterviewPrepQuestionUpdateManyWithoutInterviewPrepNestedInput = {
    create?: XOR<InterviewPrepQuestionCreateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewPrepQuestionCreateWithoutInterviewPrepInput[] | InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput[]
    upsert?: InterviewPrepQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput | InterviewPrepQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput[]
    createMany?: InterviewPrepQuestionCreateManyInterviewPrepInputEnvelope
    set?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    disconnect?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    delete?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    connect?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    update?: InterviewPrepQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput | InterviewPrepQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput[]
    updateMany?: InterviewPrepQuestionUpdateManyWithWhereWithoutInterviewPrepInput | InterviewPrepQuestionUpdateManyWithWhereWithoutInterviewPrepInput[]
    deleteMany?: InterviewPrepQuestionScalarWhereInput | InterviewPrepQuestionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InterviewPrepQuestionUncheckedUpdateManyWithoutInterviewPrepNestedInput = {
    create?: XOR<InterviewPrepQuestionCreateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput> | InterviewPrepQuestionCreateWithoutInterviewPrepInput[] | InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput[]
    connectOrCreate?: InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput | InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput[]
    upsert?: InterviewPrepQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput | InterviewPrepQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput[]
    createMany?: InterviewPrepQuestionCreateManyInterviewPrepInputEnvelope
    set?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    disconnect?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    delete?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    connect?: InterviewPrepQuestionWhereUniqueInput | InterviewPrepQuestionWhereUniqueInput[]
    update?: InterviewPrepQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput | InterviewPrepQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput[]
    updateMany?: InterviewPrepQuestionUpdateManyWithWhereWithoutInterviewPrepInput | InterviewPrepQuestionUpdateManyWithWhereWithoutInterviewPrepInput[]
    deleteMany?: InterviewPrepQuestionScalarWhereInput | InterviewPrepQuestionScalarWhereInput[]
  }

  export type InterviewPrepCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutQuestionsInput
    connect?: InterviewPrepWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InterviewPrepUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: InterviewPrepCreateOrConnectWithoutQuestionsInput
    upsert?: InterviewPrepUpsertWithoutQuestionsInput
    disconnect?: InterviewPrepWhereInput | boolean
    delete?: InterviewPrepWhereInput | boolean
    connect?: InterviewPrepWhereUniqueInput
    update?: XOR<XOR<InterviewPrepUpdateToOneWithWhereWithoutQuestionsInput, InterviewPrepUpdateWithoutQuestionsInput>, InterviewPrepUncheckedUpdateWithoutQuestionsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type InterviewPrepQuestionCreateWithoutInterviewPrepInput = {
    question: string
    answer?: string | null
    evaluation?: string | null
    improvementTip?: string | null
    score?: number | null
  }

  export type InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput = {
    id?: number
    question: string
    answer?: string | null
    evaluation?: string | null
    improvementTip?: string | null
    score?: number | null
  }

  export type InterviewPrepQuestionCreateOrConnectWithoutInterviewPrepInput = {
    where: InterviewPrepQuestionWhereUniqueInput
    create: XOR<InterviewPrepQuestionCreateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput>
  }

  export type InterviewPrepQuestionCreateManyInterviewPrepInputEnvelope = {
    data: InterviewPrepQuestionCreateManyInterviewPrepInput | InterviewPrepQuestionCreateManyInterviewPrepInput[]
    skipDuplicates?: boolean
  }

  export type InterviewPrepQuestionUpsertWithWhereUniqueWithoutInterviewPrepInput = {
    where: InterviewPrepQuestionWhereUniqueInput
    update: XOR<InterviewPrepQuestionUpdateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedUpdateWithoutInterviewPrepInput>
    create: XOR<InterviewPrepQuestionCreateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedCreateWithoutInterviewPrepInput>
  }

  export type InterviewPrepQuestionUpdateWithWhereUniqueWithoutInterviewPrepInput = {
    where: InterviewPrepQuestionWhereUniqueInput
    data: XOR<InterviewPrepQuestionUpdateWithoutInterviewPrepInput, InterviewPrepQuestionUncheckedUpdateWithoutInterviewPrepInput>
  }

  export type InterviewPrepQuestionUpdateManyWithWhereWithoutInterviewPrepInput = {
    where: InterviewPrepQuestionScalarWhereInput
    data: XOR<InterviewPrepQuestionUpdateManyMutationInput, InterviewPrepQuestionUncheckedUpdateManyWithoutInterviewPrepInput>
  }

  export type InterviewPrepQuestionScalarWhereInput = {
    AND?: InterviewPrepQuestionScalarWhereInput | InterviewPrepQuestionScalarWhereInput[]
    OR?: InterviewPrepQuestionScalarWhereInput[]
    NOT?: InterviewPrepQuestionScalarWhereInput | InterviewPrepQuestionScalarWhereInput[]
    id?: IntFilter<"InterviewPrepQuestion"> | number
    question?: StringFilter<"InterviewPrepQuestion"> | string
    answer?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    evaluation?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    improvementTip?: StringNullableFilter<"InterviewPrepQuestion"> | string | null
    score?: IntNullableFilter<"InterviewPrepQuestion"> | number | null
    interviewPrepId?: IntNullableFilter<"InterviewPrepQuestion"> | number | null
  }

  export type InterviewPrepCreateWithoutQuestionsInput = {
    jobPosition: string
    jobRequirements: string
    jobResponsibilities: string
    evaluation?: string | null
  }

  export type InterviewPrepUncheckedCreateWithoutQuestionsInput = {
    id?: number
    jobPosition: string
    jobRequirements: string
    jobResponsibilities: string
    evaluation?: string | null
  }

  export type InterviewPrepCreateOrConnectWithoutQuestionsInput = {
    where: InterviewPrepWhereUniqueInput
    create: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
  }

  export type InterviewPrepUpsertWithoutQuestionsInput = {
    update: XOR<InterviewPrepUpdateWithoutQuestionsInput, InterviewPrepUncheckedUpdateWithoutQuestionsInput>
    create: XOR<InterviewPrepCreateWithoutQuestionsInput, InterviewPrepUncheckedCreateWithoutQuestionsInput>
    where?: InterviewPrepWhereInput
  }

  export type InterviewPrepUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: InterviewPrepWhereInput
    data: XOR<InterviewPrepUpdateWithoutQuestionsInput, InterviewPrepUncheckedUpdateWithoutQuestionsInput>
  }

  export type InterviewPrepUpdateWithoutQuestionsInput = {
    jobPosition?: StringFieldUpdateOperationsInput | string
    jobRequirements?: StringFieldUpdateOperationsInput | string
    jobResponsibilities?: StringFieldUpdateOperationsInput | string
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewPrepUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobPosition?: StringFieldUpdateOperationsInput | string
    jobRequirements?: StringFieldUpdateOperationsInput | string
    jobResponsibilities?: StringFieldUpdateOperationsInput | string
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InterviewPrepQuestionCreateManyInterviewPrepInput = {
    id?: number
    question: string
    answer?: string | null
    evaluation?: string | null
    improvementTip?: string | null
    score?: number | null
  }

  export type InterviewPrepQuestionUpdateWithoutInterviewPrepInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InterviewPrepQuestionUncheckedUpdateWithoutInterviewPrepInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InterviewPrepQuestionUncheckedUpdateManyWithoutInterviewPrepInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation?: NullableStringFieldUpdateOperationsInput | string | null
    improvementTip?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }



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