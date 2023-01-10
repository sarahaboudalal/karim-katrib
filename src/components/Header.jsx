import React from 'react';

export default function Header() {
  return (
    <div className="w-screen sm:flex-row flex-col bg-blackish items-center flex justify-center sm:p-2 p-8">
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1062373196805971999/image8.jpeg?width=671&height=671"
        alt="karim katrib"
        className="sm:h-96 sm:w-fit"
      />
      <div className="flex flex-col text-whitish justify-center px-7 sm:text-start text-center">
        <p className="font-extrabold sm:text-2xl text-xl ">Karim Katrib</p>
        <p className="sm:text-xl text-base ">Professional Fashion Model</p>
      </div>
    </div>
  );
}
