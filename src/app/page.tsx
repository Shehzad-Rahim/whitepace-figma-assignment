import Apps from "@/components/Apps";
import Customise from "@/components/Customise";
import Extension from "@/components/Extension";
import Footer from "@/components/Footer";
import FreeTrial from "@/components/Free-Trial";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import WorkManagement from "@/components/Work-Management";
import YourData from "@/components/YourData";

import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <WorkManagement />
      <Extension />
      <Customise />
      <Plan />
      <Work />
      <YourData />
      <Sponsors />
      <Apps />
      <Testimonials />
      <FreeTrial />
      <Footer />
    </>
  )
}

export default page
