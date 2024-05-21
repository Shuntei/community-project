import { API_SERVER, IMG_SERVER } from '@/components/config/api-path'
import { useAuth } from '@/contexts/auth-context'
import useStreamInfo from '@/contexts/use-streamInfo'
import useToggle from '@/contexts/use-toggle-show'
import { socket } from '@/nosrc/socket'
import { RiArrowRightSFill } from '@remixicon/react'
import { useRouter } from 'next/router'
import { Peer } from 'peerjs'
import { useEffect, useRef, useState } from 'react'

export default function Stream() {
  const { auth } = useAuth()
  const router = useRouter()
  const { streamTitle, streamDesciption } = useStreamInfo()
  const [streamRoom, setStreamRoom] = useState('')
  const {
    streamId,
    setStreamId,
    role,
    setRole,
    viewerId,
    setViewerId,
    roomCode,
    setRoomCode,
    vSocketId,
    setVSocketId,
    joinRoom,
    setJoinRoom,
    streamerName,
    setStreamerName,
    haveStream,
    setHaveStream,
  } = useToggle()
  const localVidsRef = useRef(null)
  const remoteVidsRef = useRef(null)
  const peer = useRef()

  // console.log({ streamerName });

  useEffect(() => {
    if (router.isReady) {
      const room = router.query.streamerPath
      setStreamRoom(room)
      const newRole = room ? 'isStreamer' : 'isViewer'
      setRole(newRole)
      createPeer(newRole)
    }
  }, [router.isReady, router.query.streamerPath])

  const createPeer = async (role) => {
    if (!peer.current) {
      peer.current = new Peer()
      peer.current.on('open', (id) => {
        console.log(`我的PeerID是${id}`)
        console.log(`我的身份是${role}`)
        socket.emit('check-role', id, role)
      })

      socket.on('streamerStart', async (id) => {
        setStreamId(id)
        setRoomCode(id)

        setStreamerName(auth.username)
        if (auth.username) {
          socket.emit('streamerName', auth.username, id)
        }

        await fetch(`${API_SERVER}/chat/stream-logon`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            streamId: id,
            streamerName: auth.username,
          }),
        })
      })

      socket.on('viewerGo', (id, sId) => {
        setViewerId(id)
        setVSocketId(sId)
      })

      if (role === 'isStreamer') {
        await fetch(`${API_SERVER}/chat/check-avail`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            avail: 'full',
          }),
        })

        socket.emit('setTitle', streamTitle, streamDesciption)
        socket.emit('joinRoom', roomCode)
        navigator.mediaDevices
          .getUserMedia({
            video: {
              facingMode: 'user',
            },
            audio: true,
          })
          .then((stream) => {
            localVidsRef.current.srcObject = stream
            localVidsRef.current.play()
            localVidsRef.current.muted = true

            peer.current.on('call', (call) => {
              call.answer(stream)
            })
          })
      }
    }
  }

  const calling = async () => {
    try {
      const r = await fetch(`${API_SERVER}/chat/watch-stream`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await r.json()
      setRoomCode(data[0].stream_code)
      setStreamId(roomCode)
    } catch (err) {
      console.log('沒有抓到資料')
    }
  }

  useEffect(() => {
    calling()
  })

  const callStreamer = async () => {
    if (!peer.current || !streamId || !viewerId) {
      console.error(`有空值 -> Peer: ${peer.current}, streamId: ${streamId}`)
      return
    } else {
      socket.emit('joinRoom', roomCode)
      socket.emit(
        'userEnter',
        {
          name: auth.id ? auth.username : '探險家',
          viewerId: viewerId,
          socketId: vSocketId,
          image: !auth.id
            ? '/images/adventure.png'
            : auth.googlePhoto
              ? auth.profileUrl
              : `${IMG_SERVER}/${auth.profileUrl}`,
        },
        roomCode
      )
      setJoinRoom(true)
    }

    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: 'environment',
        },
        audio: true,
      })
      .then((stream) => {
        localVidsRef.current.srcObject = stream
        localVidsRef.current.play()

        const call = peer.current.call(streamId, stream)

        if (!call) {
          console.log(`叫不到主播 ${streamId}`)
          return
        }

        call.on('stream', (stream) => {
          remoteVidsRef.current.srcObject = stream
          remoteVidsRef.current.play()
        })
      })
  }

  return (
    <>
      {role === 'isViewer' && (
        <div>
          <div
            className={`text-black flex absolute right-20 top-10 animate-bounce font-medium text-xl ${joinRoom ? 'hidden' : ''} `}
          >
            點擊連線主播
            <RiArrowRightSFill className="h-4 mt-1.5"></RiArrowRightSFill>
          </div>
          <div
            className="absolute right-10 z-50 top-9 flex gap-3 mb-3 items-center cursor-pointer hover:scale-125 transition-all duration-300 max-md:z-50 max-md:left-3 max-md:top-3"
            onClick={callStreamer}
          >
            <img
              src="/images/radio.png"
              className={`bg-white rounded-full p-1 h-[34px] ${joinRoom ? '' : 'grayscale'}`}
            />
          </div>
        </div>
      )}
      <div
        id="stream-block"
        className=" bg-black w-full flex flex-col mt-2 mb-2 max-h-[75vh] max-md:mt-10"
      >
        {role === 'isStreamer' ? (
          <>
            <video
              ref={localVidsRef}
              className={`aspect-video object-contain max-h-[75vh]`}
              controls
              autoPlay
              playsInline
            ></video>
          </>
        ) : (
          <>
            <video
              ref={localVidsRef}
              className={`aspect-video object-contain max-h-[75vh]`}
              controls
              autoPlay
              playsInline
              muted
              hidden
            ></video>
            <video
              ref={remoteVidsRef}
              className={`aspect-video object-contain max-h-[75vh]`}
              controls
              autoPlay
              playsInline
            ></video>
          </>
        )}
      </div>
    </>
  )
}
