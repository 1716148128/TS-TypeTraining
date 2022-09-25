type MyReadonly<T> = {
  readonly [P in keyof T]:T[P]
}

// 把属性设置为只读