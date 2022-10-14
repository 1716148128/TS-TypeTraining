type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends 0 | '' | false | []
    ? AnyOf<R>
    : keyof F extends never
      ? AnyOf<R>
      : true
  : false