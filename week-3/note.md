# 拆解的流程進行開發

- 切版
- 登入功能

1. 取得 HTML username,password
2. 發出請求

- 進入產品頁面

1. get
2. post
3. delete
4. put:編輯和新增的內容基本相同，因此 modal 基本上不用更改(isNew)
5. bootstrap modal->才可新增與編輯
6. 多圖設置:判斷
   if-新增
   欄位是有填寫資料時新增
   如果是空的時候
   else-刪除
   當是空的時候就不能刪除

驗證流程是正確的

- 列出品項內容
- 細節呈現
