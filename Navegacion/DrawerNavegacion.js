import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const DrawerNavegacion = (props) => {
  return (
    <DrawerContentScrollView {...props} >
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default DrawerNavegacion