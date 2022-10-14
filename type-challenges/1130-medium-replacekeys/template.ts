type ReplaceKeys<T, P, U> =  {
  [K in keyof T ]:
    K extends P
      ? K extends keyof U
        ? U[K]
        : never
      : T[K]
}