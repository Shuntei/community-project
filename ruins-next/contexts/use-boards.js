import { SN_POSTS, SN_BOARDS } from '@/components/johnny/config/api-path'
import { createContext, useContext, useState } from 'react'
import React from 'react'

const BoardsContext = createContext()

export default function BoardsContextProvider({ children }) {
  const [boards, setBoards] = useState([])
  const [selectedPosts, setSelectedPosts] = useState({
    success: false,
    page: 0,
    selectedBdPostsRows: [],
    totalPages: 0,
    boardId: 0,
  })
  const [postsList, setPostsLists] = useState({
    success: false,
    page: 0,
    totalPostsRows: [],
    totalPages: 0,
  })
  const [getPost, setGetPost] = useState([])
  const [render, setRender] = useState(false)
  {
    /*render, setRender用於解決新增及刪除post等變更時不刷新頁面useEffect依賴 */
  }

  // 初始載入posts, 預設第一頁用於點全部按鈕
  const allPostsShow = async (currentPage = '?page=1') => {
    // currentPage是?page=哪一頁
    try {
      const r = await fetch(`${SN_POSTS}${currentPage}`)
      const data = await r.json()
      setPostsLists(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handlePage = async (p) => {
    try {
      const r = await fetch(`${SN_POSTS}?page=${p}`)
      const data = await r.json()
      setPostsLists(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handlePostId = async (postId) => {
    try {
      const r = await fetch(`${SN_POSTS}?postId=${postId}`)
      //   const r = await fetch(`${SN_POSTS}/${postId}`);
      const data = await r.json()
      setGetPost(data)
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleBdPosts = async (boardId) => {
    const r = await fetch(`${SN_BOARDS}/${boardId}`)
    const data = await r.json()
    if (data) {
      setPostsLists(false)
    }
    setSelectedPosts({ ...data, boardId: boardId })
  }

  const handleBdPostsPage = async (p) => {
    const r = await fetch(`${SN_BOARDS}/${selectedPosts.boardId}?page=${p}`)
    const data = await r.json()
    if (data) {
      setPostsLists(false)
    }
    setSelectedPosts({ ...data, boardId: selectedPosts.boardId })
  }

  return (
    <BoardsContext.Provider
      value={{
        boards,
        setBoards,
        selectedPosts,
        setSelectedPosts,
        postsList,
        setPostsLists,
        allPostsShow,
        getPost,
        setGetPost,
        handlePostId,
        handlePage,
        handleBdPosts,
        handleBdPostsPage,
        render,
        setRender,
      }}
    >
      {children}
    </BoardsContext.Provider>
  )
}

export const useBoards = () => useContext(BoardsContext)
