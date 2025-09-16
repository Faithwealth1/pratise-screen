import React from 'react';

const Hero = () => {
  const handleConsultationClick = () => {
    // This could open a modal or navigate to a contact form
    console.log('Free consultation requested');
  };

  return (
    <section className="flex w-[614px] max-w-full flex-col items-stretch mt-[68px] max-md:mt-10">
      <div className="w-full text-white max-md:max-w-full">
        <div className="flex w-full items-center gap-2.5 text-5xl font-bold justify-center max-md:text-[40px]">
          <h1 className="self-stretch w-[680px] my-auto max-md:max-w-full max-md:text-[40px]">
            Empowering Businesses with Innovative Cloud Solutions
          </h1>
        </div>
        <div className="flex w-full items-center gap-2.5 text-xl font-semibold justify-center mt-4 max-md:max-w-full">
          <p className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            VonTech Group delivers tailored cloud strategies and services to optimize your operations, enhance security, and drive growth.
          </p>
        </div>
      </div>
      <button 
        onClick={handleConsultationClick}
        className="justify-center items-center bg-[#FFE21B] flex min-h-12 gap-2 text-xl text-[#262727] font-bold mt-10 px-6 py-[9px] rounded-[20px] hover:bg-[#FFD700] transition-colors max-md:px-5"
      >
        <span className="self-stretch my-auto">
          Free Consultation
        </span>
        <img
          src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/cc9039be4a921751da34d49066ab0efbf37fe021?placeholderIfAbsent=true"
          alt="Arrow icon"
          className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
        />
      </button>
    </section>
  );
};

export default Hero;
