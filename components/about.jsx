import React from "react";
import Image from "next/image";
import Profile from "../public/images/dinni.jpg";

const About = () => {
  return (
    <div id="about" name="about" className="w-full  h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <Image src={Profile} alt="dinni" className=" object-scale-down h-98 w-90 max-w-sm rounded-full"></Image>
          </div>
          <div>
            <p className="max-w-sm mt-5">
              Saya adalah Mahasiswi Politeknik Negeri Padang , Jurusan Teknologi Informasi dengan Program Studi D3 Manajemen Informatika, semester 5. Fokus saya terhadap dunia IT yaitu tentang pengambangan Website atau sebagai Web
              Development.
            </p>
            <p className="mt-5 max-w-sm">
              Saya sudah menekuni Pemograman Web selama 2 tahun hingga saat ini. Jujur adalah sifat yang saya utamakan , mampu bekerjasama tim , bertanggung jawab, berkomunikasi dan dapat membagi waktu dengan baik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
