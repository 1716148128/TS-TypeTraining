// type RemoveIndexSignature<T> = any

type Signature<T> = string extends T
  ? never
  : number extends T
    ? never
    : symbol extends T
      ? never
      : T

type RemoveIndexSignature<T> = {
  [K in keyof T as Signature<K>]: T[K]
}