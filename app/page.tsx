import React from 'react';
import Image from 'next/image';
import Card from '../components/ui/card';
import Button from '../components/ui/button';

interface SiteImage {
  url: string;
  alt: string;
}

const IMAGES: SiteImage[] = [
  { url: 'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png', alt: 'Garber Bros logo' },
  { url: 'https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg', alt: 'Our vessels' },
  { url: 'https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg', alt: 'Employment application' },
  { url: 'https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg', alt: 'Contact Garber Bros' }
];

export default function Page() {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[1];

  return (
    <div className="space-y-12 py-12">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">Garber Bros, Inc.</h1>
          <p className="mt-4 text-base text-gray-800">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/vessels" label="View Our Fleet of Vessels" primary />
            <a href="/contact" className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-gray-200 text-sm text-black bg-white">Contact Us</a>
          </div>
        </div>
        <div className="md:col-span-6 relative h-64 md:h-80 rounded-md overflow-hidden border border-gray-100">
          {heroImage && (
            (() => {
              const safeSrc = encodeURI(heroImage.url);
              return (
                <Image src={safeSrc} alt={heroImage.alt} unoptimized width={1200} height={800} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              );
            })()
          )}
          <div className="absolute left-3 bottom-3 flex gap-2">
            <a href="javascript:previousSlide6347994()" className="inline-block bg-white/90 text-black px-3 py-1 rounded text-sm">Prev</a>
            <a href="javascript:nextSlide6347994()" className="inline-block bg-white/90 text-black px-3 py-1 rounded text-sm">Next</a>
          </div>
        </div>
      </section>

      {/* Feature tiles */}
      <section aria-labelledby="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="aspect-[4/3] bg-gray-50 rounded-md overflow-hidden border border-gray-100">
            {images[1] && (() => { const safeSrc = encodeURI(images[1].url); return (<Image src={safeSrc} alt={images[1].alt} unoptimized width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />); })()}
          </div>
          <h3 className="mt-4 text-lg font-medium">Our Vessels</h3>
          <p className="mt-2 text-sm text-gray-700">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
          <div className="mt-4">
            <a href="/vessels" className="inline-block h-9 whitespace-nowrap px-4 rounded bg-accent text-black text-sm font-medium">View Our Vessels »</a>
          </div>
        </Card>

        <Card>
          <div className="aspect-[4/3] bg-gray-50 rounded-md overflow-hidden border border-gray-100">
            {images[2] && (() => { const safeSrc = encodeURI(images[2].url); return (<Image src={safeSrc} alt={images[2].alt} unoptimized width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />); })()}
          </div>
          <h3 className="mt-4 text-lg font-medium">Employment</h3>
          <p className="mt-2 text-sm text-gray-700">Interested in working at Garber Bros? Download our employment application.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="/websites/garberbrosinc/images/application.pdf" className="inline-block h-9 whitespace-nowrap px-4 rounded bg-accent text-black text-sm font-medium">View Our Employment Application »</a>
            <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="inline-block h-9 whitespace-nowrap px-4 rounded border border-gray-200 text-sm">Apply Online</a>
          </div>
        </Card>

        <Card>
          <div className="aspect-[4/3] bg-gray-50 rounded-md overflow-hidden border border-gray-100">
            {images[3] && (() => { const safeSrc = encodeURI(images[3].url); return (<Image src={safeSrc} alt={images[3].alt} unoptimized width={600} height={450} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />); })()}
          </div>
          <h3 className="mt-4 text-lg font-medium">Contact Us</h3>
          <p className="mt-2 text-sm text-gray-700">To contact Garber Bros Inc regarding vessel availability, click here.</p>
          <div className="mt-4">
            <a href="/contact" className="inline-block h-9 whitespace-nowrap px-4 rounded bg-accent text-black text-sm font-medium">Contact Garber Bros Inc »</a>
          </div>
        </Card>
      </section>

      {/* Gallery / Image strip */}
      <section aria-labelledby="gallery" className="">
        <h2 id="gallery" className="text-2xl font-semibold">Gallery</h2>
        <p className="text-sm text-gray-700 mt-2">Photography of fleet, employment and contact prompts.</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {(Array.isArray(images) ? images : []).map((img, idx) => {
            const safeSrc = encodeURI(img.url);
            return (
              <div key={idx} className="rounded-md overflow-hidden border border-gray-100 bg-gray-50">
                <Image src={safeSrc} alt={img.alt} unoptimized width={400} height={280} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Extra links / legal area */}
      <section className="py-6">
        <div className="text-sm text-gray-700">
          <a href="contact.aspx" className="text-blue-700 underline">Contact</a>
          <span className="mx-2">•</span>
          <a href="/transparency-in-coverage" className="text-blue-700 underline">Transparency in Coverage</a>
        </div>
      </section>
    </div>
  );
}
