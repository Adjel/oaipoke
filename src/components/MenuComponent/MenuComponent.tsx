import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

const dishes = [
  {
    title: "Notre poke",
    description: "Je suis une description de recette. Affichez votre succulente liste d'ingrédients ici.",
    price: "13.00"
  },
  {
    title: "Hula poke",
    description: "Je suis une description de recette. Affichez votre succulente liste d'ingrédients ici.",
    price: "13.00"
  },
  {
    title: "Ahi poke",
    description: "Je suis une description de recette. Affichez votre succulente liste d'ingrédients ici.",
    price: "13.00"
  },
  {
    title: "Wela poke",
    description: "Je suis une description de recette. Affichez votre succulente liste d'ingrédients ici.",
    price: "13.00"
  },
]

const customBowls = [
  {
    title: "BYOP Poke",
    description: "Je suis une description de recette. Affichez votre succulente liste d'ingrédients ici.",
    price: "16.00"
  },
]

const drinks = [
  {
    title: "Thé vert",
    price: "2.50"
  },
  {
    title: "Thé au lait",
    price: "3.00"
  },
  {
    title: "Eau pétillante",
    price: "3.00"
  },
  {
    title: "Eau minérale",
    price: "2.00"
  },
]

function MenuComponent() {
  return <section className="bg-[url('/assets/bg2.webp')] w-full min-h-screen bg-cover bg-[center] p-32 flex flex-col justify-center items-center" >
    <div className='w-full h-full bg-white gap-4 px-28 py-24 justify-center items-center'>
      <h2 className='mb-36 px-4 text-3xl text-center -rotate-6 text-ocean'>
        Notre Menu
      </h2>
      <MenuItem titleType='Signature Bowls' menuItems={dishes}/>
      <MenuItem titleType='Composez votre Bowl' menuItems={customBowls}/>
      <MenuItem titleType='Composez votre Bowl' menuItems={drinks}/>
    </div>
  </section>;
}

export default MenuComponent;
