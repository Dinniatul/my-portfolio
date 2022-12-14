import React from "react";

const HomeComponent = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Dinniatul Aqidah Azmi</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Web Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">Politeknik Negeri Padang , Teknologi Informasi, D3 Manajemen Informatika</p>
      </div>
    </div>
  );
};

export default HomeComponent;
