// T 继承于 大写字母 T 吗？ 
type IsUp<T extends string> = T extends Uppercase<T>
  ? T extends Lowercase<T>
  ? false : true
  : false

// 
type KebabCase<S extends string, isFirst extends boolean = true> =
  S extends `${infer R}${infer Rest}` ? `${IsUp<R> extends true ? `${isFirst extends true ? '' : '-'}${Lowercase<R>}` : R}${KebabCase<Rest, false>}` : S