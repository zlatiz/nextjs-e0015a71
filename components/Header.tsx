import React from 'react';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const logoSrc = encodeURI('https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png');
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center">
          <a href="/" aria-label="Home">
            <Image src={logoSrc} alt="Garber Bros logo" unoptimized width={180} height={48} style={{ objectFit: 'contain' }} />
          </a>
        </div>
        <nav aria-label="Primary navigation">
          <ul className="flex gap-6 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lock-status">Lock Status</a></li>
            <li><a href="/vessels">Vessels</a></li>
            <li><a href="/barges">Barges</a></li>
            <li><a href="/websites/garberbrosinc/images/application.pdf">Employment</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
