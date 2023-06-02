import React from 'react'
import {useContext} from 'react';
import {AppContext} from '../../context/useContext';
import {CartElements} from './CartElements'
import { CartTotal } from './CartTotal';

export const CartContent = () => {
  const {data} = useContext(AppContext)

  return (
    <>
      <CartElements/>
      <CartTotal/>
    </>
  )
}

