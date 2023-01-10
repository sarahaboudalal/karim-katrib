import React from 'react';

export default function Sizes({ gridSpan }) {
  return (
    <div
      className={[
        'w-full lg:flex-row flex-col  items-center flex justify-end lg:p-2 p-10',
        gridSpan,
      ].join(' ')}
    >
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1062373255794663505/image2.jpeg"
        alt="karim katrib"
        className="md:w-[450px] lg:h-fit lg:p-8"
      />
      <div className="flex flex-col text-blackish justify-center px-7 lg:pt-0 pt-3 lg:text-start text-center lg:text-3xl text-2xl">
        <p>
          <strong>Height:</strong> 183
        </p>
        <p>
          <strong>Weight:</strong> 60
        </p>
        <p>
          <strong>Shoe Size:</strong> 40
        </p>
      </div>
    </div>
  );
}
