"use client";

import React from 'react';
import Navigation from '../app/components/Nav';
import Footer from '../app/components/Footer';
import AboutUs from '../app/components/about';
import Cursor from '../app/components/Cursor';
import ScrollProgressBar from '../app/components/ScrollProgressBar';
import ParallaxBackground from '../app/components/ParallaxBackground';

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