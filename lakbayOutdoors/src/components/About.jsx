import React from 'react';
import '../styles/About.css';
import { Mountain, Users, ShieldCheck } from "lucide-react";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      
      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Our Story</h1>
          <p>Born from the peaks of the Philippines, built for every adventurer.</p>
        </div>
      </section>

      {/* 2. MISSION SECTION (Split Layout) */}
      <section className="about-section split-layout">
        <div className="text-content">
          <h2>Adventure for Everyone</h2>
          <p>
            Lakbay Outdoors started with a simple idea: premium outdoor gear shouldn't be inaccessible. 
            We believe that the breathtaking landscapes of the Philippines—from the cloud-capped peaks of Benguet 
            to the pristine beaches of Palawan—deserve to be explored safely and comfortably.
          </p>
          <p>
            Our mission is to equip every Filipino adventurer with high-quality, reliable, and affordable gear 
            effectively tested in our unique tropical climate.
          </p>
        </div>
        <div className="image-content">
         
          <img src="/apo.jpg" alt="Hiker overlooking mountains" /> 
        </div>
      </section>

      {/* 3. VALUES SECTION (Grid) */}
      <section className="about-section values-section">
        <h2>Why Choose Us?</h2>
        <div className="values-grid">
          
          <div className="value-card">
            <Mountain size={40} className="value-icon" />
            <h3>Local Expertise</h3>
            <p>We know the terrain because we hike it too. Our gear is curated specifically for Philippine summits and trails.</p>
          </div>

          <div className="value-card">
            <Users size={40} className="value-icon" />
            <h3>Community First</h3>
            <p>We're not just a shop; we're a community of climbers, hikers, and campers sharing proficiency and passion.</p>
          </div>

          <div className="value-card">
            <ShieldCheck size={40} className="value-icon" />
            <h3>Trusted Quality</h3>
            <p>Authenticity is our promise. Every item is verified genuine and backed by our easy return policy.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;