import React from "react";

function HeroButton({ img, title, app }) {
  return (
    <button className="bg-black flex items-center rounded-md border-gray-400 border-[1px] px-5 py-2 text-white font-display">
      <img src={img} alt={title} />
      <div className="ml-3">
        <p className="text-xs hidden lg:block">{title}</p>
        <h1 className="text-base lg:text-lg tracking-wider">{app}</h1>
      </div>
    </button>
  );
}

export default HeroButton;
