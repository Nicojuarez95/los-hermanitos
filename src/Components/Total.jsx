import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'
import { useStateValue } from '../stateProvider';
import { getBasketTotal } from '../reducer';

export default function Total() {
  const [{basket}, dispatch] = useStateValue()

  const pagar = () =>{
    console.log(basket)
  }
  return (
    <div className="root">
        <h5> Total de productos: {basket?.length}</h5>
        <h5> {accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
        <Button className='pagar' variant='contained' color='secondary' onClick={pagar}>Pagar</Button>
    </div>
  )
}
