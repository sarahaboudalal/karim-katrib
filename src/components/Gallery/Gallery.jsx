import React from 'react';
import images from './images.json';

export default function Gallery() {
  return (
    <div className="w-full flex-col bg-beige items-center flex justify-center p-6">
      <p className=" text-blackish  text-4xl underline font-semibold p-10">
        Gallery
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-center justify-items-center justify-center  gap-4">
        {images.map((img) => {
          return <img src={img.image} alt={img.id} className="" />;
        })}
      </div>
    </div>
  );
}
