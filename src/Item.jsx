import React from 'react';

export default function Item({item}) {
    console.log('item',item)
  return (
    <div class="item-list">
    <div class="item">
      <div class="item-image">
        <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
          <img src={item.MainImage?.url_570xN}/>
        </a>
      </div>
      <div class="item-details">
        <p class="item-title">{item.title}</p>
        <p class="item-price">{`$ ${item.price}`}</p>
        <p class="item-quantity level-medium">{`${item.quantity} left`}</p>
      </div>
    </div>
  </div>
  );
}
