// 我们先分别取出第一个元素和后面的元素，然后判断后面元素的 length 如果等于 0 ,就说明数组里面就一个元素 F，否则就递归调用
type Last<T extends any[]> =  T extends [infer F,...infer args] ? (args['length'] extends 0 ? F : Last<args>) : never