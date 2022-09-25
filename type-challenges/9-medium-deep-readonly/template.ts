// 这题需要注意的是函数也是对象，但是函数不需要递归
type DeepReadonly<T> = {
  // 值是一个函数或普通值，返回普通值
  // 值如果是一个对象，我们递归调用
  readonly [P in keyof T]:T[P] extends object ? T[P] extends Function ? T[P] : DeepReadonly<T[P]>:T[P]
}