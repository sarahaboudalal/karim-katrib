import React from 'react';

export default function Colors({ gridSpan }) {
  return (
    <div
      className={[
        'w-full lg:flex-row flex-col  items-center flex justify-start lg:p-2 p-10',
        gridSpan,
      ].join(' ')}
    >
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1062373151348109312/image13.jpeg"
        alt="karim katrib"
        className="md:w-[450px] lg:h-fit lg:p-8"
      />
      <div className="flex flex-col text-grey justify-center px-7 lg:pt-0 pt-3 lg:text-start text-center lg:text-3xl text-2xl">
        <p>
          <strong>Skin Tone:</strong> White
        </p>
        <p>
          <strong>Hair Color:</strong> Red
        </p>
        <p>
          <strong>Eye Color:</strong> Hazel
        </p>
      </div>
    </div>
  );
}
