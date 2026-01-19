import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'


const CameraRig = ({children}) => {
    const groupRef = useRef()
    const snap = useSnapshot(state)

    // set model rotation
    easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y / 10, state.pointer.x / 5, 0],
        0.25,
        0.25
    )
  return (
    <group ref={groupRef}>
        {children}
    </group>
  )
}

export default CameraRig