"use client";

import React from 'react';
import Navigation from './Nav';
import Footer from './Footer';
import AboutUs from '../pages/About';
import Cursor from './Cursor';
import ScrollProgressBar from './ScrollProgressBar';
import ParallaxBackground from './ParallaxBackground';

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <ScrollProgressBar />
      
      <ParallaxBackground>
        <div className="min-h-screen overflow-x-hidden">
          <div className="flex flex-col min-h-screen">
            <Navigation />
            
            <main className="flex-grow pt-[10vh]">
              <AboutUs />
            </main>

            <Footer className="mt-auto" />
          </div>
        </div>
      </ParallaxBackground>
    </>
  );
}