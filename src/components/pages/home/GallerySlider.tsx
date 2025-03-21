'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SliderImage from '@/assets/images/image-slider.jpg';
import SlideImage2 from '@/assets/images/slider2.jpg';
import SlideImage3 from '@/assets/images/slider3.png';
import 'slick-carousel/slick/slick.css';
import SectionBackground from '@/components/ui/SectionBackgound';
import { useTranslations } from 'next-intl';
// Gallery data
const galleryImages = [
      {
            id: 1,
            src: SliderImage.src,
            alt: 'Cannabis Club Interior',
      },
      {
            id: 2,
            src: SlideImage2.src,
            alt: 'Club Lounge Area',
      },
      {
            id: 3,
            src: SlideImage3.src,
            alt: 'Club Atmosphere',
      },
      {
            id: 4,
            src: SliderImage.src,
            alt: 'Club Lounge Area',
      },
      {
            id: 5,
            src: SlideImage2.src,
            alt: 'Club Atmosphere',
      },
];

const GallerySlider = () => {
      const sliderRef = useRef<Slider>(null);
      const t = useTranslations('gallery-section');

      // Custom arrow components
      const PrevArrow = () => (
            <div className="absolute left-5 md:left-[80px] bottom-[150px] z-30 cursor-pointer">
                  <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="bg-[#FFD700] rounded-full md:p-4 p-2 transform hover:scale-110 transition-transform"
                  >
                        <BsChevronLeft className="text-black text-2xl" />
                  </button>
            </div>
      );

      const NextArrow = () => (
            <div className="absolute right-5 md:right-[80px] bottom-[150px] z-30 cursor-pointer">
                  <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="bg-[#FFD700] rounded-full md:p-4 p-2 transform hover:scale-110 transition-transform"
                  >
                        <BsChevronRight className="text-black text-2xl" />
                  </button>
            </div>
      );
      // Slider settings
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            customPaging: (i: number) => {
                  return <div className="size-3 rounded-full bg-primary"></div>;
            },
            accessibility: true,
            focusOnSelect: true,
            draggable: true,
            swipe: true,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: true,
                        },
                  },
                  {
                        breakpoint: 600,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              initialSlide: 2,
                        },
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                        },
                  },
            ],
      };

      return (
            <section className="py-20 bg-[#033f1b] relative overflow-hidden">
                  <SectionBackground />

                  <div className="container relative">
                        {/* Header */}
                        <div className="text-center mb-24 max-w-3xl mx-auto">
                              <h2 className="text-3xl  md:text-5xl title-font font-bold text-white mb-4">{t('title')}</h2>
                              {/* <h3 className="text-3xl md:text-5xl font-bold title-font text-[#FFD700]">Cannabis Social Club Gallery</h3> */}
                        </div>

                        {/* Slider */}
                        <div className="relative max-w-[1400px] mx-auto">
                              <PrevArrow />
                              <NextArrow />
                              <Slider ref={sliderRef} {...settings} className="gallery-slider">
                                    {galleryImages.map((image) => (
                                          <div key={image.id} className="px-4 transition-transform duration-500">
                                                <div className="relative aspect-[10/9] rounded-2xl overflow-hidden">
                                                      <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover size-[990px] rounded-2xl"
                                                            priority={image.id === 1}
                                                      />
                                                </div>
                                          </div>
                                    ))}
                              </Slider>
                        </div>
                  </div>
            </section>
      );
};

export default GallerySlider;
