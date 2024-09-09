# 多語熱更流程

* 目前只有 News 和 Mail 有需求，新增或修改多語熱更表時需依照以下規則：

1. [DynamicLocalize](https://docs.google.com/spreadsheets/d/1wSBPXRoUsoH3p4wemwc-0HxXeJzFNZ598524Z-Gfrhc/edit#gid=1159539930) 多語熱更 Setting 表位置
2. [I2Loc Infinity Localization (Dynamic)](https://docs.google.com/spreadsheets/d/17NGraaf4pjj_OeLZKC8TBeDj6XqrNCzhM7voJ3NYckE/edit#gid=0) 多語熱更 i2 表位置
3. [Digitalocean](https://cloud.digitalocean.com/spaces/pi-assets?i=b9ade9&path=Localize%2F0.0.1%2F&purgeObject=&type=) 位置

-------

### 新增步驟：

* [DynamicLocalize](https://docs.google.com/spreadsheets/d/1wSBPXRoUsoH3p4wemwc-0HxXeJzFNZ598524Z-Gfrhc/edit#gid=1159539930) 多語熱更 Setting 表：

    1. 如果沒有新增系統，則不需要變動 Setting 表
    2. 如果有新增系統，則需要更新到程式 /ProjectInfinity.Server/Json/Game/DynamicLocalize.json 中，更新方法和更新設定表相同
    3. Tab 欄位：填入和該系統 i2 名稱相同的文字
    4. Url 欄位：填入 Digitalocean 指定 i2表 網址


* [I2Loc Infinity Localization (Dynamic)](https://docs.google.com/spreadsheets/d/17NGraaf4pjj_OeLZKC8TBeDj6XqrNCzhM7voJ3NYckE/edit#gid=0) 多語熱更 i2 表：

    1. 該表的填值方法和一般的 i2 表相同
    2. 更動完後點選 [檔案>下載>.csv檔]
    3. 將下載檔案更名為與 Setting 表 上的欄位 [Url] 最後一段相同
    4. 填完數值後要更新上 [Digitalocean](https://cloud.digitalocean.com/spaces/pi-assets?i=b9ade9&path=Localize%2F0.0.1%2F&purgeObject=&type=)
    5. 原本在 Digitalocean 的檔案可以直接刪除
    6. 上傳完畢後，記得點選 [三個點點] > _**Purge from CDN Cache**_ 來刷新 CDN 快取，程式才會讀得到

--------

### 其他注意事項：

* 注意檔名需要和 Setting 表 上的欄位 Url  最後一段完全相同，如有不同的情形系統會直接讀不到

      假設 Setting 表如下：
      Tab	Url
      News	https://pi-assets.sgp1.digitaloceanspaces.com/Localize/0.0.1/news_localize.csv
      Mail	https://pi-assets.sgp1.digitaloceanspaces.com/Localize/0.0.1/mail_localize.csv

      則 Mail 系統中，熱更i2表的表名稱需為 Mail
      且 csv 檔名需為 mail_localize.csv

* Digitalocean 上傳完畢後，記得點選 [三個點點] > _**Purge from CDN Cache**_ 來刷新 CDN 快取，程式才會讀得到

* 程式會優先讀取一般 i2 表的 Key ，再讀取多語熱更 i2 表的 Key，若兩張表都有相同的 Key 時，程式會以一般 i2 表為優先

-------------

程式i2用法一樣，可以參考 Mail 和 Item 的溢出道具發信