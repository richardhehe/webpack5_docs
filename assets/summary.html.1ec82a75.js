import{_ as e,c as l}from"./app.efe1277b.js";const i={},o=l('<h1 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h1><p>\u6211\u4EEC\u4ECE 4 \u4E2A\u89D2\u5EA6\u5BF9 webpack \u548C\u4EE3\u7801\u8FDB\u884C\u4E86\u4F18\u5316\uFF1A</p><ol><li>\u63D0\u5347\u5F00\u53D1\u4F53\u9A8C</li></ol><ul><li>\u4F7F\u7528 <code>Source Map</code> \u8BA9\u5F00\u53D1\u6216\u4E0A\u7EBF\u65F6\u4EE3\u7801\u62A5\u9519\u80FD\u6709\u66F4\u52A0\u51C6\u786E\u7684\u9519\u8BEF\u63D0\u793A\u3002</li></ul><ol start="2"><li>\u63D0\u5347 webpack \u63D0\u5347\u6253\u5305\u6784\u5EFA\u901F\u5EA6</li></ol><ul><li>\u4F7F\u7528 <code>HotModuleReplacement</code> \u8BA9\u5F00\u53D1\u65F6\u53EA\u91CD\u65B0\u7F16\u8BD1\u6253\u5305\u66F4\u65B0\u53D8\u5316\u4E86\u7684\u4EE3\u7801\uFF0C\u4E0D\u53D8\u7684\u4EE3\u7801\u4F7F\u7528\u7F13\u5B58\uFF0C\u4ECE\u800C\u4F7F\u66F4\u65B0\u901F\u5EA6\u66F4\u5FEB\u3002</li><li>\u4F7F\u7528 <code>OneOf</code> \u8BA9\u8D44\u6E90\u6587\u4EF6\u4E00\u65E6\u88AB\u67D0\u4E2A loader \u5904\u7406\u4E86\uFF0C\u5C31\u4E0D\u4F1A\u7EE7\u7EED\u904D\u5386\u4E86\uFF0C\u6253\u5305\u901F\u5EA6\u66F4\u5FEB\u3002</li><li>\u4F7F\u7528 <code>Include/Exclude</code> \u6392\u9664\u6216\u53EA\u68C0\u6D4B\u67D0\u4E9B\u6587\u4EF6\uFF0C\u5904\u7406\u7684\u6587\u4EF6\u66F4\u5C11\uFF0C\u901F\u5EA6\u66F4\u5FEB\u3002</li><li>\u4F7F\u7528 <code>Cache</code> \u5BF9 eslint \u548C babel \u5904\u7406\u7684\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58\uFF0C\u8BA9\u7B2C\u4E8C\u6B21\u6253\u5305\u901F\u5EA6\u66F4\u5FEB\u3002</li><li>\u4F7F\u7528 <code>Thead</code> \u591A\u8FDB\u7A0B\u5904\u7406 eslint \u548C babel \u4EFB\u52A1\uFF0C\u901F\u5EA6\u66F4\u5FEB\u3002\uFF08\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FDB\u7A0B\u542F\u52A8\u901A\u4FE1\u90FD\u6709\u5F00\u9500\u7684\uFF0C\u8981\u5728\u6BD4\u8F83\u591A\u4EE3\u7801\u5904\u7406\u65F6\u4F7F\u7528\u624D\u6709\u6548\u679C\uFF09</li></ul><ol start="3"><li>\u51CF\u5C11\u4EE3\u7801\u4F53\u79EF</li></ol><ul><li>\u4F7F\u7528 <code>Tree Shaking</code> \u5254\u9664\u4E86\u6CA1\u6709\u4F7F\u7528\u7684\u591A\u4F59\u4EE3\u7801\uFF0C\u8BA9\u4EE3\u7801\u4F53\u79EF\u66F4\u5C0F\u3002</li><li>\u4F7F\u7528 <code>@babel/plugin-transform-runtime</code> \u63D2\u4EF6\u5BF9 babel \u8FDB\u884C\u5904\u7406\uFF0C\u8BA9\u8F85\u52A9\u4EE3\u7801\u4ECE\u4E2D\u5F15\u5165\uFF0C\u800C\u4E0D\u662F\u6BCF\u4E2A\u6587\u4EF6\u90FD\u751F\u6210\u8F85\u52A9\u4EE3\u7801\uFF0C\u4ECE\u800C\u4F53\u79EF\u66F4\u5C0F\u3002</li><li>\u4F7F\u7528 <code>Image Minimizer</code> \u5BF9\u9879\u76EE\u4E2D\u56FE\u7247\u8FDB\u884C\u538B\u7F29\uFF0C\u4F53\u79EF\u66F4\u5C0F\uFF0C\u8BF7\u6C42\u901F\u5EA6\u66F4\u5FEB\u3002\uFF08\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u9879\u76EE\u4E2D\u56FE\u7247\u90FD\u662F\u5728\u7EBF\u94FE\u63A5\uFF0C\u90A3\u4E48\u5C31\u4E0D\u9700\u8981\u4E86\u3002\u672C\u5730\u9879\u76EE\u9759\u6001\u56FE\u7247\u624D\u9700\u8981\u8FDB\u884C\u538B\u7F29\u3002\uFF09</li></ul><ol start="4"><li>\u4F18\u5316\u4EE3\u7801\u8FD0\u884C\u6027\u80FD</li></ol><ul><li>\u4F7F\u7528 <code>Code Split</code> \u5BF9\u4EE3\u7801\u8FDB\u884C\u5206\u5272\u6210\u591A\u4E2A js \u6587\u4EF6\uFF0C\u4ECE\u800C\u4F7F\u5355\u4E2A\u6587\u4EF6\u4F53\u79EF\u66F4\u5C0F\uFF0C\u5E76\u884C\u52A0\u8F7D js \u901F\u5EA6\u66F4\u5FEB\u3002\u5E76\u901A\u8FC7 import \u52A8\u6001\u5BFC\u5165\u8BED\u6CD5\u8FDB\u884C\u6309\u9700\u52A0\u8F7D\uFF0C\u4ECE\u800C\u8FBE\u5230\u9700\u8981\u4F7F\u7528\u65F6\u624D\u52A0\u8F7D\u8BE5\u8D44\u6E90\uFF0C\u4E0D\u7528\u65F6\u4E0D\u52A0\u8F7D\u8D44\u6E90\u3002</li><li>\u4F7F\u7528 <code>Preload / Prefetch</code> \u5BF9\u4EE3\u7801\u8FDB\u884C\u63D0\u524D\u52A0\u8F7D\uFF0C\u7B49\u672A\u6765\u9700\u8981\u4F7F\u7528\u65F6\u5C31\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0C\u4ECE\u800C\u7528\u6237\u4F53\u9A8C\u66F4\u597D\u3002</li><li>\u4F7F\u7528 <code>Network Cache</code> \u80FD\u5BF9\u8F93\u51FA\u8D44\u6E90\u6587\u4EF6\u8FDB\u884C\u66F4\u597D\u7684\u547D\u540D\uFF0C\u5C06\u6765\u597D\u505A\u7F13\u5B58\uFF0C\u4ECE\u800C\u7528\u6237\u4F53\u9A8C\u66F4\u597D\u3002</li><li>\u4F7F\u7528 <code>Core-js</code> \u5BF9 js \u8FDB\u884C\u517C\u5BB9\u6027\u5904\u7406\uFF0C\u8BA9\u6211\u4EEC\u4EE3\u7801\u80FD\u8FD0\u884C\u5728\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u3002</li><li>\u4F7F\u7528 <code>PWA</code> \u80FD\u8BA9\u4EE3\u7801\u79BB\u7EBF\u4E5F\u80FD\u8BBF\u95EE\uFF0C\u4ECE\u800C\u63D0\u5347\u7528\u6237\u4F53\u9A8C\u3002</li></ul>',10);function c(d,a){return o}var t=e(i,[["render",c],["__file","summary.html.vue"]]);export{t as default};
