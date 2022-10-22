// type GreaterThan<T extends number, U extends number> = T extends U ? false : true

type GreaterThan<T extends number, U extends number, C extends unknown[] = []> =
  C['length'] extends U
    ? C['length'] extends T
      ? false
      : true
    : C['length'] extends T
      ? false
      : GreaterThan<T, U, [1, ...C]>