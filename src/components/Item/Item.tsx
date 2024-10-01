import { MenuItem } from '../MenuItem/MenuItem';

function Item({item}: {item: MenuItem}) {
  return <div className='flex flex-col w-full h-fit mb-10 text-ocean'>
       <span className='w-full h-0.5 bg-ocean self-center'/>
    <div className='flex justify-between mt-6 px-12'>
      <span className='text-xl font-bold'>
        {item.title}
      </span>
      <div className='font-bold'>
        {item.price}€
      </div>
    </div>
    <div className='px-12'>
    {item.description}
    </div>
  </div>;
}

export default Item;
