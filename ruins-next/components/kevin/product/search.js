import { RiSearchLine } from '@remixicon/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Search() {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [showSer, setSer] = useState(true)

  const toggleSer = () => {
    setSer(!showSer)
  }
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  return (
    <div>
      <RiSearchLine
        onClick={() => {
          toggleForm()
          toggleSer()
        }}
        className={showSer ? 'flex' : 'hidden'}
      />
      <form
        className={showForm ? 'flex' : 'hidden'}
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          router.push(`?keyword=` + e.currentTarget.keyword.value)
        }}
      >
        <input
          className="form-control me-2 p-2 bg-transparent"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="keyword"
        />
        <button class="btn btn-outline-success" type="submit">
          <RiSearchLine />
        </button>
      </form>
    </div>
  )
}
