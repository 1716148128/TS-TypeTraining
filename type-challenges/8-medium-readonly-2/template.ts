// 没有传就设置默认值
type MyReadonly2<T, K extends keyof T=keyof T> = {
  // 第一步把 T 中所有属性变成只读
  // 第二步拿到所有非只读的属性设置值
  // 这里的 & 表示既要满足 A 条件，又要满足 B 条件
  readonly [P in keyof T]: T[P] } & { [P in keyof T as P extends K ? never : P] : T[P]
}