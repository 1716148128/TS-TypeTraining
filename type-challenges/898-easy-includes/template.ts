import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer Fist,...infer Rest] ? Equal<Fist,U> extends true ? true : Includes<Rest,U> : false