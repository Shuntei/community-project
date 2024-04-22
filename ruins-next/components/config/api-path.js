export const API_SERVER = "http://localhost:3001"
export const IMG_SERVER = "http://localhost:3001/img"

// signup
export const MB_SIGNUP = `${API_SERVER}/member/signup`
// login
export const MB_LOGIN = `${API_SERVER}/member/login`
// google
export const MB_GOOGLE_LOGIN = `${API_SERVER}/member/google-login`
// edit profile
export const MB_EDIT_PROFILE = `${API_SERVER}/member/edit-profile`

//商品列表
export const PRODUCT_LIST = `${API_SERVER}/product/api`

//單一商品
export const PRODUCT_ONE = `${API_SERVER}/product/api/getProduct`

//產品評論
export const PRODUCT_COMMENT = `${API_SERVER}/product/api/getProductComment`

// 新增商品評論
export const PRODUCT_COMMENT_ADD = `${API_SERVER}/product/product-comment`

// 相關商品10筆
export const PRODUCT_RELATED = `${API_SERVER}/product/api/relatedProducts`

// 購物車 - 取得會員資料
export const CART_MEMBER_INFO = `${API_SERVER}/cart/member-info`

// 購物車 - 建立訂單
export const CART_CREATEPO = `${API_SERVER}/cart/add-purchase-order`

// 購物車 - 取得訂單資料
export const CART_GETPO = `${API_SERVER}/cart/api/purchase-order`

// 購物車 - 取得訂單商品明細
export const CART_GETPODETAIL = `${API_SERVER}/cart/api/order-detail`

// 購物車 - 與 LINE Pay 串接
export const CART_LINEPAY = `${API_SERVER}/cart/createLinePayOrder` // POST

// 購物車 - 與 LINE Pay 確認訂單
export const CART_LINEPAYCONFIRM = `${API_SERVER}/cart/linePay/confirm`

// 歷史訂單 - status:全部
export const PRODUCT_MYALLPO =`${API_SERVER}/product/api/getAllPo`

// 歷史訂單 - status:訂單處理中
export const PRODUCT_MYONGOINGPO = `${API_SERVER}/product/api/getOngoingPo`

// 歷史訂單 - status:已完成
export const PRODUCT_MYCOMPLETEDPO =`${API_SERVER}/product/api/getCompletedPo`

// 揪團貼文
export const TOUR_POST =  `${API_SERVER}/tour/api`
