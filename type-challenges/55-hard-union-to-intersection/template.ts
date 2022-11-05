// 把值传进函数参数里面，然后用 infer 把参数值取出来

type ToFunc<T> = T extends any
  ? (arg: T) => void
  : never

type UnionToIntersection<U> = ToFunc<U> extends (args: infer Arg) => void ? Arg : never;

