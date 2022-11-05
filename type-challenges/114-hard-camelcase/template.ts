// 题目要求：
// 1. 前面如果有特殊字符，那么下一个字母大写，并且删除特殊字符，其余全小写
type CamelCase<S extends string,prev extends string= '',result extends string = ''> = removeSpecial<S extends `${infer F}${infer R}` ? Uppercase<prev> extends Alphabet ? CamelCase<R,F,`${result}${Lowercase<F>}`> : prev extends '' ? CamelCase<R,F,`${result}${Lowercase<F>}`> : CamelCase<R,F,`${result}${Uppercase<F>}`> : result>

type removeSpecial<S extends string,result extends string = ''> = S extends `${infer F}${infer R}` ? R extends '' ? `${result}${F}` :  Uppercase<F> extends Alphabet ? removeSpecial<R,`${result}${F}`> : F extends '_' ? removeSpecial<R,result> : S : result

// 注意事项
// 表情不只有一个字符，比如： 😎   S extends `${infer F}${infer R}` ? R extends '' 这样是判断不出来的，因为标签不只有一个字符