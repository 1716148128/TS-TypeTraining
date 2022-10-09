type AppendToObject<T extends Object, U extends string, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P]: V
}