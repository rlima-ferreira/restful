
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : never : never
};


/**
 * Model cities
 */

export type cities = {
  id: number
  acronym: string
  name: string
}

/**
 * Model countries
 */

export type countries = {
  id: number
  acronym: string
  name: string
}

/**
 * Model states
 */

export type states = {
  id: number
  acronym: string
  name: string
}

/**
 * Model addresses
 */

export type addresses = {
  id: number
  postcode: string
  public_place: string
  number: number
  complement: string | null
  city_id: number
  state_id: number
  country_id: number
}

/**
 * Model persons
 */

export type persons = {
  id: number
  name: string
  cpf: string
  birthday: string
  address_id: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.cities.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cities
   * const cities = await prisma.cities.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<GlobalReject>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.countriesDelegate<GlobalReject>;

  /**
   * `prisma.states`: Exposes CRUD operations for the **states** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.states.findMany()
    * ```
    */
  get states(): Prisma.statesDelegate<GlobalReject>;

  /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<GlobalReject>;

  /**
   * `prisma.persons`: Exposes CRUD operations for the **persons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Persons
    * const persons = await prisma.persons.findMany()
    * ```
    */
  get persons(): Prisma.personsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.17.0
   * Query Engine version: 3c463ebd78b1d21d8fdacdd27899e280cf686223
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
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  export type Union = any

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    cities: 'cities',
    countries: 'countries',
    states: 'states',
    addresses: 'addresses',
    persons: 'persons'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }


  /**
   * Model cities
   */


  export type AggregateCities = {
    count: CitiesCountAggregateOutputType | null
    avg: CitiesAvgAggregateOutputType | null
    sum: CitiesSumAggregateOutputType | null
    min: CitiesMinAggregateOutputType | null
    max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id: number
  }

  export type CitiesSumAggregateOutputType = {
    id: number
  }

  export type CitiesMinAggregateOutputType = {
    id: number
    acronym: string | null
    name: string | null
  }

  export type CitiesMaxAggregateOutputType = {
    id: number
    acronym: string | null
    name: string | null
  }

  export type CitiesCountAggregateOutputType = {
    id: number
    acronym: number | null
    name: number | null
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id?: true
  }

  export type CitiesSumAggregateInputType = {
    id?: true
  }

  export type CitiesMinAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
  }

  export type CitiesMaxAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
  }

  export type CitiesCountAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
    _all?: true
  }

  export type CitiesAggregateArgs = {
    /**
     * Filter which cities to aggregate.
    **/
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
    **/
    orderBy?: Enumerable<citiesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
    [P in keyof T & keyof AggregateCities]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }



  export type citiesSelect = {
    id?: boolean
    acronym?: boolean
    name?: boolean
    addresses?: boolean | addressesFindManyArgs
  }

  export type citiesInclude = {
    addresses?: boolean | addressesFindManyArgs
  }

  export type citiesGetPayload<
    S extends boolean | null | undefined | citiesArgs,
    U = keyof S
      > = S extends true
        ? cities
    : S extends undefined
    ? never
    : S extends citiesArgs | citiesFindManyArgs
    ?'include' extends U
    ? cities  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'addresses'
        ? Array < addressesGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof cities ?cities [P]
  : 
          P extends 'addresses'
        ? Array < addressesGetPayload<S['select'][P]>>  : never
  } 
    : cities
  : cities


  type citiesCountArgs = Merge<
    Omit<citiesFindManyArgs, 'select' | 'include'> & {
      select?: CitiesCountAggregateInputType | true
    }
  >

  export interface citiesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends citiesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, citiesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cities'> extends True ? CheckSelect<T, Prisma__citiesClient<cities>, Prisma__citiesClient<citiesGetPayload<T>>> : CheckSelect<T, Prisma__citiesClient<cities | null >, Prisma__citiesClient<citiesGetPayload<T> | null >>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends citiesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, citiesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cities'> extends True ? CheckSelect<T, Prisma__citiesClient<cities>, Prisma__citiesClient<citiesGetPayload<T>>> : CheckSelect<T, Prisma__citiesClient<cities | null >, Prisma__citiesClient<citiesGetPayload<T> | null >>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citiesWithIdOnly = await prisma.cities.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends citiesFindManyArgs>(
      args?: SelectSubset<T, citiesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<cities>>, PrismaPromise<Array<citiesGetPayload<T>>>>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
    **/
    create<T extends citiesCreateArgs>(
      args: SelectSubset<T, citiesCreateArgs>
    ): CheckSelect<T, Prisma__citiesClient<cities>, Prisma__citiesClient<citiesGetPayload<T>>>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
    **/
    delete<T extends citiesDeleteArgs>(
      args: SelectSubset<T, citiesDeleteArgs>
    ): CheckSelect<T, Prisma__citiesClient<cities>, Prisma__citiesClient<citiesGetPayload<T>>>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends citiesUpdateArgs>(
      args: SelectSubset<T, citiesUpdateArgs>
    ): CheckSelect<T, Prisma__citiesClient<cities>, Prisma__citiesClient<citiesGetPayload<T>>>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends citiesDeleteManyArgs>(
      args?: SelectSubset<T, citiesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends citiesUpdateManyArgs>(
      args: SelectSubset<T, citiesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
    **/
    upsert<T extends citiesUpsertArgs>(
      args: SelectSubset<T, citiesUpsertArgs>
    ): CheckSelect<T, Prisma__citiesClient<cities>, Prisma__citiesClient<citiesGetPayload<T>>>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): PrismaPromise<GetCitiesAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__citiesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    addresses<T extends addressesFindManyArgs = {}>(args?: Subset<T, addressesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<addresses>>, PrismaPromise<Array<addressesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * cities findUnique
   */
  export type citiesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
    /**
     * Throw an Error if a cities can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which cities to fetch.
    **/
    where: citiesWhereUniqueInput
  }


  /**
   * cities findFirst
   */
  export type citiesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
    /**
     * Throw an Error if a cities can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which cities to fetch.
    **/
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
    **/
    orderBy?: Enumerable<citiesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
    **/
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
    **/
    distinct?: Enumerable<CitiesScalarFieldEnum>
  }


  /**
   * cities findMany
   */
  export type citiesFindManyArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
    /**
     * Filter, which cities to fetch.
    **/
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
    **/
    orderBy?: Enumerable<citiesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
    **/
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
    **/
    skip?: number
    distinct?: Enumerable<CitiesScalarFieldEnum>
  }


  /**
   * cities create
   */
  export type citiesCreateArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
    /**
     * The data needed to create a cities.
    **/
    data: XOR<citiesUncheckedCreateInput, citiesCreateInput>
  }


  /**
   * cities update
   */
  export type citiesUpdateArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
    /**
     * The data needed to update a cities.
    **/
    data: XOR<citiesUncheckedUpdateInput, citiesUpdateInput>
    /**
     * Choose, which cities to update.
    **/
    where: citiesWhereUniqueInput
  }


  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs = {
    data: XOR<citiesUncheckedUpdateManyInput, citiesUpdateManyMutationInput>
    where?: citiesWhereInput
  }


  /**
   * cities upsert
   */
  export type citiesUpsertArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
    /**
     * The filter to search for the cities to update in case it exists.
    **/
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
    **/
    create: XOR<citiesUncheckedCreateInput, citiesCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<citiesUncheckedUpdateInput, citiesUpdateInput>
  }


  /**
   * cities delete
   */
  export type citiesDeleteArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
    /**
     * Filter which cities to delete.
    **/
    where: citiesWhereUniqueInput
  }


  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs = {
    where?: citiesWhereInput
  }


  /**
   * cities without action
   */
  export type citiesArgs = {
    /**
     * Select specific fields to fetch from the cities
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: citiesInclude | null
  }



  /**
   * Model countries
   */


  export type AggregateCountries = {
    count: CountriesCountAggregateOutputType | null
    avg: CountriesAvgAggregateOutputType | null
    sum: CountriesSumAggregateOutputType | null
    min: CountriesMinAggregateOutputType | null
    max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    id: number
  }

  export type CountriesSumAggregateOutputType = {
    id: number
  }

  export type CountriesMinAggregateOutputType = {
    id: number
    acronym: string | null
    name: string | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: number
    acronym: string | null
    name: string | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    acronym: number | null
    name: number | null
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    id?: true
  }

  export type CountriesSumAggregateInputType = {
    id?: true
  }

  export type CountriesMinAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
    _all?: true
  }

  export type CountriesAggregateArgs = {
    /**
     * Filter which countries to aggregate.
    **/
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
    **/
    orderBy?: Enumerable<countriesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCountries]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }



  export type countriesSelect = {
    id?: boolean
    acronym?: boolean
    name?: boolean
    addresses?: boolean | addressesFindManyArgs
  }

  export type countriesInclude = {
    addresses?: boolean | addressesFindManyArgs
  }

  export type countriesGetPayload<
    S extends boolean | null | undefined | countriesArgs,
    U = keyof S
      > = S extends true
        ? countries
    : S extends undefined
    ? never
    : S extends countriesArgs | countriesFindManyArgs
    ?'include' extends U
    ? countries  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'addresses'
        ? Array < addressesGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof countries ?countries [P]
  : 
          P extends 'addresses'
        ? Array < addressesGetPayload<S['select'][P]>>  : never
  } 
    : countries
  : countries


  type countriesCountArgs = Merge<
    Omit<countriesFindManyArgs, 'select' | 'include'> & {
      select?: CountriesCountAggregateInputType | true
    }
  >

  export interface countriesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Countries that matches the filter.
     * @param {countriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends countriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, countriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'countries'> extends True ? CheckSelect<T, Prisma__countriesClient<countries>, Prisma__countriesClient<countriesGetPayload<T>>> : CheckSelect<T, Prisma__countriesClient<countries | null >, Prisma__countriesClient<countriesGetPayload<T> | null >>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends countriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, countriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'countries'> extends True ? CheckSelect<T, Prisma__countriesClient<countries>, Prisma__countriesClient<countriesGetPayload<T>>> : CheckSelect<T, Prisma__countriesClient<countries | null >, Prisma__countriesClient<countriesGetPayload<T> | null >>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends countriesFindManyArgs>(
      args?: SelectSubset<T, countriesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<countries>>, PrismaPromise<Array<countriesGetPayload<T>>>>

    /**
     * Create a Countries.
     * @param {countriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
    **/
    create<T extends countriesCreateArgs>(
      args: SelectSubset<T, countriesCreateArgs>
    ): CheckSelect<T, Prisma__countriesClient<countries>, Prisma__countriesClient<countriesGetPayload<T>>>

    /**
     * Delete a Countries.
     * @param {countriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
    **/
    delete<T extends countriesDeleteArgs>(
      args: SelectSubset<T, countriesDeleteArgs>
    ): CheckSelect<T, Prisma__countriesClient<countries>, Prisma__countriesClient<countriesGetPayload<T>>>

    /**
     * Update one Countries.
     * @param {countriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends countriesUpdateArgs>(
      args: SelectSubset<T, countriesUpdateArgs>
    ): CheckSelect<T, Prisma__countriesClient<countries>, Prisma__countriesClient<countriesGetPayload<T>>>

    /**
     * Delete zero or more Countries.
     * @param {countriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends countriesDeleteManyArgs>(
      args?: SelectSubset<T, countriesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends countriesUpdateManyArgs>(
      args: SelectSubset<T, countriesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {countriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
    **/
    upsert<T extends countriesUpsertArgs>(
      args: SelectSubset<T, countriesUpsertArgs>
    ): CheckSelect<T, Prisma__countriesClient<countries>, Prisma__countriesClient<countriesGetPayload<T>>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countriesCountArgs>(
      args?: Subset<T, countriesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): PrismaPromise<GetCountriesAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__countriesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    addresses<T extends addressesFindManyArgs = {}>(args?: Subset<T, addressesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<addresses>>, PrismaPromise<Array<addressesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * countries findUnique
   */
  export type countriesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
    /**
     * Throw an Error if a countries can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which countries to fetch.
    **/
    where: countriesWhereUniqueInput
  }


  /**
   * countries findFirst
   */
  export type countriesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
    /**
     * Throw an Error if a countries can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which countries to fetch.
    **/
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
    **/
    orderBy?: Enumerable<countriesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
    **/
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
    **/
    distinct?: Enumerable<CountriesScalarFieldEnum>
  }


  /**
   * countries findMany
   */
  export type countriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
    /**
     * Filter, which countries to fetch.
    **/
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
    **/
    orderBy?: Enumerable<countriesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
    **/
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
    **/
    skip?: number
    distinct?: Enumerable<CountriesScalarFieldEnum>
  }


  /**
   * countries create
   */
  export type countriesCreateArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
    /**
     * The data needed to create a countries.
    **/
    data: XOR<countriesUncheckedCreateInput, countriesCreateInput>
  }


  /**
   * countries update
   */
  export type countriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
    /**
     * The data needed to update a countries.
    **/
    data: XOR<countriesUncheckedUpdateInput, countriesUpdateInput>
    /**
     * Choose, which countries to update.
    **/
    where: countriesWhereUniqueInput
  }


  /**
   * countries updateMany
   */
  export type countriesUpdateManyArgs = {
    data: XOR<countriesUncheckedUpdateManyInput, countriesUpdateManyMutationInput>
    where?: countriesWhereInput
  }


  /**
   * countries upsert
   */
  export type countriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
    /**
     * The filter to search for the countries to update in case it exists.
    **/
    where: countriesWhereUniqueInput
    /**
     * In case the countries found by the `where` argument doesn't exist, create a new countries with this data.
    **/
    create: XOR<countriesUncheckedCreateInput, countriesCreateInput>
    /**
     * In case the countries was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<countriesUncheckedUpdateInput, countriesUpdateInput>
  }


  /**
   * countries delete
   */
  export type countriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
    /**
     * Filter which countries to delete.
    **/
    where: countriesWhereUniqueInput
  }


  /**
   * countries deleteMany
   */
  export type countriesDeleteManyArgs = {
    where?: countriesWhereInput
  }


  /**
   * countries without action
   */
  export type countriesArgs = {
    /**
     * Select specific fields to fetch from the countries
    **/
    select?: countriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: countriesInclude | null
  }



  /**
   * Model states
   */


  export type AggregateStates = {
    count: StatesCountAggregateOutputType | null
    avg: StatesAvgAggregateOutputType | null
    sum: StatesSumAggregateOutputType | null
    min: StatesMinAggregateOutputType | null
    max: StatesMaxAggregateOutputType | null
  }

  export type StatesAvgAggregateOutputType = {
    id: number
  }

  export type StatesSumAggregateOutputType = {
    id: number
  }

  export type StatesMinAggregateOutputType = {
    id: number
    acronym: string | null
    name: string | null
  }

  export type StatesMaxAggregateOutputType = {
    id: number
    acronym: string | null
    name: string | null
  }

  export type StatesCountAggregateOutputType = {
    id: number
    acronym: number | null
    name: number | null
    _all: number
  }


  export type StatesAvgAggregateInputType = {
    id?: true
  }

  export type StatesSumAggregateInputType = {
    id?: true
  }

  export type StatesMinAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
  }

  export type StatesMaxAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
  }

  export type StatesCountAggregateInputType = {
    id?: true
    acronym?: true
    name?: true
    _all?: true
  }

  export type StatesAggregateArgs = {
    /**
     * Filter which states to aggregate.
    **/
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
    **/
    orderBy?: Enumerable<statesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned states
    **/
    count?: true | StatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: StatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: StatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: StatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: StatesMaxAggregateInputType
  }

  export type GetStatesAggregateType<T extends StatesAggregateArgs> = {
    [P in keyof T & keyof AggregateStates]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStates[P]>
      : GetScalarType<T[P], AggregateStates[P]>
  }



  export type statesSelect = {
    id?: boolean
    acronym?: boolean
    name?: boolean
    addresses?: boolean | addressesFindManyArgs
  }

  export type statesInclude = {
    addresses?: boolean | addressesFindManyArgs
  }

  export type statesGetPayload<
    S extends boolean | null | undefined | statesArgs,
    U = keyof S
      > = S extends true
        ? states
    : S extends undefined
    ? never
    : S extends statesArgs | statesFindManyArgs
    ?'include' extends U
    ? states  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'addresses'
        ? Array < addressesGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof states ?states [P]
  : 
          P extends 'addresses'
        ? Array < addressesGetPayload<S['select'][P]>>  : never
  } 
    : states
  : states


  type statesCountArgs = Merge<
    Omit<statesFindManyArgs, 'select' | 'include'> & {
      select?: StatesCountAggregateInputType | true
    }
  >

  export interface statesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one States that matches the filter.
     * @param {statesFindUniqueArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, statesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'states'> extends True ? CheckSelect<T, Prisma__statesClient<states>, Prisma__statesClient<statesGetPayload<T>>> : CheckSelect<T, Prisma__statesClient<states | null >, Prisma__statesClient<statesGetPayload<T> | null >>

    /**
     * Find the first States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindFirstArgs} args - Arguments to find a States
     * @example
     * // Get one States
     * const states = await prisma.states.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, statesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'states'> extends True ? CheckSelect<T, Prisma__statesClient<states>, Prisma__statesClient<statesGetPayload<T>>> : CheckSelect<T, Prisma__statesClient<states | null >, Prisma__statesClient<statesGetPayload<T> | null >>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.states.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.states.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statesWithIdOnly = await prisma.states.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends statesFindManyArgs>(
      args?: SelectSubset<T, statesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<states>>, PrismaPromise<Array<statesGetPayload<T>>>>

    /**
     * Create a States.
     * @param {statesCreateArgs} args - Arguments to create a States.
     * @example
     * // Create one States
     * const States = await prisma.states.create({
     *   data: {
     *     // ... data to create a States
     *   }
     * })
     * 
    **/
    create<T extends statesCreateArgs>(
      args: SelectSubset<T, statesCreateArgs>
    ): CheckSelect<T, Prisma__statesClient<states>, Prisma__statesClient<statesGetPayload<T>>>

    /**
     * Delete a States.
     * @param {statesDeleteArgs} args - Arguments to delete one States.
     * @example
     * // Delete one States
     * const States = await prisma.states.delete({
     *   where: {
     *     // ... filter to delete one States
     *   }
     * })
     * 
    **/
    delete<T extends statesDeleteArgs>(
      args: SelectSubset<T, statesDeleteArgs>
    ): CheckSelect<T, Prisma__statesClient<states>, Prisma__statesClient<statesGetPayload<T>>>

    /**
     * Update one States.
     * @param {statesUpdateArgs} args - Arguments to update one States.
     * @example
     * // Update one States
     * const states = await prisma.states.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statesUpdateArgs>(
      args: SelectSubset<T, statesUpdateArgs>
    ): CheckSelect<T, Prisma__statesClient<states>, Prisma__statesClient<statesGetPayload<T>>>

    /**
     * Delete zero or more States.
     * @param {statesDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.states.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statesDeleteManyArgs>(
      args?: SelectSubset<T, statesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const states = await prisma.states.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statesUpdateManyArgs>(
      args: SelectSubset<T, statesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one States.
     * @param {statesUpsertArgs} args - Arguments to update or create a States.
     * @example
     * // Update or create a States
     * const states = await prisma.states.upsert({
     *   create: {
     *     // ... data to create a States
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the States we want to update
     *   }
     * })
    **/
    upsert<T extends statesUpsertArgs>(
      args: SelectSubset<T, statesUpsertArgs>
    ): CheckSelect<T, Prisma__statesClient<states>, Prisma__statesClient<statesGetPayload<T>>>

    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statesCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.states.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends statesCountArgs>(
      args?: Subset<T, statesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends StatesAggregateArgs>(args: Subset<T, StatesAggregateArgs>): PrismaPromise<GetStatesAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for states.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__statesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    addresses<T extends addressesFindManyArgs = {}>(args?: Subset<T, addressesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<addresses>>, PrismaPromise<Array<addressesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * states findUnique
   */
  export type statesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
    /**
     * Throw an Error if a states can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which states to fetch.
    **/
    where: statesWhereUniqueInput
  }


  /**
   * states findFirst
   */
  export type statesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
    /**
     * Throw an Error if a states can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which states to fetch.
    **/
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
    **/
    orderBy?: Enumerable<statesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for states.
    **/
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of states.
    **/
    distinct?: Enumerable<StatesScalarFieldEnum>
  }


  /**
   * states findMany
   */
  export type statesFindManyArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
    /**
     * Filter, which states to fetch.
    **/
    where?: statesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of states to fetch.
    **/
    orderBy?: Enumerable<statesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing states.
    **/
    cursor?: statesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` states from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` states.
    **/
    skip?: number
    distinct?: Enumerable<StatesScalarFieldEnum>
  }


  /**
   * states create
   */
  export type statesCreateArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
    /**
     * The data needed to create a states.
    **/
    data: XOR<statesUncheckedCreateInput, statesCreateInput>
  }


  /**
   * states update
   */
  export type statesUpdateArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
    /**
     * The data needed to update a states.
    **/
    data: XOR<statesUncheckedUpdateInput, statesUpdateInput>
    /**
     * Choose, which states to update.
    **/
    where: statesWhereUniqueInput
  }


  /**
   * states updateMany
   */
  export type statesUpdateManyArgs = {
    data: XOR<statesUncheckedUpdateManyInput, statesUpdateManyMutationInput>
    where?: statesWhereInput
  }


  /**
   * states upsert
   */
  export type statesUpsertArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
    /**
     * The filter to search for the states to update in case it exists.
    **/
    where: statesWhereUniqueInput
    /**
     * In case the states found by the `where` argument doesn't exist, create a new states with this data.
    **/
    create: XOR<statesUncheckedCreateInput, statesCreateInput>
    /**
     * In case the states was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<statesUncheckedUpdateInput, statesUpdateInput>
  }


  /**
   * states delete
   */
  export type statesDeleteArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
    /**
     * Filter which states to delete.
    **/
    where: statesWhereUniqueInput
  }


  /**
   * states deleteMany
   */
  export type statesDeleteManyArgs = {
    where?: statesWhereInput
  }


  /**
   * states without action
   */
  export type statesArgs = {
    /**
     * Select specific fields to fetch from the states
    **/
    select?: statesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: statesInclude | null
  }



  /**
   * Model addresses
   */


  export type AggregateAddresses = {
    count: AddressesCountAggregateOutputType | null
    avg: AddressesAvgAggregateOutputType | null
    sum: AddressesSumAggregateOutputType | null
    min: AddressesMinAggregateOutputType | null
    max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    id: number
    number: number
    city_id: number
    state_id: number
    country_id: number
  }

  export type AddressesSumAggregateOutputType = {
    id: number
    number: number
    city_id: number
    state_id: number
    country_id: number
  }

  export type AddressesMinAggregateOutputType = {
    id: number
    postcode: string | null
    public_place: string | null
    number: number
    complement: string | null
    city_id: number
    state_id: number
    country_id: number
  }

  export type AddressesMaxAggregateOutputType = {
    id: number
    postcode: string | null
    public_place: string | null
    number: number
    complement: string | null
    city_id: number
    state_id: number
    country_id: number
  }

  export type AddressesCountAggregateOutputType = {
    id: number
    postcode: number | null
    public_place: number | null
    number: number
    complement: number | null
    city_id: number
    state_id: number
    country_id: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    id?: true
    number?: true
    city_id?: true
    state_id?: true
    country_id?: true
  }

  export type AddressesSumAggregateInputType = {
    id?: true
    number?: true
    city_id?: true
    state_id?: true
    country_id?: true
  }

  export type AddressesMinAggregateInputType = {
    id?: true
    postcode?: true
    public_place?: true
    number?: true
    complement?: true
    city_id?: true
    state_id?: true
    country_id?: true
  }

  export type AddressesMaxAggregateInputType = {
    id?: true
    postcode?: true
    public_place?: true
    number?: true
    complement?: true
    city_id?: true
    state_id?: true
    country_id?: true
  }

  export type AddressesCountAggregateInputType = {
    id?: true
    postcode?: true
    public_place?: true
    number?: true
    complement?: true
    city_id?: true
    state_id?: true
    country_id?: true
    _all?: true
  }

  export type AddressesAggregateArgs = {
    /**
     * Filter which addresses to aggregate.
    **/
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
    **/
    orderBy?: Enumerable<addressesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
    [P in keyof T & keyof AggregateAddresses]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }



  export type addressesSelect = {
    id?: boolean
    postcode?: boolean
    public_place?: boolean
    number?: boolean
    complement?: boolean
    city_id?: boolean
    state_id?: boolean
    country_id?: boolean
    city?: boolean | citiesArgs
    state?: boolean | statesArgs
    country?: boolean | countriesArgs
    persons?: boolean | personsFindManyArgs
  }

  export type addressesInclude = {
    city?: boolean | citiesArgs
    state?: boolean | statesArgs
    country?: boolean | countriesArgs
    persons?: boolean | personsFindManyArgs
  }

  export type addressesGetPayload<
    S extends boolean | null | undefined | addressesArgs,
    U = keyof S
      > = S extends true
        ? addresses
    : S extends undefined
    ? never
    : S extends addressesArgs | addressesFindManyArgs
    ?'include' extends U
    ? addresses  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'city'
        ? citiesGetPayload<S['include'][P]> :
        P extends 'state'
        ? statesGetPayload<S['include'][P]> :
        P extends 'country'
        ? countriesGetPayload<S['include'][P]> :
        P extends 'persons'
        ? Array < personsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof addresses ?addresses [P]
  : 
          P extends 'city'
        ? citiesGetPayload<S['select'][P]> :
        P extends 'state'
        ? statesGetPayload<S['select'][P]> :
        P extends 'country'
        ? countriesGetPayload<S['select'][P]> :
        P extends 'persons'
        ? Array < personsGetPayload<S['select'][P]>>  : never
  } 
    : addresses
  : addresses


  type addressesCountArgs = Merge<
    Omit<addressesFindManyArgs, 'select' | 'include'> & {
      select?: AddressesCountAggregateInputType | true
    }
  >

  export interface addressesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends addressesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, addressesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'addresses'> extends True ? CheckSelect<T, Prisma__addressesClient<addresses>, Prisma__addressesClient<addressesGetPayload<T>>> : CheckSelect<T, Prisma__addressesClient<addresses | null >, Prisma__addressesClient<addressesGetPayload<T> | null >>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends addressesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, addressesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'addresses'> extends True ? CheckSelect<T, Prisma__addressesClient<addresses>, Prisma__addressesClient<addressesGetPayload<T>>> : CheckSelect<T, Prisma__addressesClient<addresses | null >, Prisma__addressesClient<addressesGetPayload<T> | null >>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressesWithIdOnly = await prisma.addresses.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends addressesFindManyArgs>(
      args?: SelectSubset<T, addressesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<addresses>>, PrismaPromise<Array<addressesGetPayload<T>>>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
    **/
    create<T extends addressesCreateArgs>(
      args: SelectSubset<T, addressesCreateArgs>
    ): CheckSelect<T, Prisma__addressesClient<addresses>, Prisma__addressesClient<addressesGetPayload<T>>>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
    **/
    delete<T extends addressesDeleteArgs>(
      args: SelectSubset<T, addressesDeleteArgs>
    ): CheckSelect<T, Prisma__addressesClient<addresses>, Prisma__addressesClient<addressesGetPayload<T>>>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends addressesUpdateArgs>(
      args: SelectSubset<T, addressesUpdateArgs>
    ): CheckSelect<T, Prisma__addressesClient<addresses>, Prisma__addressesClient<addressesGetPayload<T>>>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends addressesDeleteManyArgs>(
      args?: SelectSubset<T, addressesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends addressesUpdateManyArgs>(
      args: SelectSubset<T, addressesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
    **/
    upsert<T extends addressesUpsertArgs>(
      args: SelectSubset<T, addressesUpsertArgs>
    ): CheckSelect<T, Prisma__addressesClient<addresses>, Prisma__addressesClient<addressesGetPayload<T>>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): PrismaPromise<GetAddressesAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__addressesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    city<T extends citiesArgs = {}>(args?: Subset<T, citiesArgs>): CheckSelect<T, Prisma__citiesClient<cities | null >, Prisma__citiesClient<citiesGetPayload<T> | null >>;

    state<T extends statesArgs = {}>(args?: Subset<T, statesArgs>): CheckSelect<T, Prisma__statesClient<states | null >, Prisma__statesClient<statesGetPayload<T> | null >>;

    country<T extends countriesArgs = {}>(args?: Subset<T, countriesArgs>): CheckSelect<T, Prisma__countriesClient<countries | null >, Prisma__countriesClient<countriesGetPayload<T> | null >>;

    persons<T extends personsFindManyArgs = {}>(args?: Subset<T, personsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<persons>>, PrismaPromise<Array<personsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
    /**
     * Throw an Error if a addresses can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which addresses to fetch.
    **/
    where: addressesWhereUniqueInput
  }


  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
    /**
     * Throw an Error if a addresses can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which addresses to fetch.
    **/
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
    **/
    orderBy?: Enumerable<addressesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
    **/
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
    **/
    distinct?: Enumerable<AddressesScalarFieldEnum>
  }


  /**
   * addresses findMany
   */
  export type addressesFindManyArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
    /**
     * Filter, which addresses to fetch.
    **/
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
    **/
    orderBy?: Enumerable<addressesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
    **/
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
    **/
    skip?: number
    distinct?: Enumerable<AddressesScalarFieldEnum>
  }


  /**
   * addresses create
   */
  export type addressesCreateArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
    /**
     * The data needed to create a addresses.
    **/
    data: XOR<addressesUncheckedCreateInput, addressesCreateInput>
  }


  /**
   * addresses update
   */
  export type addressesUpdateArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
    /**
     * The data needed to update a addresses.
    **/
    data: XOR<addressesUncheckedUpdateInput, addressesUpdateInput>
    /**
     * Choose, which addresses to update.
    **/
    where: addressesWhereUniqueInput
  }


  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs = {
    data: XOR<addressesUncheckedUpdateManyInput, addressesUpdateManyMutationInput>
    where?: addressesWhereInput
  }


  /**
   * addresses upsert
   */
  export type addressesUpsertArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
    /**
     * The filter to search for the addresses to update in case it exists.
    **/
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
    **/
    create: XOR<addressesUncheckedCreateInput, addressesCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<addressesUncheckedUpdateInput, addressesUpdateInput>
  }


  /**
   * addresses delete
   */
  export type addressesDeleteArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
    /**
     * Filter which addresses to delete.
    **/
    where: addressesWhereUniqueInput
  }


  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs = {
    where?: addressesWhereInput
  }


  /**
   * addresses without action
   */
  export type addressesArgs = {
    /**
     * Select specific fields to fetch from the addresses
    **/
    select?: addressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: addressesInclude | null
  }



  /**
   * Model persons
   */


  export type AggregatePersons = {
    count: PersonsCountAggregateOutputType | null
    avg: PersonsAvgAggregateOutputType | null
    sum: PersonsSumAggregateOutputType | null
    min: PersonsMinAggregateOutputType | null
    max: PersonsMaxAggregateOutputType | null
  }

  export type PersonsAvgAggregateOutputType = {
    id: number
    address_id: number
  }

  export type PersonsSumAggregateOutputType = {
    id: number
    address_id: number
  }

  export type PersonsMinAggregateOutputType = {
    id: number
    name: string | null
    cpf: string | null
    birthday: string | null
    address_id: number
  }

  export type PersonsMaxAggregateOutputType = {
    id: number
    name: string | null
    cpf: string | null
    birthday: string | null
    address_id: number
  }

  export type PersonsCountAggregateOutputType = {
    id: number
    name: number | null
    cpf: number | null
    birthday: number | null
    address_id: number
    _all: number
  }


  export type PersonsAvgAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type PersonsSumAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type PersonsMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birthday?: true
    address_id?: true
  }

  export type PersonsMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birthday?: true
    address_id?: true
  }

  export type PersonsCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birthday?: true
    address_id?: true
    _all?: true
  }

  export type PersonsAggregateArgs = {
    /**
     * Filter which persons to aggregate.
    **/
    where?: personsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of persons to fetch.
    **/
    orderBy?: Enumerable<personsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: personsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` persons from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` persons.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned persons
    **/
    count?: true | PersonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: PersonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: PersonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: PersonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: PersonsMaxAggregateInputType
  }

  export type GetPersonsAggregateType<T extends PersonsAggregateArgs> = {
    [P in keyof T & keyof AggregatePersons]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersons[P]>
      : GetScalarType<T[P], AggregatePersons[P]>
  }



  export type personsSelect = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    birthday?: boolean
    address_id?: boolean
    address?: boolean | addressesArgs
  }

  export type personsInclude = {
    address?: boolean | addressesArgs
  }

  export type personsGetPayload<
    S extends boolean | null | undefined | personsArgs,
    U = keyof S
      > = S extends true
        ? persons
    : S extends undefined
    ? never
    : S extends personsArgs | personsFindManyArgs
    ?'include' extends U
    ? persons  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'address'
        ? addressesGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof persons ?persons [P]
  : 
          P extends 'address'
        ? addressesGetPayload<S['select'][P]> : never
  } 
    : persons
  : persons


  type personsCountArgs = Merge<
    Omit<personsFindManyArgs, 'select' | 'include'> & {
      select?: PersonsCountAggregateInputType | true
    }
  >

  export interface personsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Persons that matches the filter.
     * @param {personsFindUniqueArgs} args - Arguments to find a Persons
     * @example
     * // Get one Persons
     * const persons = await prisma.persons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends personsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, personsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'persons'> extends True ? CheckSelect<T, Prisma__personsClient<persons>, Prisma__personsClient<personsGetPayload<T>>> : CheckSelect<T, Prisma__personsClient<persons | null >, Prisma__personsClient<personsGetPayload<T> | null >>

    /**
     * Find the first Persons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personsFindFirstArgs} args - Arguments to find a Persons
     * @example
     * // Get one Persons
     * const persons = await prisma.persons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends personsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, personsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'persons'> extends True ? CheckSelect<T, Prisma__personsClient<persons>, Prisma__personsClient<personsGetPayload<T>>> : CheckSelect<T, Prisma__personsClient<persons | null >, Prisma__personsClient<personsGetPayload<T> | null >>

    /**
     * Find zero or more Persons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Persons
     * const persons = await prisma.persons.findMany()
     * 
     * // Get first 10 Persons
     * const persons = await prisma.persons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personsWithIdOnly = await prisma.persons.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends personsFindManyArgs>(
      args?: SelectSubset<T, personsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<persons>>, PrismaPromise<Array<personsGetPayload<T>>>>

    /**
     * Create a Persons.
     * @param {personsCreateArgs} args - Arguments to create a Persons.
     * @example
     * // Create one Persons
     * const Persons = await prisma.persons.create({
     *   data: {
     *     // ... data to create a Persons
     *   }
     * })
     * 
    **/
    create<T extends personsCreateArgs>(
      args: SelectSubset<T, personsCreateArgs>
    ): CheckSelect<T, Prisma__personsClient<persons>, Prisma__personsClient<personsGetPayload<T>>>

    /**
     * Delete a Persons.
     * @param {personsDeleteArgs} args - Arguments to delete one Persons.
     * @example
     * // Delete one Persons
     * const Persons = await prisma.persons.delete({
     *   where: {
     *     // ... filter to delete one Persons
     *   }
     * })
     * 
    **/
    delete<T extends personsDeleteArgs>(
      args: SelectSubset<T, personsDeleteArgs>
    ): CheckSelect<T, Prisma__personsClient<persons>, Prisma__personsClient<personsGetPayload<T>>>

    /**
     * Update one Persons.
     * @param {personsUpdateArgs} args - Arguments to update one Persons.
     * @example
     * // Update one Persons
     * const persons = await prisma.persons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends personsUpdateArgs>(
      args: SelectSubset<T, personsUpdateArgs>
    ): CheckSelect<T, Prisma__personsClient<persons>, Prisma__personsClient<personsGetPayload<T>>>

    /**
     * Delete zero or more Persons.
     * @param {personsDeleteManyArgs} args - Arguments to filter Persons to delete.
     * @example
     * // Delete a few Persons
     * const { count } = await prisma.persons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends personsDeleteManyArgs>(
      args?: SelectSubset<T, personsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Persons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Persons
     * const persons = await prisma.persons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends personsUpdateManyArgs>(
      args: SelectSubset<T, personsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Persons.
     * @param {personsUpsertArgs} args - Arguments to update or create a Persons.
     * @example
     * // Update or create a Persons
     * const persons = await prisma.persons.upsert({
     *   create: {
     *     // ... data to create a Persons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persons we want to update
     *   }
     * })
    **/
    upsert<T extends personsUpsertArgs>(
      args: SelectSubset<T, personsUpsertArgs>
    ): CheckSelect<T, Prisma__personsClient<persons>, Prisma__personsClient<personsGetPayload<T>>>

    /**
     * Count the number of Persons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personsCountArgs} args - Arguments to filter Persons to count.
     * @example
     * // Count the number of Persons
     * const count = await prisma.persons.count({
     *   where: {
     *     // ... the filter for the Persons we want to count
     *   }
     * })
    **/
    count<T extends personsCountArgs>(
      args?: Subset<T, personsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends PersonsAggregateArgs>(args: Subset<T, PersonsAggregateArgs>): PrismaPromise<GetPersonsAggregateType<T>>


  }

  /**
   * The delegate class that acts as a "Promise-like" for persons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__personsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    address<T extends addressesArgs = {}>(args?: Subset<T, addressesArgs>): CheckSelect<T, Prisma__addressesClient<addresses | null >, Prisma__addressesClient<addressesGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * persons findUnique
   */
  export type personsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
    /**
     * Throw an Error if a persons can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which persons to fetch.
    **/
    where: personsWhereUniqueInput
  }


  /**
   * persons findFirst
   */
  export type personsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
    /**
     * Throw an Error if a persons can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which persons to fetch.
    **/
    where?: personsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of persons to fetch.
    **/
    orderBy?: Enumerable<personsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for persons.
    **/
    cursor?: personsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` persons from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` persons.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of persons.
    **/
    distinct?: Enumerable<PersonsScalarFieldEnum>
  }


  /**
   * persons findMany
   */
  export type personsFindManyArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
    /**
     * Filter, which persons to fetch.
    **/
    where?: personsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of persons to fetch.
    **/
    orderBy?: Enumerable<personsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing persons.
    **/
    cursor?: personsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` persons from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` persons.
    **/
    skip?: number
    distinct?: Enumerable<PersonsScalarFieldEnum>
  }


  /**
   * persons create
   */
  export type personsCreateArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
    /**
     * The data needed to create a persons.
    **/
    data: XOR<personsUncheckedCreateInput, personsCreateInput>
  }


  /**
   * persons update
   */
  export type personsUpdateArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
    /**
     * The data needed to update a persons.
    **/
    data: XOR<personsUncheckedUpdateInput, personsUpdateInput>
    /**
     * Choose, which persons to update.
    **/
    where: personsWhereUniqueInput
  }


  /**
   * persons updateMany
   */
  export type personsUpdateManyArgs = {
    data: XOR<personsUncheckedUpdateManyInput, personsUpdateManyMutationInput>
    where?: personsWhereInput
  }


  /**
   * persons upsert
   */
  export type personsUpsertArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
    /**
     * The filter to search for the persons to update in case it exists.
    **/
    where: personsWhereUniqueInput
    /**
     * In case the persons found by the `where` argument doesn't exist, create a new persons with this data.
    **/
    create: XOR<personsUncheckedCreateInput, personsCreateInput>
    /**
     * In case the persons was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<personsUncheckedUpdateInput, personsUpdateInput>
  }


  /**
   * persons delete
   */
  export type personsDeleteArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
    /**
     * Filter which persons to delete.
    **/
    where: personsWhereUniqueInput
  }


  /**
   * persons deleteMany
   */
  export type personsDeleteManyArgs = {
    where?: personsWhereInput
  }


  /**
   * persons without action
   */
  export type personsArgs = {
    /**
     * Select specific fields to fetch from the persons
    **/
    select?: personsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: personsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CitiesScalarFieldEnum: {
    id: 'id',
    acronym: 'acronym',
    name: 'name'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    acronym: 'acronym',
    name: 'name'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const StatesScalarFieldEnum: {
    id: 'id',
    acronym: 'acronym',
    name: 'name'
  };

  export type StatesScalarFieldEnum = (typeof StatesScalarFieldEnum)[keyof typeof StatesScalarFieldEnum]


  export const AddressesScalarFieldEnum: {
    id: 'id',
    postcode: 'postcode',
    public_place: 'public_place',
    number: 'number',
    complement: 'complement',
    city_id: 'city_id',
    state_id: 'state_id',
    country_id: 'country_id'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const PersonsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    birthday: 'birthday',
    address_id: 'address_id'
  };

  export type PersonsScalarFieldEnum = (typeof PersonsScalarFieldEnum)[keyof typeof PersonsScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type citiesWhereInput = {
    AND?: Enumerable<citiesWhereInput>
    OR?: Enumerable<citiesWhereInput>
    NOT?: Enumerable<citiesWhereInput>
    id?: IntFilter | number
    acronym?: StringFilter | string
    name?: StringFilter | string
    addresses?: AddressesListRelationFilter
  }

  export type citiesOrderByInput = {
    id?: SortOrder
    acronym?: SortOrder
    name?: SortOrder
  }

  export type citiesWhereUniqueInput = {
    id?: number
  }

  export type countriesWhereInput = {
    AND?: Enumerable<countriesWhereInput>
    OR?: Enumerable<countriesWhereInput>
    NOT?: Enumerable<countriesWhereInput>
    id?: IntFilter | number
    acronym?: StringFilter | string
    name?: StringFilter | string
    addresses?: AddressesListRelationFilter
  }

  export type countriesOrderByInput = {
    id?: SortOrder
    acronym?: SortOrder
    name?: SortOrder
  }

  export type countriesWhereUniqueInput = {
    id?: number
  }

  export type statesWhereInput = {
    AND?: Enumerable<statesWhereInput>
    OR?: Enumerable<statesWhereInput>
    NOT?: Enumerable<statesWhereInput>
    id?: IntFilter | number
    acronym?: StringFilter | string
    name?: StringFilter | string
    addresses?: AddressesListRelationFilter
  }

  export type statesOrderByInput = {
    id?: SortOrder
    acronym?: SortOrder
    name?: SortOrder
  }

  export type statesWhereUniqueInput = {
    id?: number
  }

  export type addressesWhereInput = {
    AND?: Enumerable<addressesWhereInput>
    OR?: Enumerable<addressesWhereInput>
    NOT?: Enumerable<addressesWhereInput>
    id?: IntFilter | number
    postcode?: StringFilter | string
    public_place?: StringFilter | string
    number?: IntFilter | number
    complement?: StringNullableFilter | string | null
    city_id?: IntFilter | number
    state_id?: IntFilter | number
    country_id?: IntFilter | number
    city?: XOR<citiesWhereInput, CitiesRelationFilter>
    state?: XOR<statesWhereInput, StatesRelationFilter>
    country?: XOR<countriesWhereInput, CountriesRelationFilter>
    persons?: PersonsListRelationFilter
  }

  export type addressesOrderByInput = {
    id?: SortOrder
    postcode?: SortOrder
    public_place?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city_id?: SortOrder
    state_id?: SortOrder
    country_id?: SortOrder
    city?: citiesOrderByInput
    state?: statesOrderByInput
    country?: countriesOrderByInput
  }

  export type addressesWhereUniqueInput = {
    id?: number
  }

  export type personsWhereInput = {
    AND?: Enumerable<personsWhereInput>
    OR?: Enumerable<personsWhereInput>
    NOT?: Enumerable<personsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    cpf?: StringFilter | string
    birthday?: StringFilter | string
    address_id?: IntFilter | number
    address?: XOR<addressesWhereInput, AddressesRelationFilter>
  }

  export type personsOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birthday?: SortOrder
    address_id?: SortOrder
    address?: addressesOrderByInput
  }

  export type personsWhereUniqueInput = {
    id?: number
  }

  export type citiesCreateInput = {
    acronym: string
    name: string
    addresses?: addressesCreateNestedManyWithoutCityInput
  }

  export type citiesUncheckedCreateInput = {
    id?: number
    acronym: string
    name: string
    addresses?: addressesUncheckedCreateNestedManyWithoutCityInput
  }

  export type citiesUpdateInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    addresses?: addressesUpdateManyWithoutCityInput
  }

  export type citiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    addresses?: addressesUncheckedUpdateManyWithoutCityInput
  }

  export type citiesUpdateManyMutationInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type countriesCreateInput = {
    acronym: string
    name: string
    addresses?: addressesCreateNestedManyWithoutCountryInput
  }

  export type countriesUncheckedCreateInput = {
    id?: number
    acronym: string
    name: string
    addresses?: addressesUncheckedCreateNestedManyWithoutCountryInput
  }

  export type countriesUpdateInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    addresses?: addressesUpdateManyWithoutCountryInput
  }

  export type countriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    addresses?: addressesUncheckedUpdateManyWithoutCountryInput
  }

  export type countriesUpdateManyMutationInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type countriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type statesCreateInput = {
    acronym: string
    name: string
    addresses?: addressesCreateNestedManyWithoutStateInput
  }

  export type statesUncheckedCreateInput = {
    id?: number
    acronym: string
    name: string
    addresses?: addressesUncheckedCreateNestedManyWithoutStateInput
  }

  export type statesUpdateInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    addresses?: addressesUpdateManyWithoutStateInput
  }

  export type statesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    addresses?: addressesUncheckedUpdateManyWithoutStateInput
  }

  export type statesUpdateManyMutationInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type statesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type addressesCreateInput = {
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city: citiesCreateNestedOneWithoutAddressesInput
    state: statesCreateNestedOneWithoutAddressesInput
    country: countriesCreateNestedOneWithoutAddressesInput
    persons?: personsCreateNestedManyWithoutAddressInput
  }

  export type addressesUncheckedCreateInput = {
    id?: number
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city_id: number
    state_id: number
    country_id: number
    persons?: personsUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressesUpdateInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: citiesUpdateOneRequiredWithoutAddressesInput
    state?: statesUpdateOneRequiredWithoutAddressesInput
    country?: countriesUpdateOneRequiredWithoutAddressesInput
    persons?: personsUpdateManyWithoutAddressInput
  }

  export type addressesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    persons?: personsUncheckedUpdateManyWithoutAddressInput
  }

  export type addressesUpdateManyMutationInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type addressesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type personsCreateInput = {
    name: string
    cpf: string
    birthday: string
    address: addressesCreateNestedOneWithoutPersonsInput
  }

  export type personsUncheckedCreateInput = {
    id?: number
    name: string
    cpf: string
    birthday: string
    address_id: number
  }

  export type personsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    address?: addressesUpdateOneRequiredWithoutPersonsInput
  }

  export type personsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type personsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
  }

  export type personsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type AddressesListRelationFilter = {
    every?: addressesWhereInput
    some?: addressesWhereInput
    none?: addressesWhereInput
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type CitiesRelationFilter = {
    is?: citiesWhereInput
    isNot?: citiesWhereInput
  }

  export type StatesRelationFilter = {
    is?: statesWhereInput
    isNot?: statesWhereInput
  }

  export type CountriesRelationFilter = {
    is?: countriesWhereInput
    isNot?: countriesWhereInput
  }

  export type PersonsListRelationFilter = {
    every?: personsWhereInput
    some?: personsWhereInput
    none?: personsWhereInput
  }

  export type AddressesRelationFilter = {
    is?: addressesWhereInput
    isNot?: addressesWhereInput
  }

  export type addressesCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCityInput>, Enumerable<addressesCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCityInput>
    connect?: Enumerable<addressesWhereUniqueInput>
  }

  export type addressesUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCityInput>, Enumerable<addressesCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCityInput>
    connect?: Enumerable<addressesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type addressesUpdateManyWithoutCityInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCityInput>, Enumerable<addressesCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<addressesUpsertWithWhereUniqueWithoutCityInput>
    connect?: Enumerable<addressesWhereUniqueInput>
    set?: Enumerable<addressesWhereUniqueInput>
    disconnect?: Enumerable<addressesWhereUniqueInput>
    delete?: Enumerable<addressesWhereUniqueInput>
    update?: Enumerable<addressesUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<addressesUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<addressesScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type addressesUncheckedUpdateManyWithoutCityInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCityInput>, Enumerable<addressesCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<addressesUpsertWithWhereUniqueWithoutCityInput>
    connect?: Enumerable<addressesWhereUniqueInput>
    set?: Enumerable<addressesWhereUniqueInput>
    disconnect?: Enumerable<addressesWhereUniqueInput>
    delete?: Enumerable<addressesWhereUniqueInput>
    update?: Enumerable<addressesUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<addressesUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<addressesScalarWhereInput>
  }

  export type addressesCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCountryInput>, Enumerable<addressesCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCountryInput>
    connect?: Enumerable<addressesWhereUniqueInput>
  }

  export type addressesUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCountryInput>, Enumerable<addressesCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCountryInput>
    connect?: Enumerable<addressesWhereUniqueInput>
  }

  export type addressesUpdateManyWithoutCountryInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCountryInput>, Enumerable<addressesCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<addressesUpsertWithWhereUniqueWithoutCountryInput>
    connect?: Enumerable<addressesWhereUniqueInput>
    set?: Enumerable<addressesWhereUniqueInput>
    disconnect?: Enumerable<addressesWhereUniqueInput>
    delete?: Enumerable<addressesWhereUniqueInput>
    update?: Enumerable<addressesUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<addressesUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<addressesScalarWhereInput>
  }

  export type addressesUncheckedUpdateManyWithoutCountryInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutCountryInput>, Enumerable<addressesCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<addressesUpsertWithWhereUniqueWithoutCountryInput>
    connect?: Enumerable<addressesWhereUniqueInput>
    set?: Enumerable<addressesWhereUniqueInput>
    disconnect?: Enumerable<addressesWhereUniqueInput>
    delete?: Enumerable<addressesWhereUniqueInput>
    update?: Enumerable<addressesUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<addressesUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<addressesScalarWhereInput>
  }

  export type addressesCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutStateInput>, Enumerable<addressesCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutStateInput>
    connect?: Enumerable<addressesWhereUniqueInput>
  }

  export type addressesUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutStateInput>, Enumerable<addressesCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutStateInput>
    connect?: Enumerable<addressesWhereUniqueInput>
  }

  export type addressesUpdateManyWithoutStateInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutStateInput>, Enumerable<addressesCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<addressesUpsertWithWhereUniqueWithoutStateInput>
    connect?: Enumerable<addressesWhereUniqueInput>
    set?: Enumerable<addressesWhereUniqueInput>
    disconnect?: Enumerable<addressesWhereUniqueInput>
    delete?: Enumerable<addressesWhereUniqueInput>
    update?: Enumerable<addressesUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<addressesUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<addressesScalarWhereInput>
  }

  export type addressesUncheckedUpdateManyWithoutStateInput = {
    create?: XOR<Enumerable<addressesUncheckedCreateWithoutStateInput>, Enumerable<addressesCreateWithoutStateInput>>
    connectOrCreate?: Enumerable<addressesCreateOrConnectWithoutStateInput>
    upsert?: Enumerable<addressesUpsertWithWhereUniqueWithoutStateInput>
    connect?: Enumerable<addressesWhereUniqueInput>
    set?: Enumerable<addressesWhereUniqueInput>
    disconnect?: Enumerable<addressesWhereUniqueInput>
    delete?: Enumerable<addressesWhereUniqueInput>
    update?: Enumerable<addressesUpdateWithWhereUniqueWithoutStateInput>
    updateMany?: Enumerable<addressesUpdateManyWithWhereWithoutStateInput>
    deleteMany?: Enumerable<addressesScalarWhereInput>
  }

  export type citiesCreateNestedOneWithoutAddressesInput = {
    create?: XOR<citiesUncheckedCreateWithoutAddressesInput, citiesCreateWithoutAddressesInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAddressesInput
    connect?: citiesWhereUniqueInput
  }

  export type statesCreateNestedOneWithoutAddressesInput = {
    create?: XOR<statesUncheckedCreateWithoutAddressesInput, statesCreateWithoutAddressesInput>
    connectOrCreate?: statesCreateOrConnectWithoutAddressesInput
    connect?: statesWhereUniqueInput
  }

  export type countriesCreateNestedOneWithoutAddressesInput = {
    create?: XOR<countriesUncheckedCreateWithoutAddressesInput, countriesCreateWithoutAddressesInput>
    connectOrCreate?: countriesCreateOrConnectWithoutAddressesInput
    connect?: countriesWhereUniqueInput
  }

  export type personsCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<personsUncheckedCreateWithoutAddressInput>, Enumerable<personsCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<personsCreateOrConnectWithoutAddressInput>
    connect?: Enumerable<personsWhereUniqueInput>
  }

  export type personsUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<personsUncheckedCreateWithoutAddressInput>, Enumerable<personsCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<personsCreateOrConnectWithoutAddressInput>
    connect?: Enumerable<personsWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type citiesUpdateOneRequiredWithoutAddressesInput = {
    create?: XOR<citiesUncheckedCreateWithoutAddressesInput, citiesCreateWithoutAddressesInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAddressesInput
    upsert?: citiesUpsertWithoutAddressesInput
    connect?: citiesWhereUniqueInput
    update?: XOR<citiesUncheckedUpdateWithoutAddressesInput, citiesUpdateWithoutAddressesInput>
  }

  export type statesUpdateOneRequiredWithoutAddressesInput = {
    create?: XOR<statesUncheckedCreateWithoutAddressesInput, statesCreateWithoutAddressesInput>
    connectOrCreate?: statesCreateOrConnectWithoutAddressesInput
    upsert?: statesUpsertWithoutAddressesInput
    connect?: statesWhereUniqueInput
    update?: XOR<statesUncheckedUpdateWithoutAddressesInput, statesUpdateWithoutAddressesInput>
  }

  export type countriesUpdateOneRequiredWithoutAddressesInput = {
    create?: XOR<countriesUncheckedCreateWithoutAddressesInput, countriesCreateWithoutAddressesInput>
    connectOrCreate?: countriesCreateOrConnectWithoutAddressesInput
    upsert?: countriesUpsertWithoutAddressesInput
    connect?: countriesWhereUniqueInput
    update?: XOR<countriesUncheckedUpdateWithoutAddressesInput, countriesUpdateWithoutAddressesInput>
  }

  export type personsUpdateManyWithoutAddressInput = {
    create?: XOR<Enumerable<personsUncheckedCreateWithoutAddressInput>, Enumerable<personsCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<personsCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<personsUpsertWithWhereUniqueWithoutAddressInput>
    connect?: Enumerable<personsWhereUniqueInput>
    set?: Enumerable<personsWhereUniqueInput>
    disconnect?: Enumerable<personsWhereUniqueInput>
    delete?: Enumerable<personsWhereUniqueInput>
    update?: Enumerable<personsUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<personsUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<personsScalarWhereInput>
  }

  export type personsUncheckedUpdateManyWithoutAddressInput = {
    create?: XOR<Enumerable<personsUncheckedCreateWithoutAddressInput>, Enumerable<personsCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<personsCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<personsUpsertWithWhereUniqueWithoutAddressInput>
    connect?: Enumerable<personsWhereUniqueInput>
    set?: Enumerable<personsWhereUniqueInput>
    disconnect?: Enumerable<personsWhereUniqueInput>
    delete?: Enumerable<personsWhereUniqueInput>
    update?: Enumerable<personsUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<personsUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<personsScalarWhereInput>
  }

  export type addressesCreateNestedOneWithoutPersonsInput = {
    create?: XOR<addressesUncheckedCreateWithoutPersonsInput, addressesCreateWithoutPersonsInput>
    connectOrCreate?: addressesCreateOrConnectWithoutPersonsInput
    connect?: addressesWhereUniqueInput
  }

  export type addressesUpdateOneRequiredWithoutPersonsInput = {
    create?: XOR<addressesUncheckedCreateWithoutPersonsInput, addressesCreateWithoutPersonsInput>
    connectOrCreate?: addressesCreateOrConnectWithoutPersonsInput
    upsert?: addressesUpsertWithoutPersonsInput
    connect?: addressesWhereUniqueInput
    update?: XOR<addressesUncheckedUpdateWithoutPersonsInput, addressesUpdateWithoutPersonsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type addressesCreateWithoutCityInput = {
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    state: statesCreateNestedOneWithoutAddressesInput
    country: countriesCreateNestedOneWithoutAddressesInput
    persons?: personsCreateNestedManyWithoutAddressInput
  }

  export type addressesUncheckedCreateWithoutCityInput = {
    id?: number
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    state_id: number
    country_id: number
    persons?: personsUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressesCreateOrConnectWithoutCityInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesUncheckedCreateWithoutCityInput, addressesCreateWithoutCityInput>
  }

  export type addressesUpsertWithWhereUniqueWithoutCityInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUncheckedUpdateWithoutCityInput, addressesUpdateWithoutCityInput>
    create: XOR<addressesUncheckedCreateWithoutCityInput, addressesCreateWithoutCityInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutCityInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUncheckedUpdateWithoutCityInput, addressesUpdateWithoutCityInput>
  }

  export type addressesUpdateManyWithWhereWithoutCityInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUncheckedUpdateManyWithoutAddressesInput, addressesUpdateManyMutationInput>
  }

  export type addressesScalarWhereInput = {
    AND?: Enumerable<addressesScalarWhereInput>
    OR?: Enumerable<addressesScalarWhereInput>
    NOT?: Enumerable<addressesScalarWhereInput>
    id?: IntFilter | number
    postcode?: StringFilter | string
    public_place?: StringFilter | string
    number?: IntFilter | number
    complement?: StringNullableFilter | string | null
    city_id?: IntFilter | number
    state_id?: IntFilter | number
    country_id?: IntFilter | number
  }

  export type addressesCreateWithoutCountryInput = {
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city: citiesCreateNestedOneWithoutAddressesInput
    state: statesCreateNestedOneWithoutAddressesInput
    persons?: personsCreateNestedManyWithoutAddressInput
  }

  export type addressesUncheckedCreateWithoutCountryInput = {
    id?: number
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city_id: number
    state_id: number
    persons?: personsUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressesCreateOrConnectWithoutCountryInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesUncheckedCreateWithoutCountryInput, addressesCreateWithoutCountryInput>
  }

  export type addressesUpsertWithWhereUniqueWithoutCountryInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUncheckedUpdateWithoutCountryInput, addressesUpdateWithoutCountryInput>
    create: XOR<addressesUncheckedCreateWithoutCountryInput, addressesCreateWithoutCountryInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutCountryInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUncheckedUpdateWithoutCountryInput, addressesUpdateWithoutCountryInput>
  }

  export type addressesUpdateManyWithWhereWithoutCountryInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUncheckedUpdateManyWithoutAddressesInput, addressesUpdateManyMutationInput>
  }

  export type addressesCreateWithoutStateInput = {
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city: citiesCreateNestedOneWithoutAddressesInput
    country: countriesCreateNestedOneWithoutAddressesInput
    persons?: personsCreateNestedManyWithoutAddressInput
  }

  export type addressesUncheckedCreateWithoutStateInput = {
    id?: number
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city_id: number
    country_id: number
    persons?: personsUncheckedCreateNestedManyWithoutAddressInput
  }

  export type addressesCreateOrConnectWithoutStateInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesUncheckedCreateWithoutStateInput, addressesCreateWithoutStateInput>
  }

  export type addressesUpsertWithWhereUniqueWithoutStateInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUncheckedUpdateWithoutStateInput, addressesUpdateWithoutStateInput>
    create: XOR<addressesUncheckedCreateWithoutStateInput, addressesCreateWithoutStateInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutStateInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUncheckedUpdateWithoutStateInput, addressesUpdateWithoutStateInput>
  }

  export type addressesUpdateManyWithWhereWithoutStateInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUncheckedUpdateManyWithoutAddressesInput, addressesUpdateManyMutationInput>
  }

  export type citiesCreateWithoutAddressesInput = {
    acronym: string
    name: string
  }

  export type citiesUncheckedCreateWithoutAddressesInput = {
    id?: number
    acronym: string
    name: string
  }

  export type citiesCreateOrConnectWithoutAddressesInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesUncheckedCreateWithoutAddressesInput, citiesCreateWithoutAddressesInput>
  }

  export type statesCreateWithoutAddressesInput = {
    acronym: string
    name: string
  }

  export type statesUncheckedCreateWithoutAddressesInput = {
    id?: number
    acronym: string
    name: string
  }

  export type statesCreateOrConnectWithoutAddressesInput = {
    where: statesWhereUniqueInput
    create: XOR<statesUncheckedCreateWithoutAddressesInput, statesCreateWithoutAddressesInput>
  }

  export type countriesCreateWithoutAddressesInput = {
    acronym: string
    name: string
  }

  export type countriesUncheckedCreateWithoutAddressesInput = {
    id?: number
    acronym: string
    name: string
  }

  export type countriesCreateOrConnectWithoutAddressesInput = {
    where: countriesWhereUniqueInput
    create: XOR<countriesUncheckedCreateWithoutAddressesInput, countriesCreateWithoutAddressesInput>
  }

  export type personsCreateWithoutAddressInput = {
    name: string
    cpf: string
    birthday: string
  }

  export type personsUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    cpf: string
    birthday: string
  }

  export type personsCreateOrConnectWithoutAddressInput = {
    where: personsWhereUniqueInput
    create: XOR<personsUncheckedCreateWithoutAddressInput, personsCreateWithoutAddressInput>
  }

  export type citiesUpsertWithoutAddressesInput = {
    update: XOR<citiesUncheckedUpdateWithoutAddressesInput, citiesUpdateWithoutAddressesInput>
    create: XOR<citiesUncheckedCreateWithoutAddressesInput, citiesCreateWithoutAddressesInput>
  }

  export type citiesUpdateWithoutAddressesInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type statesUpsertWithoutAddressesInput = {
    update: XOR<statesUncheckedUpdateWithoutAddressesInput, statesUpdateWithoutAddressesInput>
    create: XOR<statesUncheckedCreateWithoutAddressesInput, statesCreateWithoutAddressesInput>
  }

  export type statesUpdateWithoutAddressesInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type statesUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type countriesUpsertWithoutAddressesInput = {
    update: XOR<countriesUncheckedUpdateWithoutAddressesInput, countriesUpdateWithoutAddressesInput>
    create: XOR<countriesUncheckedCreateWithoutAddressesInput, countriesCreateWithoutAddressesInput>
  }

  export type countriesUpdateWithoutAddressesInput = {
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type countriesUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    acronym?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type personsUpsertWithWhereUniqueWithoutAddressInput = {
    where: personsWhereUniqueInput
    update: XOR<personsUncheckedUpdateWithoutAddressInput, personsUpdateWithoutAddressInput>
    create: XOR<personsUncheckedCreateWithoutAddressInput, personsCreateWithoutAddressInput>
  }

  export type personsUpdateWithWhereUniqueWithoutAddressInput = {
    where: personsWhereUniqueInput
    data: XOR<personsUncheckedUpdateWithoutAddressInput, personsUpdateWithoutAddressInput>
  }

  export type personsUpdateManyWithWhereWithoutAddressInput = {
    where: personsScalarWhereInput
    data: XOR<personsUncheckedUpdateManyWithoutPersonsInput, personsUpdateManyMutationInput>
  }

  export type personsScalarWhereInput = {
    AND?: Enumerable<personsScalarWhereInput>
    OR?: Enumerable<personsScalarWhereInput>
    NOT?: Enumerable<personsScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    cpf?: StringFilter | string
    birthday?: StringFilter | string
    address_id?: IntFilter | number
  }

  export type addressesCreateWithoutPersonsInput = {
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city: citiesCreateNestedOneWithoutAddressesInput
    state: statesCreateNestedOneWithoutAddressesInput
    country: countriesCreateNestedOneWithoutAddressesInput
  }

  export type addressesUncheckedCreateWithoutPersonsInput = {
    id?: number
    postcode: string
    public_place: string
    number: number
    complement?: string | null
    city_id: number
    state_id: number
    country_id: number
  }

  export type addressesCreateOrConnectWithoutPersonsInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesUncheckedCreateWithoutPersonsInput, addressesCreateWithoutPersonsInput>
  }

  export type addressesUpsertWithoutPersonsInput = {
    update: XOR<addressesUncheckedUpdateWithoutPersonsInput, addressesUpdateWithoutPersonsInput>
    create: XOR<addressesUncheckedCreateWithoutPersonsInput, addressesCreateWithoutPersonsInput>
  }

  export type addressesUpdateWithoutPersonsInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: citiesUpdateOneRequiredWithoutAddressesInput
    state?: statesUpdateOneRequiredWithoutAddressesInput
    country?: countriesUpdateOneRequiredWithoutAddressesInput
  }

  export type addressesUncheckedUpdateWithoutPersonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type addressesUpdateWithoutCityInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: statesUpdateOneRequiredWithoutAddressesInput
    country?: countriesUpdateOneRequiredWithoutAddressesInput
    persons?: personsUpdateManyWithoutAddressInput
  }

  export type addressesUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    persons?: personsUncheckedUpdateManyWithoutAddressInput
  }

  export type addressesUncheckedUpdateManyWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type addressesUpdateWithoutCountryInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: citiesUpdateOneRequiredWithoutAddressesInput
    state?: statesUpdateOneRequiredWithoutAddressesInput
    persons?: personsUpdateManyWithoutAddressInput
  }

  export type addressesUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    persons?: personsUncheckedUpdateManyWithoutAddressInput
  }

  export type addressesUpdateWithoutStateInput = {
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: citiesUpdateOneRequiredWithoutAddressesInput
    country?: countriesUpdateOneRequiredWithoutAddressesInput
    persons?: personsUpdateManyWithoutAddressInput
  }

  export type addressesUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postcode?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    persons?: personsUncheckedUpdateManyWithoutAddressInput
  }

  export type personsUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
  }

  export type personsUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
  }

  export type personsUncheckedUpdateManyWithoutPersonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birthday?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.DMMF.Document;
}