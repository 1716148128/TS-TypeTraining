// 需要两个 type，然后用 & 就可以把两个对象组为一个对象
type Merges<T> = {
  [Key in keyof T]: T[Key]
}
type PartialByKeys<T, K extends keyof T = keyof T  > =  Merges<
  { [R in keyof T as R extends K ? never : R]: T[R] } & { [P in keyof T as P extends  K ? P : never]?: T[P]}
>

