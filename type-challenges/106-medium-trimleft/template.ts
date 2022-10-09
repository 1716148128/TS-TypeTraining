type TrimLeft<S extends string> = S extends `${' '|"\n"|"\t"}${infer Rest}` ? TrimLeft<Rest> : S


// 本节知识点：

// 为了这个功能，老爷子在 TS 中新增了 uppercase, lowercase, capitalize, uncapitalize 这些关键字，用于对模板粒度字符串变量进行处理。

//  type Cases<T extends string> = `${uppercase T} ${lowercase T} ${capitalize T} ${uncapitalize T}`;
//  type T11 = Cases<'bar'>; // 'BAR bar Bar bar'

// 其实很简单，就是提供了几个处理方法：大写、小写，首字母大写，首字母小写。
// 配合 infer

// 特别强大的一点是，模板字符串可以通过 infer 关键字，实现类似于正则匹配提取的功能：

// type MatchPair<S extends string> = S extends `[${infer A},${infer B}]` ? [A, B] : unknown;
// type T20 = MatchPair<'[1,2]'>; // ['1', '2']
// type T21 = MatchPair<'[foo,bar]'>; // ['foo', 'bar']
