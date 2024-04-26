import React from 'react'
import TestA from '@/components/ellie/three/test-a'
// import TestB from '@/components/ellie/three/test-b'
import TestC from '@/components/ellie/three/test-c'
import AvatarPicker from '@/components/ellie/three/AvatarPicker'
import TestB from '@/components/ellie/three/test-b'
import { useAuth } from '@/contexts/auth-context';

export default function ThreeIndex() {
  // const {auth} = useAuth()
  // const memberid = auth.id
  // useEffect(() => {
  //   if (memberid) {
  //   } else {
  //     router.push('/member/account/login')
  //   }
  // }, [memberid])
  return (
    <>
      <TestC />
    </>
  )
}
