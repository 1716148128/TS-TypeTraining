type GetRequired<T> = {
  [P in keyof T as { [key in P]?:any } extends { [key in P]: T[P] } ? never : P ]: T[P]
}