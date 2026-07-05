'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Reveal from './Reveal';

interface Testimonial {
  avatar: string;
  name: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: '/assets/avatar1.png',
    name: 'Sage Belknap',
    review:
      'Very curious student. Always looking to solve problems as a team. Strong communication and not afraid to ask questions. Investigative and tenacious.',
  },
  {
    avatar: '/assets/avatar2.png',
    name: 'Falicia Macias',
    review:
      "Andres is highly adaptive with any task thrown his way. He doesn't hesitate to give all his effort and knowledge in order to solve problems. He always takes the initiative to keep pushing forward, especially in new environments. His demeanor is highly admirable and very constructive.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-32 lg:mt-44">
      <Reveal>
        <h5 className="section-subtitle">Peer Recommendations</h5>
        <h2 className="section-title">Testimonials</h2>
      </Reveal>

      <Reveal delay={0.15} className="w-[85%] mx-auto sm:w-[60%] lg:w-[40%]">
        <Swiper
          className="pb-16"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonials.map(({ avatar, name, review }, index) => (
            <SwiperSlide
              key={index}
              className="bg-bg-variant text-center p-8 rounded-[2rem] select-none"
            >
              <div className="w-16 aspect-square overflow-hidden rounded-full mx-auto mb-4 border-[0.4rem] border-bg-variant">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatar}
                  alt={`${name} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-medium mb-2">{name}</h5>
              <small className="text-white/60 text-sm leading-relaxed">
                {review}
              </small>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
};

export default Testimonials;
