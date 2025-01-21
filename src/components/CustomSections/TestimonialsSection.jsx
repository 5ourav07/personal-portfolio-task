"use client";
import TestimonialsData from "@/constants/TestimonialsData";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsSection = () => {
  return (
    <div className="mb-[60px] sm:mb-[139px]">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="max-w-[1920px] mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="testimonial-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1.8,
              spaceBetween: 40,
            },
          }}
        >
          {TestimonialsData.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="pb-8 sm:pb-12 transition-all duration-300"
            >
              <div className="testimonial-slide relative">
                {/* Overlay div */}
                <div className="absolute inset-0 bg-white/60 opacity-0 transition-opacity duration-300 z-10 rounded-[14px] overlay-element" />

                <div className="swiper-slide-content relative max-w-[1087px] mx-auto bg-[#F8F8F8] p-6 md:p-8 transition-all duration-300 h-full rounded-[14px]">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        layout="fill"
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="testimonial-text mb-5 h-[350px] sm:h-[146px]">
                        {testimonial.text}
                      </p>
                      <p className="testimonial-name">{testimonial.name}</p>
                      <p className="testimonial-designation">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
