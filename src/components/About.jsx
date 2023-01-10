import React from 'react';

export default function About() {
  return (
    <div className="w-full sm:flex-row flex-col bg-beige items-center flex justify-center sm:p-2 p-10">
      <div className="text-blackish sm:text-justify text-center sm:p-8  p-3 flex flex-col justify-center">
        <p className="text-2xl underline font-semibold pb-10">About Me</p>
        <p className="pb-3 sm:text-xl">
          Hello! My name is Karim Katrib and I'm a professional fashion model.
        </p>
        <p p className="pb-3 sm:text-xl">
          I started as an Instagram model, and with consistency and hard work,
          <br className="lg:block hidden" /> I made a lot of succeess in my
          modeling career.
        </p>
        <p className="sm:text-xl">
          I have been modeling for the last 3 years. During this time,
          <br className="lg:block hidden" /> I took part in filming in different
          directions and worked with clothing brands.
        </p>
      </div>
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1062373197200244736/image7.jpeg"
        alt="karim katrib"
        className="sm:h-[450px] sm:w-fit sm:p-8"
      />
    </div>
  );
}
