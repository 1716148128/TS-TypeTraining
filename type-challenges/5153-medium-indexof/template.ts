// 本节知识点
// 默认值不要写 unknown[],否则你用扩展运算符是展不开的！！！
// 用下面这种表达式判断两个值是否相等，如果 G extends number 和 G extends string 那这两个就不想等,G 的话就相当于一个临时变量
// 注意：下面这种加括号就是表达式对比，不加括号就是值类型对比
type MyEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) ? true : false

type IndexOf<T extends unknown[], U, Index extends unknown[] = []> = T extends [infer First, ...infer Rest]
  ? MyEqual<First, U> extends true
    ? Index['length']
    : IndexOf<Rest, U, [any, ...Index]>
  : -1