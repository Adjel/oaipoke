import React from 'react';
import Item from '../Item/Item';

export interface MenuItem {
  title: string,
  description?: string,
  price: string,
}

function MenuItem({titleType, menuItems}: {titleType:string, menuItems: MenuItem[]}) {
  return <section className='flex flex-col mb-36'>
    <h2 className='mb-8 px-12 font-bold text-xl text-ocean'>{titleType}</h2>
    {menuItems.map((item) => (
      <Item item={item}/>
    ))}
  </section>;
}

export default MenuItem;
