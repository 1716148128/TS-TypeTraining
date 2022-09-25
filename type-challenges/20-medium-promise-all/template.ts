// 返回一个 promise，如果值是 promise，那么就把promise里面的值取出来
declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
}>
