type GetPrefix<S extends string> =
  S extends `+${infer _}`
    ? '+'
    : S extends `-${infer _}`
      ? '-'
      : '';

type GetSubfix<S extends string> =
  S extends `${infer _}%`
    ? '%'
    : '';

type PercentageParser<S extends string> =
  S extends `${GetPrefix<S>}${infer N}${GetSubfix<S>}`
    ? [GetPrefix<S>, N, GetSubfix<S>]
    : never;