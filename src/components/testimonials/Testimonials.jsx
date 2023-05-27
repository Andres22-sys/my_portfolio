import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Sage Belknap',
        review: 'Very curious student. Always looking to solve problems as a team. Strong communication and not afraid ' +
            'to ask questions. Investigative and tenacious.'
    },
    {
        avatar: AVTR2,
        name: 'Falicia Macias',
        review: 'Andres is highly adaptive with any task thrown his way. He doesn’t hesitate to give all his effort ' +
            'and knowledge in order to solve problems. He always takes the initiative to keep pushing forward, ' +
            'especially in new environments. His demeanor is highly admirable and very constructive.'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Peer Recommendations</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="a smiling person"/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <smal className="client__review">{review}</smal>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials