import React, { Component } from 'react'
import TopBar from '../Components/TopBar'
import Grabber from '../Components/Grabber_Content';
import HeroSection from '../Components/HeroSection';
import PortfolioShowcase from '../Components/PortfolioShowcase';
import SkillsSection from '../Components/SkillsSection';
import Footer from '../Components/Footer';

function Main() {
  return (
    <>
    <HeroSection />
    <PortfolioShowcase />
    <SkillsSection />
    <Footer />
    </>
  );
}

export default Main;
