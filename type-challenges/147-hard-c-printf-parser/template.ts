type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

// 看了下别人的思路，发现我自己的思路真的太水了
// 先判断第一个元素是不是百分号，是的话直接判断下一个元素是不是 controlsMap 的元素，如果是就找到了，不是的话直接跳过下个元素，从下下个元素继续查找，这样就确保双数不查找了

type ParsePrintFormat<T extends string, Result extends string[] = []> = T extends `${infer S}${infer J}` ? S extends '%' ? J extends `${infer Q}${infer K}`
                                                                                    ? Q extends keyof ControlsMap
                                                                                         ? ParsePrintFormat<K, [...Result, ControlsMap[Q]]>
                                                                                         : ParsePrintFormat<K, Result>
                                                                                    : Result
                                                                                : ParsePrintFormat<J, Result>
                                                                            : Result;
