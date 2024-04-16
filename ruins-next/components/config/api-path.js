export const API_SERVER = "http://localhost:3001"

// signup
export const MB_SIGNUP = `${API_SERVER}/member/signup`
// login
export const MB_LOGIN = `${API_SERVER}/member/login`
// google
export const MB_GOOGLE_LOGIN = `${API_SERVER}/member/google-login`
// get profile info
export const MB_PROFILE_INFO = `${API_SERVER}/member/profile-data`

//商品列表
export const PRODUCT_LIST = `${API_SERVER}/product/api`

//單一商品
export const PRODUCT_ONE = `${API_SERVER}/product/api/getProduct`

//產品評論
export const PRODUCT_COMMENT = `${API_SERVER}/product/api/getProductComment`

// 相關商品10筆
export const PRODUCT_RELATED = `${API_SERVER}/product/api/relatedProducts`

// 購物車 - 取得會員資料
export const CART_MEMBER_INFO = `${API_SERVER}/cart/member-info`

// 購物車 - 建立訂單
export const CART_CREATEPO = `${API_SERVER}/cart/add-purchase-order`
