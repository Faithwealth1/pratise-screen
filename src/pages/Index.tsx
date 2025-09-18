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
  console.log("Index component is rendering!"); // Debug log
  return (
    <div className="px-[33px] max-md:pl-5">
      <div className="bg-white flex flex-col overflow-hidden items-stretch max-md:max-w-full">
        {/* Hero Section with Background */}
        <div className="flex flex-col relative min-h-[660px] w-full overflow-hidden tracking-[-0.1px] pt-6 bg-gradient-to-br from-blue-600 to-purple-700 max-md:max-w-full">
          <div className="relative w-full">
            <Header />
            <div className="px-20 max-md:px-5">
              <Hero />
            </div>
          </div>
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
