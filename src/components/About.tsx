import React, { useState, useEffect } from "react";
import Profile from "../images/Profile.png";

const About: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 justify-center mx-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="profile grid grid-cols-2 items-center justify-center gap-8">
          <div className="flex justify-center">
            <img src={Profile} alt="Profile Image" className="profile-img" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl text-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Perjalanan Saya</h1>
            <p className="mb-8 text-lg text-semibold text-gray-400 lg:text-xl dark:text-gray-400">
              <b className="text-gray-900 text-semibold">Didorong oleh rasa ingin tahu</b> dan pensaran terhadap IT, rasa penasaran saya dimulai dengan membuat website menggunakan HTML, CSS, dan JavaScript.
              <br />
              <br />
              Saat ini, saya sedang mendalami dunia IT sebagai mahasiswa <b className="text-gray-900 text-semibold">Teknik Informatika</b> di <b className="text-gray-900 text-semibold">Politeknik Negeri Malang</b>, dan sekarang Saya fokus
              pada bidang <b className="text-gray-900 text-semibold">UI/UX Design</b>, <b className="text-gray-900 text-semibold">Front-End Web Developer</b>, dan
              <b className="text-gray-900 text-semibold"> Kecerdasan Buatan (AI)</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
