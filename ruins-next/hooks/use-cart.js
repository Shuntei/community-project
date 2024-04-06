import { createContext, useContext, useState } from 'react'
import Swal from 'sweetalert2';

// 1. 建立context
const CartContext = createContext(null)

// 2. 建立一個Context Provider元件
// 提供給最上層元件(_app.js)使用，把所需狀態都在這元件集中管理
export function CartProvider({ children }) {
  // 加入購物車的商品項目
  // 和products的物件相比會多了一個qty(數量)數字屬性

  // const sampleItems = [
  //   {
  //     pid: 1,
  //     sn: "09fdab8a-6185-4484-8bea-c47d85647d8b",
  //     name: "Modern Frozen Salad - PUMA 慢跑鞋",
  //     photos: "t5.jpg,t4.jpg,t1.jpg",
  //     stock: 90,
  //     price: 1600,
  //     info: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
  //     brand_id: 3,
  //     cat_id: 9,
  //     color: "2,3,4,1",
  //     tag: "2,1",
  //     size: "3,4,1,2",
  //     qty: 1,
  //   },
  //   {
  //     pid: 2,
  //     sn: "da94bfac-49e7-490e-b02b-7412e5942d0c",
  //     name: "Ergonomic Granite Bike - New Balance 長袖上衣",
  //     photos: "t4.jpg,t5.jpg,t1.jpg",
  //     stock: 20,
  //     price: 6900,
  //     info: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  //     brand_id: 4,
  //     cat_id: 6,
  //     color: "1,4,3,2",
  //     tag: "2",
  //     size: "3",
  //     qty: 2,
  //   },
  // ];

  const [items, setItems] = useState([])

  // 純函式: 單純改變狀態的陣列 --- START ---
  // 商品數量(qty)遞增的函式
  const increase = (items, id) => {
    return items.map((v, i) => {
      // 如果id是傳入的id則qty屬性+1
      if (v.pid === id) return { ...v, qty: v.qty + 1 }
      else return v
    })
  }

  // 商品數量(qty)遞減的函式
  const decrease = (items, id) => {
    return items.map((v, i) => {
      // 如果id是傳入的id則qty屬性-1
      if (v.pid === id) return { ...v, qty: v.qty - 1 }
      else return v
    })
  }

  // 刪除函式
  const remove = (items, id) => {
    return items.filter((v, i) => v.id !== id)
  }





 // 加入購物車後要將item設定進去items
 const addItem = (item) => {
  // 檢查是否存在: 用 findIndex，沒找到會回傳-1
  const index = items.findIndex((v, i) => {
    return v.sid === item.sid
  })

  // 如果有找到，如果沒找到就會往下跑
  if (index > -1) {
    // 數量+1
    increment(items, item.sid)
    Swal.fire({
      toast: true,
      width: 280,
      position: 'top',
      icon: 'success',
      title: '商品已添加到購物車',
      showConfirmButton: false,
      timer: 1500,
    })
    return // 跳出函式
  }

  // 擴充: 原本商品資料物件中沒有數量(qty)
  const newItem = { ...item, qty: 1, subtotal: item.product_price }

  Swal.fire({
    toast: true,
    width: 280,
    position: 'top',
    icon: 'success',
    title: '商品已添加到購物車',
    showConfirmButton: false,
    timer: 1500,
  })

  // 通用三步驟: 展開後值接設定進去
  setItems([...items, newItem])

}

const addMutiItem = (item) => {
  const { qty, ...remain } = item
  console.log(item)
  const index = items.findIndex((v, i) => v.sid === item.sid)

  if (index > -1) {
    const newQty = items[index].qty + qty
    if (newQty > item.stock) {
      Swal.fire({
        toast: true,
        width: 350,
        position: 'top',
        icon: 'warning',
        iconColor: '#ff804a',
        title: '您已將所有庫存加入購物車',
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }

    setItems((prevItems) => {
      const newItems = prevItems.map((v, i) =>
        v.sid === item.sid
          ? { ...v, qty: newQty, subtotal: item.product_price * newQty }
          : v
      )

      return newItems
    })

    Swal.fire({
      toast: true,
      width: 280,
      position: 'top',
      icon: 'success',
      title: '商品已添加到購物車',
      showConfirmButton: false,
      timer: 1500,
    })
    return
  }

  const newItem = { ...item, qty: qty, subtotal: item.product_price * qty }

  Swal.fire({
    toast: true,
    width: 280,
    position: 'top',
    icon: 'success',
    title: '商品已添加到購物車',
    showConfirmButton: false,
    timer: 1500,
  })

  setItems([...items, newItem])

}






  // 新增商品到購物車的函式
  // product是傳入的商品物件, product.id是要加入的商品物件的id
  const add = (items, product) => {
    // 先判斷這個商品是否有在購物車裡
    const foundIndex = items.findIndex((v) => v.pid === product.pid)

    if (foundIndex > -1) {
      // 如果有找到 ==> 遞增
      return increase(items, product.pid)
    } else {
      // 如果沒找到 ==> 新增商品
      // !!注意: 需要擴增商品物件多一個qty(數量)數字屬性
      const newItem = { ...product, qty: 1 }
      return [...items, newItem]
    }
  }
  
  // 純函式: 單純改變狀態的陣列 --- END ---

  // 事件處理函式: 包含狀態更動共通三個步驟 --- START ---
  const onAddItem = (product) => {
    setItems(add(items, product))
  }

  const onIncreaseItem = (id) => {
    setItems(increase(items, id))
  }

  // 遞減時需考慮數量為0要移除
  const onDecreaseItem = (id) => {
    let nextItems = decrease(items, id)
    // 刪除(過濾)掉商品數量<=0的
    nextItems = nextItems.filter((v) => v.qty > 0)

    setItems(nextItems)
  }

  const onRemoveItem = (id) => {
    setItems(remove(items, id))
  }
  // 事件處理函式: 包含狀態更動共通三個步驟 --- END ---

  // const calcTotalItems = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty
  //   }
  //   return total
  // }

  // const calcTotalPrice = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty * items[i].price
  //   }
  //   return total
  // }

  // 陣列迭代方法 reduce(累加/歸納)
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const totalItems = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  return (
    <CartContext.Provider
      // 使用value屬性提供資料給提供者階層以下的所有後代元件
      value={{
        items,
        totalItems,
        totalPrice,
        onAddItem,
        onDecreaseItem,
        onIncreaseItem,
        onRemoveItem,
        addMutiItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 3. 提供一個包裝好useContext名稱，給消費者(Consumer)方便地直接呼叫使用
export const useCart = () => useContext(CartContext)