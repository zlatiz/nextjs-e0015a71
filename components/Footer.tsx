import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full border-t border-gray-100 mt-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-muted">
        <div>© Copyright 2015 by <span className="font-medium text-black">Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div className="flex items-center gap-4">
          <a href="/transparency-in-coverage">Transparency in Coverage</a>
          <a href="#">Top</a>
          <a href="contact.aspx">Contact</a>
        </div>
      </div>
    </footer>
  );
}
