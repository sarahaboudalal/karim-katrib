import React from 'react';

export default function About() {
  return (
    <div
      id="about"
      className="w-full h-screen md:flex-row flex-col bg-beige items-center flex justify-center md:p-2 p-10"
    >
      <div className="text-blackish text-justify md:p-8  p-3 flex flex-col justify-center md:w-96 max-w-[465px]">
        <p className="text-4xl underline font-semibold pb-10">About Me</p>
        <p className="pb-3 md:text-xl text-lg">
          Hello! My name is Karim Katrib and I'm a professional fashion model.
        </p>
        <p p className="pb-3 md:text-xl text-lg">
          I started as an Instagram model, and with consistency and hard work, I
          made a lot of succeess in my modeling career.
        </p>
        <p className="md:text-xl text-lg">
          I have been modeling for the last 3 years. During this time, I took
          part in filming in different directions and worked with different
          clothing brands.
        </p>
      </div>
      <img
        src="https://media.discordapp.net/attachments/1054797763348541583/1062441626947031050/image10.jpeg"
        alt="karim katrib"
        className="md:h-[450px] md:w-fit md:p-8"
      />
    </div>
  );
}
