// 首先先把值改了，再用 [keyof T] 把值返回出去
type ObjectEntries<T> = {
  [R in keyof T]-?: [R, T[R] extends undefined ? undefined : Exclude<T[R], undefined>]
}[keyof T]