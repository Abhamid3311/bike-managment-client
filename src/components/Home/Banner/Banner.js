import React, { useRef } from 'react';
import './Banner.css';

import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate();
    const swiperSlideDetails = [
        {
            headline: "INTRUDER ABS FI",
            desc: "This is The Best Bike set in the world for people who just want to Spent time By Riding Bike.",
            newPrice: "304,950",
            oldPrice: "344,950",
            img: "https://www.suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__158919613785197.png"
        },
        {
            headline: "NEW GIXXER SF",
            desc: "This is The Best Bike set in the world for people who just want to Spent time By Riding Bike.",
            newPrice: "291,950",
            oldPrice: "350,950",
            img: "https://www.suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__162419216230992.png"
        },
        {
            headline: "The Suzuki GSX-R Dual",
            desc: "This is The Best Bike set in the world for people who just want to Spent time By Riding Bike.",
            newPrice: "390,000",
            oldPrice: "400,000",
            img: "https://www.suzuki.com.bd/images/bike_models/variant_color_images/variant_color_image__160682555276344.png"
        },
        {
            headline: "Yamaha R15 V4 Racing Blue",
            desc: "This is The Best Bike set in the world for people who just want to Spent time By Riding Bike.",
            newPrice: "5,45,000",
            oldPrice: "5,65,000",
            img: "https://i.ibb.co/WtJnMyt/Yamaha-R15-V4-Racing-Blue-removebg-preview.png"
        },
    ];

    const handleexploreBtn = () => {
        navigate("/allinventory")
    }

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
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    swiperSlideDetails.map(slide => <SwiperSlide>
                        <div class="row d-flex d-block h-100 w-100 text-white bg-slide py-5">

                            <div class="col-12 col-lg-6 col-md-12 col-sm-12 mt-5 text-start px-5 ">
                                <h1 class="fw-bold fs-1 ms-2 text-danger">{slide.headline}</h1>
                                <p class="ms-2">{slide.desc}</p>

                                <div className='my-4 ms-2 fs-2'>
                                    <h4 class="text-danger ">${slide.newPrice}</h4>
                                    <p class=" fs-5 text-success "><del>${slide.oldPrice}</del></p>
                                </div>

                                <button onClick={handleexploreBtn} class="btn btn-outline-success ms-2 mt-4 btn-lg">Explore Now </button>
                            </div>

                            <div class="col-12 col-lg-6 col-md-12 col-sm-12 ">
                                <img src={slide.img} class="img-fluid" width="402px" height="378px" alt='' />
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;