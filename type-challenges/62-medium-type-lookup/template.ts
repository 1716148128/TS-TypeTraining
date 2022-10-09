type LookUp<U, T extends string> = U extends { type : T} ? U : never

// type LookUp<U extends { type: any }, T> = 
//   (U extends U 
//     ? (U['type'] extends T
//       ? U
//       : never)
//     : never)