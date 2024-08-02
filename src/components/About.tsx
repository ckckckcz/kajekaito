import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Profile from "../images/Profile.png";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: "words,chars" });

      gsap.fromTo(
        text.chars,
        { opacity: 0, color: "text-gray-400" },
        {
          opacity: 1,
          color: "text-gray-900",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="profile grid grid-cols-2 items-center justify-center gap-8">
          <div className="flex justify-center">
            <img src={Profile} alt="Profile Image" className="profile-img" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Perjalanan Saya</h1>
            <div className="scroll-reveal">
              <p className="mb-8 text-lg font-bold lg:text-x reveal-title">
                <span>
                  Didorong oleh rasa ingin tahu dan kecintaan terhadap IT, rasa penasaran saya dimulai dengan membuat website menggunakan HTML, CSS, dan JavaScript.
                  <br />
                  <br />
                  Saat ini, saya sedang mendalami dunia IT sebagai mahasiswa Teknik Informatika di Politeknik Negeri Malang, dan sekarang Saya fokus pada bidang UI/UX Design, Front-End Web Development, danKecerdasan Buatan (AI).
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedText;
