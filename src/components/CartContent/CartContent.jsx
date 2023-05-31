import React from 'react'
import {useContext} from 'react';
import {AppContext} from '../../context/useContext';
import {CartElements} from './CartElements'

export const CartContent = () => {
  const {data} = useContext(AppContext)

  return (
    <>
      <CartElements/>
    </>
  )
}

