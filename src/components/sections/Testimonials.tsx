import React, { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "VonTech Group enabled my start-up company to rapidly scale our operations and bring innovative products to the market at a very fast rate.",
      name: "Richard Henry",
      role: "Growing Startup",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/8d5fe585a918514049319eaf42221b1c5bbe85a8?placeholderIfAbsent=true",
      rating: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/7833b53cfe96368615e86b00e24ce00123885af4?placeholderIfAbsent=true"
    },
    {
      text: "VonTech Group helped me optimize my company's cloud infrastructure, resulting in significant cost savings and improved efficiency.",
      name: "Daniel Billy",
      role: "Cloud Organisation",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/375dcd720952ecc45e2bd2c744315145650321ad?placeholderIfAbsent=true",
      rating: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/7833b53cfe96368615e86b00e24ce00123885af4?placeholderIfAbsent=true"
    },
    {
      text: "My financial institution partnered with VonTech Group to implement robust security measures and ensure compliance in their cloud environment.",
      name: "Dora Florence",
      role: "Financial Institution",
      avatar: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/fef43269b2fa084926ffc03020e4de436257da6f?placeholderIfAbsent=true",
      rating: "https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/7e48d1eadece3278f8a49b9ba1149702829f16a9?placeholderIfAbsent=true"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[rgba(242,244,243,1)] flex w-full flex-col overflow-hidden items-stretch pt-[22px] pb-[53px] max-md:max-w-full">
      <div className="self-center w-[314px] max-w-full text-4xl font-bold text-center tracking-[-0.1px]">
        <h2 className="bg-clip-text">Client success story</h2>
      </div>
      <div className="flex w-full flex-col items-stretch mt-[79px] max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-center gap-5 max-md:max-w-full overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`border self-stretch min-w-60 min-h-[234px] overflow-hidden w-[450px] my-auto px-[22px] py-8 rounded-[20px] border-solid border-[#B9BBBA] transition-all duration-300 ${
                index === currentTestimonial ? 'opacity-100 scale-105' : 'opacity-70'
              } max-md:max-w-full max-md:px-5`}
            >
              <div className="flex w-full items-center gap-2.5 text-base text-[rgba(9,116,132,1)] font-normal leading-[21px]">
                <p className="self-stretch flex-1 shrink basis-[0%] my-auto">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex w-full items-center gap-[40px_72px] text-lg leading-loose justify-between mt-[47px] max-md:mt-10">
                <div className="self-stretch flex items-center gap-4 justify-center my-auto">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="aspect-[1] object-contain w-[60px] self-stretch shrink-0 my-auto rounded-[100px]"
                  />
                  <div className="self-stretch flex flex-col justify-center w-[131px] my-auto py-px">
                    <div className="flex min-h-[54px] flex-col items-stretch justify-center">
                      <div className="text-[rgba(9,116,132,1)] font-extrabold">
                        {testimonial.name}
                      </div>
                      <div className="text-[rgba(141,136,136,1)] font-semibold">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={testimonial.rating}
                  alt="Rating stars"
                  className="aspect-[4.46] object-contain w-[125px] self-stretch min-h-7 shrink-0 my-auto rounded-[20px]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="self-center flex items-center gap-1 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`self-stretch flex w-3 shrink-0 h-3 my-auto rounded-[1000px] transition-colors ${
                index === currentTestimonial ? 'bg-[#097484]' : 'bg-[rgba(215,209,209,1)]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
