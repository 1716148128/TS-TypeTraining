// 题目要求，根据传入的数，获取对应的斐波那契数列
// C 记录当前数列的索引（索引从 1 开始才有值哦）
// U1 记录当前索引的数列
// U1 记录下个索引的数列
// 递归让 C 也就是索引加一，U1 换成 U2，U2 就用 旧值 + 新值 = 下一个数列的值
type Fibonacci<T extends number, C extends unknown[] = [], U1 extends unknown[] = [], U2 extends unknown[] = [1]> =
  T extends C['length']
    ? U1['length']
    : Fibonacci<T, [1, ...C], U2, [...U1, ...U2]>
