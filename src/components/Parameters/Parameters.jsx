import React from 'react';
import Colors from './Colors';
import Sizes from './Sizes';

export default function Parameters() {
  return (
    <div
      id="parameters"
      className=" bg-whitish flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-2 w-3/4 items-center justify-center justify-items-center">
        <div className="flex flex-col justify-center items-center col-span-2">
          <p className="text-4xl text-blackish underline font-semibold py-10">
            My Parameters
          </p>
        </div>
        <Colors gridSpan="col-span-2" />
        <Sizes gridSpan="col-span-2" />
      </div>
    </div>
  );
}
