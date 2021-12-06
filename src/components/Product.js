import React, { useState } from 'react'
import toBrazilianPrice from '../services/brazilianPrice';
import titleMaxLength from '../services/titleMaxLength';
import checkedImg from '../images/Vector.svg'
import './Product.css'
import { toast } from 'react-toastify';



function Product({productInfo}) {
  const [checked, setChecked] = useState(false)

  const handleAddProduct = (event) => {
    event.preventDefault();

    if(event.target.classList.length === 1){
      toast.success('🛒❤️Adicionado ao carrinho 🛍️')
    } else {
      toast.warning('🙁 Removido do carrinho')
    }

    event.target.classList.toggle("added-to-cart")
    setChecked(prevState => !prevState)
  }

  const handleAddWishlist = (event) => {
    event.preventDefault();
    switch (event.target.nodeName) {
      case 'BUTTON':
        event.target.classList.toggle("wishlist")
        if(event.target.classList.length === 2){
          toast.success('🎉 Adicionado a lista de desejos')
        } else {
          toast.warning('🙁 Removido da lista de desejos')
        }
        break;
      case 'svg':
        event.target.parentNode.classList.toggle("wishlist")
        if(event.target.parentNode.classList.length === 2){
          toast.success('🎉 Adicionado a lista de desejos')
        } else {
          toast.warning('🙁 Removido da lista de desejos')
        }
        break;
      case 'path':
        event.target.parentNode.parentNode.classList.toggle("wishlist")
        if(event.target.parentNode.parentNode.classList.length === 2){
          toast.success('🎉 Adicionado a lista de desejos')
        } else {
          toast.warning('🙁 Removido da lista de desejos')
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="product">
      <div className="image-area">
        <img src={productInfo.thumbnail} alt={productInfo.title}/>
        <button className="hearth-container" type="submit" onClick={handleAddWishlist}>
          <svg className="hearth" width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="hearth-path" d="M23.1494 2.85655C22.5629 2.26797 21.8667 1.80107 21.1003 1.48251C20.334 1.16396 19.5126 1 18.6831 1C17.8535 1 17.0321 1.16396 16.2658 1.48251C15.4994 1.80107 14.8032 2.26797 14.2167 2.85655L12.9997 4.07749L11.7826 2.85655C10.5981 1.66822 8.99152 1.00062 7.31633 1.00062C5.64114 1.00062 4.03455 1.66822 2.85001 2.85655C1.66547 4.04489 1 5.65662 1 7.33718C1 9.01774 1.66547 10.6295 2.85001 11.8178L4.06705 13.0387L12.9997 22L21.9323 13.0387L23.1494 11.8178C23.7361 11.2295 24.2015 10.531 24.519 9.76219C24.8366 8.99339 25 8.16936 25 7.33718C25 6.50499 24.8366 5.68096 24.519 4.91216C24.2015 4.14336 23.7361 3.44486 23.1494 2.85655Z" fill="#F2F3F6" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="title-area">
        <h3>{titleMaxLength(productInfo.title)}</h3>
      </div>
      <div className="price-area">
        <span className="for-sale">R$ {toBrazilianPrice(productInfo.price)}</span>
        <span className="on-sale">R$ {toBrazilianPrice(productInfo.original_price)}</span>
        <p className="installment-payment">
          em até <span>10x de R$ {toBrazilianPrice(productInfo.price/10)}</span> sem juros
        </p>
      </div>
      <button className="add" type="submit" onClick={handleAddProduct}>
        {checked && <img src={checkedImg} alt="Sinal de marcado"/>}
        ADICIONAR
      </button>
    </div>
  )
}

export default Product;