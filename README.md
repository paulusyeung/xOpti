# xOpti

A point-of-sale system for optical retail shop.

## Intro

當初係叫 SynergyV，用 Visual Basic 寫嘅 Windows App，從此叫 xOpti，用 Visual Studio 2022 C# 重寫為 Web App。

原本嘅數據庫係用 Access MDB，依家有兩種選擇：

* 照舊用 MDB
  
  好處係之前嘅 Visual Basic 寫嘅 program 可以照用，慢慢升級。

* PostgreSQL
  
  好處係唔會爆 2GB Size Limit，唔好嘅地方係要寫 data migration。

## Tools/ Packages

[EntityFrameworkCore.Jet](https://github.com/bubibubi/EntityFrameworkCore.Jet)

用嚟讀 AccDb database　(亦可以用 System.Data.OleDb [Read Microsoft Access Database in C#](https://www.c-sharpcorner.com/article/read-microsoft-access-database-in-C-Sharp/))，不過由於佢官方版本淨係去到 3.1.1，為咗要配合 [Scaffold-DbContext](https://www.entityframeworktutorial.net/efcore/create-model-for-existing-database-in-ef-core.aspx) 所以我要首先 create project as Core 3.x，run 完 Scaffold-DbContext，gen 哂啲檔案，然後先將個 project 升級去 Core 6.x，而且改為 [Unofficial EF Core 6 support](https://github.com/bubibubi/EntityFrameworkCore.Jet/issues/111)。過程間為咗減少打錯 command line syntax 我借用呢隻傢伙：[ScaffoldDbContextHelper](https://github.com/karenpayneoregon/ScaffoldDbContextHelper) ([介紹文章](https://social.technet.microsoft.com/wiki/contents/articles/53258.windows-forms-entity-framework-core-reverse-engineering-databases.aspx?fbclid=IwAR3AJK-vxEfKLnA-9-jinLHw9MKWAggM-zqW5vobhH1za_703bGyy2sBNEU))。

[Access To PostgreSQL](https://www.bullzip.com/products/a2p/info.php)

用嚟將 AccDb (mdb) convert 做 PostgreSQL，我順手試埋佢哋隻 Access to MySQL，兩隻都 OK。要留意嘅係佢唔處理 ForeignKeys，對我嚟講係最好不過！

## API

* #### RESTful
  
  傳統方式，可以十拿九穩。

* #### GraphQL
  
  代替 RESTful，玩下新嘢。
  
  　

## [Sakia-Vue](https://github.com/primefaces/sakai-vue)

免費嘅 Vue Admin Template，用嚟寫 Web App，全 client side，可以做埋 mobiles + tablets。不過仲未搞清楚點樣用佢嘅 [Locale](https://www.primefaces.org/primevue/locale) 嚟做 Internationalization，佢充就話包咗 [PrimeLocale](https://github.com/primefaces/primelocale)，仲話可以混合 [i18n](https://peaku.co/questions/2181-%C2%BFcomo-utilizar-la-integracion-de-primevue-i18n)，但係都唔明點用？
