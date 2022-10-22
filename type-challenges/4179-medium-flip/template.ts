type Flip<T extends Record<keyof any,any>> = {
  [K in keyof T as T[K] extends keyof any | null | undefined | boolean ? `${T[K]}` : never]: K
}