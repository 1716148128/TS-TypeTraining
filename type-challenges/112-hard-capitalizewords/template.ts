// 整体思路：
// 判断前一个字符是不是特殊字符或者空格
// 怎么判断呢？ 我们让它们转换成大写字母等不等于Alphabet就行了
// 如果上一个是特殊字符，那说明当前这一个要转换为大写字母
type Alphabet = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P'
  | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

type CapitalizeWords<S extends string, prev extends string = '', result extends string = ''> = S extends `${infer F}${infer R}` 
? Uppercase<prev> extends Alphabet ?
  CapitalizeWords<R, F, `${result}${F}`> :
  CapitalizeWords<R, F, `${result}${Uppercase<F>}`> 
: result;