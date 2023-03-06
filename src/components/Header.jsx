import React from 'react';

export default function Header() {
  return (
    <div
      id="header"
      className="w-full h-screen md:flex-row flex-col bg-blackish items-center flex justify-center md:p-3 px-5 py-10"
    >
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1080477706891841566/Karimkatrib_.jpg?width=538&height=671"
        alt="karim katrib"
        className="md:h-[500px] max-h-[500px] md:w-fit"
      />
      <div className="flex flex-col text-whitish justify-center px-7 md:pt-0 pt-3 md:text-start text-center">
        <p className="font-extrabold md:text-4xl text-3xl ">Karim Katrib</p>
        <p className="md:text-2xl text-xl">Professional Fashion Model</p>
      </div>
    </div>
  );
}
