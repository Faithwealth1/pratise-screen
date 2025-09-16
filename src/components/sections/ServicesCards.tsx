import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/5d4a267c4c1f715d5754c51d8e4d23ea0e8654f0?placeholderIfAbsent=true",
      title: "Cloud Consult",
      description: "We craft a cloud roadmap uniquely tailored to your business goals, ensuring every step supports your growth, enhances efficiency, and delivers maximum ROI."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/c7c2fb0255192f659daf8b571a109c2ed9094ad8?placeholderIfAbsent=true",
      title: "Cloud Security",
      description: "We safeguard your data and applications with advanced security strategies, keeping you protected, compliant, and confident every step of the way."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/b801fcc9b025d655c0b1a753de16053add874bbc?placeholderIfAbsent=true",
      title: "Cloud Transition",
      description: "We handle your cloud migration smoothly, moving your infrastructure with care and optimizing management so you can focus on what matters most."
    }
  ];

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="bg-[rgba(251,251,251,1)] w-full overflow-hidden max-md:max-w-full">
      <div className="bg-[rgba(251,251,251,1)] overflow-hidden max-md:max-w-full">
        <div className="flex flex-col relative min-h-[597px] w-full items-stretch justify-center px-20 py-[83px] max-md:max-w-full max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/e79d7df7d02b5377454d91ba2f138eaa683dd45a?placeholderIfAbsent=true"
            alt="Background pattern"
            className="absolute h-full w-full object-cover inset-0"
          />
          <div className="relative flex min-h-[431px] w-full flex-col items-center justify-between max-md:max-w-full">
            <div className="w-[281px] max-w-full text-4xl font-bold text-center tracking-[-0.1px]">
              <h2 className="bg-clip-text bg-[linear-gradient(180deg,#294C3C_0%,#097484_100%)]">
                Explore Our Work
              </h2>
            </div>
            <div className="flex w-full max-w-[1114px] items-center gap-[40px_52px] justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
              <button 
                onClick={prevService}
                className="aspect-[1/1] object-contain w-[50px] self-stretch shrink-0 my-auto hover:opacity-70 transition-opacity"
                aria-label="Previous service"
              >
                <ChevronLeft size={50} className="text-[#097484]" />
              </button>
              
              <div className="self-stretch flex min-w-60 items-center gap-10 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={`self-stretch flex min-w-60 flex-col items-stretch w-[287px] my-auto pr-[13px] transition-all duration-300 ${
                      index === currentIndex ? 'opacity-100 scale-105' : 'opacity-70 scale-95'
                    }`}
                  >
                    <div className="bg-[#294C3C] flex w-[137px] shrink-0 h-[114px] rounded-[6px_30px]" />
                    <div className="z-10 flex mt-[-108px] items-stretch max-md:mr-1.5">
                      <div className="bg-[#294C3C] flex w-[137px] shrink-0 h-[114px] mt-[215px] rounded-[6px_30px] max-md:mt-10" />
                      <div className="border shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white flex min-h-[323px] w-fit flex-col max-w-full grow shrink-0 basis-0 px-[38px] py-[35px] rounded-[30px] border-solid border-[#D2D2D2] hover:shadow-lg transition-shadow max-md:px-5">
                        <div className="bg-[rgba(9,116,132,1)] flex min-h-[54px] w-[54px] flex-col overflow-hidden items-center justify-center h-[54px] px-3 rounded-[10px]">
                          <img
                            src={service.icon}
                            alt={`${service.title} icon`}
                            className="aspect-[1.25] object-contain w-full fill-white"
                          />
                        </div>
                        <div className="flex items-center gap-2.5 text-xl text-[#262727] font-bold leading-none justify-center mt-4">
                          <h3 className="self-stretch my-auto">
                            {service.title}
                          </h3>
                        </div>
                        <div className="self-stretch flex w-full items-center gap-2.5 text-base text-[#393C3D] font-medium leading-[21px] justify-center mt-4">
                          <p className="self-stretch w-[186px] my-auto">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={nextService}
                className="aspect-[1/1] object-contain w-[50px] self-stretch shrink-0 my-auto hover:opacity-70 transition-opacity"
                aria-label="Next service"
              >
                <ChevronRight size={50} className="text-[#097484]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
