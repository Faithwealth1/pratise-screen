import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[rgba(251,251,251,1)] w-full overflow-hidden max-md:max-w-full">
      <div className="flex flex-col relative min-h-[700px] w-full items-stretch justify-center px-[70px] py-[81px] max-md:max-w-full max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/76ffd0e3ed75610149295fe35530e2bcbca3d17b?placeholderIfAbsent=true"
          alt="Background pattern"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex items-center gap-[40px_46px] flex-wrap">
          <div className="self-stretch min-w-60 w-[676px] my-auto max-md:max-w-full">
            <div className="w-[591px] max-w-full">
              <div className="flex w-[336px] max-w-full flex-col font-bold text-center tracking-[-0.1px] justify-center">
                <div className="text-[#181818] text-sm uppercase">
                  About Us
                </div>
                <div className="flex flex-col text-4xl text-[#097484] capitalize mt-6">
                  <h2>Built for success</h2>
                  <h2 className="mt-2">Born in the cloud</h2>
                  <div className="bg-[#262727] self-stretch min-h-0.5 w-full mt-2 border-[rgba(38,39,39,1)] border-solid border-2" />
                </div>
              </div>
              <div className="flex w-full items-center gap-2.5 text-xl text-[#393C3D] font-medium capitalize justify-center mt-8 max-md:max-w-full">
                <p className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                  At Vontech, we specialize in helping businesses of all sizes
                  <br />
                  achieve their cloud goals. With deep expertise in cloud
                  <br />
                  technologies, we design strategies that create new
                  <br />
                  opportunities, optimize operations, and transform experiences.
                  <br />
                  Whether you're in healthcare, finance, retail, or manufacturing,
                  <br />
                  our proven track record speaks volumes.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-[40px_58px] justify-between flex-wrap mt-10 max-md:max-w-full">
              <div className="flex min-w-60 flex-col w-[352px]">
                <h3 className="text-[#097484] text-center text-4xl font-bold tracking-[-0.1px] capitalize">
                  Vision
                </h3>
                <div className="flex w-[274px] max-w-full gap-2.5 text-xl text-[#393C3D] font-medium leading-6 mt-4">
                  <p className="w-[274px]">
                    To be the premier cloud solutions provider, recognized for our expertise, and unwavering commitment to customer success.
                  </p>
                </div>
              </div>
              <div className="min-w-60 w-[264px]">
                <h3 className="text-[#097484] text-4xl font-bold tracking-[-0.1px] capitalize">
                  Mission
                </h3>
                <div className="flex max-w-full w-[264px] items-center gap-2.5 text-xl text-[#393C3D] font-medium leading-6 justify-center mt-4">
                  <p className="self-stretch w-[264px] my-auto">
                    To empower businesses with cutting-edge cloud solutions, enabling them to achieve greater agility, efficiency, and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white self-stretch min-w-60 overflow-hidden w-[392px] my-auto rounded-[99999997952px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/ab049ae4ad8885ba99f0dd4eeaa6d321b0c81762?placeholderIfAbsent=true"
              alt="Team collaboration"
              className="aspect-[0.81] object-contain w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
