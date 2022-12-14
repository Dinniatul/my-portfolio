import React from "react";
import Image from "next/image";

import CSS from "../public/images/css.png";
import HTML from "../public/images/html.png";
import JAVA from "../public/images/java.png";
import JAVASCRIPT from "../public/images/javascript.png";
import LARAVEL from "../public/images/laravel.png";
import PHP from "../public/images/php.png";
import POSTGRESQL from "../public/images/postgreSQL.png";
import REACT from "../public/images/react.png";
import TAILWIND from "../public/images/tailwind.png";

const Skills = () => {
  return (
    <div id="skills" name="skills" className=" w-full h-full bg-[#0a192f]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center ">
        <div className="mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={JAVASCRIPT} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={REACT} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={JAVA} alt="HTML icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={LARAVEL} alt="HTML icon" />
            <p className="my-4">LARAVEL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={POSTGRESQL} alt="HTML icon" />
            <p className="my-4">POSTGRE SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={TAILWIND} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <Image className="w-25 mx-auto " src={PHP} alt="HTML icon" />
            <p className="my-4">PHP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
