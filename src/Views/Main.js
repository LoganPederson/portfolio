import React, { Component } from 'react'
import TopBar from '../Components/TopBar'
import Grabber from '../Components/Grabber_Content';
import HeroSection from '../Components/HeroSection';
import PortfolioShowcase from '../Components/PortfolioShowcase';
import SkillsSection from '../Components/SkillsSection';

function Main() {
  return (
    <>
    <TopBar />
    <HeroSection />
    <PortfolioShowcase />
    <SkillsSection />
    </>
  );
}

export default Main;
