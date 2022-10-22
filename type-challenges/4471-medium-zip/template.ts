type Zip<T, U> = T extends [infer A,...infer args] ? U extends [infer B,...infer Bargs] ? [[A,B],...Zip<args,Bargs>]  : [] : []
