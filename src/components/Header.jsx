import React from 'react';

export default function Header() {
  return (
    <div className="w-full md:flex-row flex-col bg-blackish items-center flex justify-center sm:p-2 p-8">
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1062373196805971999/image8.jpeg?width=671&height=671"
        alt="karim katrib"
        className="sm:h-[500px] sm:w-fit"
      />
      <div className="flex flex-col text-whitish justify-center px-7 sm:pt-0 pt-3 md:text-start text-center">
        <p className="font-extrabold md:text-4xl text-3xl ">Karim Katrib</p>
        <p className="md:text-2xl text-xl">Professional Fashion Model</p>
      </div>
    </div>
  );
}
