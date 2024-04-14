// export const API_SERVER = "http://192.168.35.200:3001";
const port = 3005 || 3002 //3002備用 與server相同
export const API_SERVER = `http://localhost:${port}/community`
//localhost:3005/johnny/posts
// 取得列表資料
export const SN_POSTS = `${API_SERVER}/posts`

export const SN_PSPOSTS = `${API_SERVER}/personal/posts`

export const SN_BOARDS = `${API_SERVER}/boards`

export const SN_ADD_POST = `${API_SERVER}/psadd`

//方法delete, `${API_SERVER}/${post_id}`
export const SN_DELETE_POST = `${API_SERVER}`

// // `${API_SERVER}/${postId}`, 方法: PUT
export const SN_EDIT_POST = `${API_SERVER}/edit`

// // 新增資料 POST
// export const AB_ADD_POST = `${API_SERVER}/address-book/add`;
// // 刪除單筆
// // `${AB_DELETE}/${sid}`, 方法: DELETE
// export const AB_DELETE = `${API_SERVER}/address-book`;

// // 讀取單筆
// // `${AB_ITEM}/${sid}`, 方法: GET
// export const AB_ITEM = `${API_SERVER}/address-book`;

// // 修改單筆
// // `${AB_EDIT_PUT}/${sid}`, 方法: PUT
// export const AB_EDIT_PUT = `${API_SERVER}/address-book/edit`;

// // JWT 登入, 方法: POST, 欄位: account, password
// export const JWT_LOGIN_POST = `${API_SERVER}/login-jwt`;

// // 加入或移除喜愛項目
// // `${AB_LIKE}/${sid}`, 方法: GET
// export const AB_LIKE = `${API_SERVER}/address-book/toggle-like`;
