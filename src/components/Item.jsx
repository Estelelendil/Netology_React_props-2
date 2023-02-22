import React from 'react';

function chooseColorClass(quantity){
  if(quantity<10){
      return 'low';
    }
      else if(quantity>20){
        return 'high'
      }else{
        return 'medium'
      }
  
}
function returnCurrency(code){
  if(code==='USD'){
    return '$'
  }
  else if(code==='EUR'){
    return '€'
  }
  else return code
}
export default function Item({item}) {
    console.log('item',item)
  return ( item.MainImage ?
   ( <div class="item-list">
    <div class="item">
      <div class="item-image">
        <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
          <img src={item.MainImage.url_570xN}/>
        </a>
      </div>
      <div class="item-details">
        <p class="item-title">{item.title}</p>
        <p class="item-price">{`${returnCurrency(item.currency_code)} ${item.price}`}</p>
        <p class={`item-quantity level-${chooseColorClass(item.quantity)}`}>{`${item.quantity} left`}</p>
      </div>
    </div>
  </div>):null
  )
  ;
}
