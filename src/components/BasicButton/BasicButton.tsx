import React from 'react';

function BasicButton({ text }: { text: string }) {
  return <button className="min-w-36 bg-ocean text-white uppercase p-2 my-8 text-center">{text}</button>
}

export default BasicButton;
