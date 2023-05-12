### Access Token & Refresh Token 範例
處理曾與先前單一 token 是差不多的，需要注意的是 error handle 的後續處理，這部分就要看不同的專案後續處理來做微調了！  
- UI部分使用mantine library Ver.5 這部分請至[連結](https://v5.mantine.dev/)。  
- 路徑整理方式已經放在pages/RoutesConfig裡面了，不清楚怎麼使用的話可以參考我的教學文章。  
- 在主頁面下的結構都放在pages/Root裡面，所以對於登入狀態判定也應該從這裡往下延伸。  
- 大部分的type interface統一放在src/typings.d.ts 資料夾內，為常規typescript的寫法。  
- features內為redux相關的檔案，有將rtk-query的資料與slice的資料做分開，以便新手可以快速進入狀況，這部分不懂的話可以參考我[IT邦鐵人賽系列文章](https://ithelp.ithome.com.tw/users/20129020/ironman/5360)。  
- features/apis內的作法採注入式的方式分離不同類別的apis，新手的話可以直接按照規則往下延伸。  
- pages/Configs內的檔案為客製化的error/wraning... page，可視專案需求而做調整。  
- components內的組件應當為共用組件，簡單理解為跨頁面共用組件。  

