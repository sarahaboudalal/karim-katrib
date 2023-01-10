import React from 'react';

export default function Header() {
  return (
    <div className="w-screen flex-row bg-blackish flex justify-center">
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1062373197535780944/image6.jpeg"
        alt="karim katrib"
        className="h-1/3"
      />
      <div className="flex flex-col text-beige justify-center px-7 text-xl">
        <p className="font-extrabold">Karim Katrib</p>
        <p className="">Professional Fashion Model</p>
      </div>
    </div>
  );
}
