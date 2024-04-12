import React, { useRef, useState } from 'react'
import Image from 'next/image'

export default function Test() {
  // photosField.addEventListener("change", (e) => {
  // 如果用戶沒有選擇任何檔案, 就不往下執行
  const [aFiles, setAFiles] = useState([])
  const formRefs = useRef(null)

  const changeFile = () => {
    // if (aFiles.files.length < 1) {
    //   return;
    // }
    const fd = new FormData(formRefs.current)
    console.log(fd)

    fetch('http://localhost:3005/johnny/try-uploads', {
      method: 'POST',
      body: fd,
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setAFiles(data)
      })
  }

  return (
    <div>
      <form ref={formRefs}>
        {/*name="form1"*/}
        <input
          type="file"
          multiple
          accept="image/png,image/jpeg"
          name="photos"
          onChange={changeFile}
        />
        <button type="submit" className="bg-sky-400 text-white">
          send
        </button>
      </form>
      <div className="container">
        {aFiles.map(({ filename }, i) => {
          const aFilename = `http://localhost:3005/johnny/img/${filename}`
          // const aFilename = `/johnnyImg/${filename}`

          return (
            <div style="display: inline-block;" key={i}>
              <Image
                src={aFilename}
                width={300}
                height={300}
                // style="width: 200px;"
                alt=""
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
