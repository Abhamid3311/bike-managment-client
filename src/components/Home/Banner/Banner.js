import React, { useRef } from 'react';
import './Banner.css';

import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const Banner = () => {
    const swiperSlideDetails = [
        {
            headline: "INTRUDER ABS FI",
            desc: "This is The Best TV set in the world for people who just want to waste time infront of Watching Ajaira Things.",
            newPrice: "304,950",
            oldPrice: "344,950",
            img: "https://www.suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__158919613785197.png"
        },
        {
            headline: "NEW GIXXER SF",
            desc: "This is The Best TV set in the world for people who just want to waste time infront of Watching Ajaira Things.",
            newPrice: "291,950",
            oldPrice: "350,950",
            img: "https://www.suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__162419216230992.png"
        },
        {
            headline: "The Suzuki GSX-R Dual",
            desc: "This is The Best TV set in the world for people who just want to waste time infront of Watching Ajaira Things.",
            newPrice: "390,000",
            oldPrice: "400,000",
            img: "https://www.suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"
        },
        {
            headline: "Yamaha R15 V4 Racing Blue",
            desc: "This is The Best TV set in the world for people who just want to waste time infront of Watching Ajaira Things.",
            newPrice: "5,45,000",
            oldPrice: "5,65,000",
            img: "https://i.ibb.co/WtJnMyt/Yamaha-R15-V4-Racing-Blue-removebg-preview.png"
        },
    ]
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper "
            >
                {
                    swiperSlideDetails.map(slide => <SwiperSlide>
                        <div class="row d-flex d-block w-100 text-white bg-slide py-5">
                            <div class="col-12 col-lg-7 col-md-12 col-sm-12 mt-5 text-start px-5 ">
                                <h1 class="fw-bold fs-1 ms-2 ">{slide.headline}</h1>
                                <p class="ms-2">{slide.desc}</p>

                                <div className='my-4'>
                                    <h4 class="ms-2 fs-2 text-danger ">${slide.newPrice}</h4>
                                    <p class="ms-2 fs-5 text-primary "><del>${slide.oldPrice}</del></p>
                                </div>


                                <button class="btn btn-outline-danger ms-2 mt-4 btn-lg">Explore Now </button>
                            </div>

                            <div class="col-12 col-lg-5 col-md-12 col-sm-12 ">
                                <img src={slide.img} class="img-fluid w-100" width="402px" height="378px" alt='' />
                            </div>
                        </div>
                    </SwiperSlide>)
                }






            </Swiper>
        </div>
    );
};

export default Banner;