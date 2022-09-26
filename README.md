# xOpti

## 2022.09.27

[EntityFrameworkCore.Jet](https://github.com/bubibubi/EntityFrameworkCore.Jet)

用嚟讀 AccDb database，不過由於佢官方版本淨係去到 3.1.1，為咗要配合 [Scaffold-DbContext](https://www.entityframeworktutorial.net/efcore/create-model-for-existing-database-in-ef-core.aspx) 所以我要首先 create project as 3.x，run 完 Scaffold-DbContext，gen 哂啲檔案，然後先將個 project 升級去 6.x，而且改為 [Unofficial EF Core 6 support](https://github.com/bubibubi/EntityFrameworkCore.Jet/issues/111)。過程間為咗減少打錯 command line syntax 我借用呢隻傢伙：[ScaffoldDbContextHelper](https://github.com/karenpayneoregon/ScaffoldDbContextHelper) ([介紹文章](https://social.technet.microsoft.com/wiki/contents/articles/53258.windows-forms-entity-framework-core-reverse-engineering-databases.aspx?fbclid=IwAR3AJK-vxEfKLnA-9-jinLHw9MKWAggM-zqW5vobhH1za_703bGyy2sBNEU))。
