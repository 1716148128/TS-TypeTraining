type MyCapitalize<S extends string> = S extends `${infer C}${infer T}` ? `${Uppercase<C>}${T}` : S

// 不行
// type MyCapitalize<S extends string> =  `${Uppercase<S>}`


// 新知识：
// Uppercase传进一个字符改成大写，注意不能把整个字符串放进去