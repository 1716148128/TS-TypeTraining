type Split<S extends string> = S extends `${infer F}${infer R}` ? [F,...Split<R>] : []

type LengthOfString<S extends string> = Split<S>['length']

// 取出字符串的长度需要把字符串分割成数组