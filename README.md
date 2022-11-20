# xOpti

A point-of-sale system for optical retail shop.

## Intro

當初係叫 SynergyV，用 Visual Basic 5 寫嘅 Windows App，從此叫 xOpti，用 Visual Studio 2022 C# 重寫為 Web App。

原本嘅數據庫係用 Access MDB，依家有兩種選擇：

* 照舊用 MDB
  
  好處係之前嘅 Visual Basic 寫嘅 program 可以照用，慢慢升級。

* PostgreSQL
  
  好處係唔會爆 2GB Size Limit，唔好嘅地方係要寫 data migration 俾啲舊客。

## Tools/ Packages

[EntityFrameworkCore.Jet](https://github.com/bubibubi/EntityFrameworkCore.Jet)

用嚟讀 AccDb database (亦可以用 System.Data.OleDb [Read Microsoft Access Database in C#](https://www.c-sharpcorner.com/article/read-microsoft-access-database-in-C-Sharp/))，不過由於佢官方版本淨係去到 3.1.1，為咗要配合 [Scaffold-DbContext](https://www.entityframeworktutorial.net/efcore/create-model-for-existing-database-in-ef-core.aspx) 所以我要首先 create project as Core 3.x，run 完 Scaffold-DbContext，gen 哂啲檔案，然後先將個 project 升級去 Core 6.x，而且改為 [Unofficial EF Core 6 support](https://github.com/bubibubi/EntityFrameworkCore.Jet/issues/111)。

過程間為咗減少打錯 command line syntax 我借用呢隻傢伙：[ScaffoldDbContextHelper](https://github.com/karenpayneoregon/ScaffoldDbContextHelper) ([介紹文章](https://social.technet.microsoft.com/wiki/contents/articles/53258.windows-forms-entity-framework-core-reverse-engineering-databases.aspx?fbclid=IwAR3AJK-vxEfKLnA-9-jinLHw9MKWAggM-zqW5vobhH1za_703bGyy2sBNEU))。

如果後期要改動個 database 設計，就要重做一次，非常唔化算，結論係，盡量唔好用 AccDb，又或者淨係用嚟做 migration。

[Scaffold-DbContext](https://www.entityframeworktutorial.net/efcore/create-model-for-existing-database-in-ef-core.aspx)

用嚟 gen 啲 models

[dotnet-aspnet-codegenerator](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/tools/dotnet-aspnet-codegenerator)

用嚟 gen 啲 controllers，有兩篇 articles 值得參考：

* [Building REST APIs with .NET 5, ASP.NET Core, and PostgreSQL | End Point Dev](https://www.endpointdev.com/blog/2021/07/dotnet-5-web-api/#table-of-contents) 

* [如何使用 .NET CLI 快速產生 ASP․NET Core 的 Controllers 與 Views 程式碼](https://blog.miniasp.com/post/2020/09/09/Create-Controller-and-Views-with-dotnet-aspnet-codegenerator)

[Access To PostgreSQL](https://www.bullzip.com/products/a2p/info.php)

用嚟將 AccDb (mdb) convert 做 PostgreSQL，我順手試埋佢哋隻 [Access To MySQL](https://www.bullzip.com/products/a2m/info.php)，兩隻都 OK。要留意嘅係佢會搞 Tables 同 Queries (Views) 不過就唔處理 ForeignKeys，唔理 ForeignKeys 對我嚟講係最好不過！

[DbSchema](https://dbschema.com/)

用嚟 design 個 database，佢有個 Community Edition 係免費嘅。

[Hot Chocolate](https://chillicream.com/docs/hotchocolate)

用嚟搞 GraphQL API

## API

* #### RESTful
  
  傳統方式，可以十拿九穩。參考：[Building REST APIs with .NET 5, ASP.NET Core, and PostgreSQL](https://www.endpointdev.com/blog/2021/07/dotnet-5-web-api/)

* #### GraphQL
  
  代替 RESTful，玩下新嘢。　

差開一筆，Github 有隻搞 WebApi 嘅 code generator：[CodeGenerator3](https://github.com/capesean/codegenerator3)，有文有路，有時間嘅話可以參考一下。

## [Vue-Pure-Admin](https://github.com/xiaoxian521/vue-pure-admin)

```context
是一个免费开源的中后台模版。使用了最新的 vue3 vite2 Element-Plus TypeScript 等
主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。
```

首先，佢係國內網友開發的，担心會結構混亂，不過睇咗佢嘅 Docs，好用心寫，Github Issues 又好認真回應，又持續更新，我投佢一票；其次，佢用 TypeScript，我唔喜歡 Microsoft 用嚟搞局嘅 TypeScript，不過，Vue3 都落重注喺 TypeScript，我既然想用 Vue3，唯有照跟。

用咗佢嘅 [國際化精簡版](https://github.com/xiaoxian521/pure-admin-thin/tree/i18n)。

簡化版要增加 menu items 可以參考這篇文章：[第八天 把喜歡的vue-pure-admin頁面 加到 pure-admin-thin {{實戰}} - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10296371)。
