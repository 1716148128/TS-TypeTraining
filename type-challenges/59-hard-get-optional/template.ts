type GetOptional<T> = {
  [P in keyof T as { [key in P]?: any } extends { [key in P]: T[P] } ? P : never]: T[P] 
}