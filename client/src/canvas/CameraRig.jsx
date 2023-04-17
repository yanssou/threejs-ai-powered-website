import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'

// comme notre composant CameraRig a un enfant, on peut utiliser la prop children afin de pouvoir l'afficher
const CameraRig = ({ children }) => {

  const group = useRef()
  const snap = useSnapshot(state)

  useFrame((state, delta) => {

    // on s'assure que le tshirt ait une taille adaptee a la hauteur de l'ecran (responsive)
    const isBreakpoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    // initialisation de la position initiale du modele
    let targetPosition = [-0.4, 0, 2]
    if(snap.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 2]
      if(isMobile) targetPosition = [0, 0.2, 2.5]
    } else {
      if(isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2]
    }

    // mise en place de la position de la camera du modele
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    // mise en place de la rotation du modele
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })

  return (
    <group ref={group}>{children}</group>
  )
}

export default CameraRig