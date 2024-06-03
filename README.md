"# ruins-exploring"

這是與小組合作的專案  
Vercel連結: https://community-project-frontend.vercel.app/community/main-page  
(由於線上資料庫關係，載入時需稍等幾秒)  

我負責 community(社群)的部分  
完成用戶追蹤與取消追蹤功能，使得不同帳號登入後可以透過判斷顯示符合該帳號的的追蹤列表、被追蹤列表。  

資料夾或檔案位置:  
前端  
ruins-next/components/johnny  
ruins-next/contexts/use-boards.js  
ruins-next/contexts/use-toggles.js  
ruins-next/pages/community  
後端  
ruins-node/routes/johnny  
ruins-node/utils/johnny/upload-imgs.js

1.下載檔案後分別進入 ruins-next 和 ruins-node 檔案位置並執行 npm i  
2.在 ruins-node 執行 npm run dev,在 ruins-next 執行 npm run build 後,執行 npm start  
3.輸入網址: http://localhost:3000/community/main-page 進入頁面

頁面操作方式  
主要有 community(公共論壇)、personal(個人頁面)兩部分，有 RWD 設計、使用線上資料庫(速度較慢，載入及操作時需稍等幾秒)    
(若要使用本地端資料庫，位置: community-project/ruins-node/data_base/ruins_final.sql，且需將production.env改成符合本地端的內容)  
右上角的 LOG IN,登入後可以執行需要權限的操作  
(如 personal 頁面新增修改文章、上傳圖片、留言、按讚、新增移除好友等)。  

登入方式: 
帳號:johnny
密碼:283au4a83
