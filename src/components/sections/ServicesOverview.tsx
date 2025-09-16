import React from 'react';

const ServicesOverview = () => {
  const handleGetStarted = () => {
    // This could scroll to services section or open a contact form
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[rgba(2,92,105,1)] flex w-full flex-col overflow-hidden items-center text-xl text-white font-bold tracking-[-0.1px] justify-center px-20 py-[29px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[878px] max-w-full flex-col items-stretch">
        <h2 className="text-4xl text-center max-md:max-w-full">
          The cloud service you actually need
        </h2>
        <div className="flex w-full items-center gap-2.5 font-medium text-center justify-center mt-4 max-md:max-w-full">
          <p className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            At Vontech Group, we offer a range of specialized cloud and technology services designed to drive innovation, enhance efficiency, and help businesses of all sizes achieve their goals.
          </p>
        </div>
        <button 
          onClick={handleGetStarted}
          className="justify-center items-center self-center flex gap-2 text-[#262727] bg-[#FFE21B] mt-4 px-6 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors max-md:px-5"
        >
          <span className="text-[#262727] self-stretch my-auto">
            Get Started
          </span>
        </button>
      </div>
    </section>
  );
};

export default ServicesOverview;
