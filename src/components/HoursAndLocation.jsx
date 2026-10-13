import React from "react";

export default function HoursAndLocation() {
  let address = "https://maps.app.goo.gl/jM4uaojHiMrBiFJM9";

  return (
    <section
      id="ourHoursAndLocation"
      className="w-screen h-1/2 flex items-center justify-center text-center text-4xl md:text-6xl font-bold gap-1 m-1"
    >
      <div
        id="left"
        className="w-auto h-100 bg-mauve-700 border-4 flex flex-col gap-7"
      >
        <h1 className=" bg-pink-700 border"> Hours</h1>
        <div className="text-wrap text-2xl md:text-4xl w-full">
          Monday - Sunday 11 AM to 8PM
        </div>
      </div>
      <div
        id="right"
        className=" w-auto h-100 flex flex-col bg-cyan-900 border-4  gap-7 justify-center items-center "
      >
        <h1 className="bg-brown-400 border w-full">Our Location</h1>
        <div className=" w-1/2 h-full flex flex-col sm:text-3xl justify-center items-center ">
          <a
            href={address}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-stone-300 text-white font-bold py-3 px-4 rounded m-1 text-center "
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
