import React from 'react';

export default function Contact() {
  return (
    <div className="bg-blackish p-10 text-center text-whitish">
      <p className="md:text-2xl text-lg text-semibold italic">
        Let's get in touch
      </p>
      <a
        href="tel:+971 76 571 081"
        className="underline md:inline md:text-2xl text-lg text-semibold italic"
      >
        +971 76 571 081
      </a>
    </div>
  );
}
