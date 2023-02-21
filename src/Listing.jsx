import React from 'react';
import Item from './Item';

export default function Listing({items}) {
  return (
    <div className='container'>
      {items.map(item=><Item item={item}/>)}
    </div>
  );
}
