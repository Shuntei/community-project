"# ruins-exploring"

這是與小組合作的專案  
我負責 community(社群)的部分
由於檔案大小關係,網頁僅提供社群部分操作  
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

進入頁面後  
主要有 community(公共論壇)、personal(個人頁面)兩部分，有 RWD 設計、使用線上資料庫  
右上角的 LOG IN,登入後可以執行需要權限的操作  
(如 personal 頁面新增修改文章、上傳圖片、留言、按讚、新增移除好友等)。  
※如不小心按到其他頁面，點左上選單圖示，選 community 可回到社群頁面

登入方式可以選擇:  
1.google 帳號登入  
2.另外註冊帳號  
3.使用我的帳號:johnny,密碼:283au4a83
