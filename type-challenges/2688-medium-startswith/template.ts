// 这里的 infer_ 就是字符串 S 比 P 多出来的值
type StartsWith<S extends string, P extends string> = S extends `${P}${infer _}` ? true : false;


// `${string}` 也就是字符串类型，${P}${string} 代表以 S 字符串开头,后面跟任意字符串包括空字符串
// type StartsWith<S extends string, P extends string> = S extends `${P}${string}` ? true : false;

