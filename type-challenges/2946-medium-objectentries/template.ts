// type ObjectEntries<T extends object,K = keyof T> = K extends keyof T ? [K,T[K]] : never
// type ObjectEntries<T extends object, K = keyof T> = K extends keyof T ? [K, T[K]] : never

type ObjectEntries<T> = {
  [R in keyof T]-?: [R, T[R] extends undefined ? undefined : Exclude<T[R], undefined>]
}[keyof T]