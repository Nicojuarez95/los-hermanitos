import React from 'react'
import accounting from 'accounting'
import { Button } from '@mui/material'

export default function Total() {
  return (
    <div className="root">
        <h5> Total de productos: 3</h5>
        <h5> {accounting.formatMoney(50, "$")}</h5>
        <Button className='pagar' variant='contained' color='secondary'>Pagar</Button>
    </div>
  )
}
