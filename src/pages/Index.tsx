import React from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import ServicesOverview from '@/components/sections/ServicesOverview';
import About from '@/components/sections/About';
import ServicesCards from '@/components/sections/ServicesCards';
import Industry from '@/components/sections/Industry';
import Statistics from '@/components/sections/Statistics';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="px-[33px] max-md:pl-5">
      <div className="bg-white flex flex-col overflow-hidden items-stretch max-md:max-w-full">
        {/* Hero Section with Background */}
        <div className="flex flex-col relative min-h-[660px] w-full overflow-hidden tracking-[-0.1px] pt-6 max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/0a2d3234e2fe459f1d1a326d10fb7cec4e64fb10?placeholderIfAbsent=true"
            alt="Hero background"
            className="absolute h-full w-full object-cover inset-0"
          />
          <div className="relative w-full">
            <Header />
            <div className="px-20 max-md:px-5">
              <Hero />
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/1efeaaab0c7d30c17a8ed470b8ddc5364c7478fc?placeholderIfAbsent=true"
            alt="Hero bottom decoration"
            className="aspect-[9.17] object-contain w-full mt-[81px] max-md:max-w-full max-md:mt-10"
          />
        </div>

        {/* Partners Section */}
        <Partners />

        {/* Services Overview */}
        <ServicesOverview />

        {/* About Section */}
        <About />

        {/* Services Cards */}
        <ServicesCards />

        {/* Industry Section */}
        <Industry />

        {/* Statistics Section */}
        <Statistics />

        {/* Testimonials */}
        <Testimonials />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
