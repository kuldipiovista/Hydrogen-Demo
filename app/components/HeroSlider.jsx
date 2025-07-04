// app/components/HeroSlider.jsx

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import {useEffect, useState} from 'react';
import {Link} from 'react-router';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function HeroSlider({slides}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-[400px] bg-[#e5ffe7] flex items-center justify-center"></div>;
  }

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{nextEl: '.custom-next', prevEl: '.custom-prev'}}
        pagination={{clickable: true}}
        autoplay={{delay: 4000}}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* Desktop */}
            <div
              className="hidden md:block w-full bg-cover bg-center bg-no-repeat"
              style={{backgroundImage: `url(${slide.imageDesktop})`}}
            >
              <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between text-white">
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-xl font-medium mb-3 text-[#4d4d4d]">
                    {slide.subheading}
                  </p>
                  <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-black">
                    {slide.heading}
                  </h2>
                  <Link
                    to={slide.url}
                    className="w-[175px] mt-6 bg-black text-white py-3 px-7 rounded-full flex items-center gap-2 hover:opacity-90 transition mx-auto md:mx-0 shadow-lg"
                  >
                    {slide.buttonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div
              className="block md:hidden h-[500px] w-full bg-cover bg-center bg-no-repeat"
              style={{backgroundImage: `url(${slide.imageMobile})`}}
            >
              <div className="px-4 py-16 text-center text-white">
                <p className="text-lg font-medium mb-2 text-[#4d4d4d]">
                  {slide.subheading}
                </p>
                <h2 className="text-4xl font-bold text-black">{slide.heading}</h2>
                <Link
                  to={slide.url}
                  className="w-[170px] mt-5 bg-black text-white py-2 px-6 rounded-full flex items-center gap-2 hover:opacity-90 transition mx-auto shadow-md"
                >
                  {slide.buttonText}
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12H3M15 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer text-black hover:scale-110 transition">
        <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </div>
      <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer text-black hover:scale-110 transition">
        <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
