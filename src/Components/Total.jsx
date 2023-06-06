import React, { useState } from 'react';
import accounting from 'accounting';
import { Button, TextField } from '@mui/material';
import { useStateValue } from '../stateProvider';
import { getBasketTotal } from '../reducer';

export default function Total() {
  const [{ basket }, dispatch] = useStateValue();

  // Actualizar la cantidad de productos y el total
  const updatedBasket = basket.map((item) => ({ ...item, quantity: item.quantity }));
  const total = getBasketTotal(updatedBasket);
  const isBasketEmpty = total === 0;

  const [shippingData, setShippingData] = useState({
    address: '',
    comentario: '',
  });

  const handleInputChange = (event) => {
    setShippingData({
      ...shippingData,
      [event.target.name]: event.target.value,
    });
  };

  const handlePayClick = (e) => {
    e.preventDefault();

    const productItems = basket
      .map((item) => `•x${item.quantity} ${item.name}`)
      .join('\n');
    const shippingCost = 200;
    const totalPrice = accounting.formatMoney(total + shippingCost, '$');
    const message = `¡Hola! Quiero encargar los siguientes productos:\n\n${productItems}\n\nTotal: ${totalPrice} (Incluyendo costo de envío)\n\nDirección de envío: ${shippingData.address};\n\nComentario: ${shippingData.comentario}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5493584405441'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <div className="root">
        {!isBasketEmpty && (
          <form onSubmit={handlePayClick} className="formtotal">
            <p className="datos">DATOS DE ENVIO</p>
            <div className="cont-form">
              <TextField
                className="field"
                type="text"
                name="address"
                label="Dirección"
                value={shippingData.address}
                onChange={handleInputChange}
                required
              />
              <TextField
                className="field"
                type="text"
                name="comentario"
                label="Comentario"
                value={shippingData.comentario}
                onChange={handleInputChange}
                required
              />
            </div>
            <h5 className="totalProductos">TOTAL DE PRODUCTOS: {basket.reduce((total, item) => total + item.quantity, 0)}</h5>
            <h5 className="totalCarrito">{accounting.formatMoney(total, '$')}</h5>
            <Button
              type="submit"
              variant="contained"
              className="btnTotal"
              style={{ backgroundColor: '#e43636' }}
            >
              Contactarse y pagar
            </Button>
          </form>
        )}
        {isBasketEmpty && (
          <Button className="pagar" variant="contained" color="secondary" disabled>
            Contactarse y pagar
          </Button>
        )}
      </div>
    </>
  );
}