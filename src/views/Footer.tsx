'use client';
import '@/styles/Footer.css';
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer id="footer">
      <p className="copyright">
        <Copyright />
        <span className="bold-text">{year} All rights reserved</span>, designed and developed by <span className="bold-text">Muhamad Abdul Azis</span>
      </p>
    </footer>
  );
};

const Copyright = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ marginRight: '5px', fill: 'var(--clr-text-dark)' }} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.19617C14.8622 1.19617 18.8038 5.13778 18.8038 10C18.8038 14.8622 14.8622 18.8038 10 18.8038C5.13778 18.8038 1.19617 14.8622 1.19617 10C1.19617 5.13778 5.13778 1.19617 10 1.19617ZM10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82743 14.7368C7.2329 14.7368 5.11962 12.6216 5.11962 10C5.11962 7.37838 7.2329 5.26316 9.82743 5.26316C11.1719 5.26316 12.3842 5.82873 13.2443 6.74144C13.6974 7.22221 14.4544 7.24465 14.9352 6.79157C15.416 6.33848 15.4384 5.58144 14.9853 5.10067C13.6934 3.72974 11.8599 2.87081 9.82743 2.87081C5.9006 2.87081 2.72727 6.0682 2.72727 10C2.72727 13.9318 5.9006 17.1292 9.82743 17.1292C11.7312 17.1292 13.4612 16.3754 14.7344 15.1527C15.2109 14.6951 15.2262 13.9379 14.7686 13.4614C14.311 12.9849 13.5538 12.9696 13.0773 13.4272C12.2306 14.2403 11.0875 14.7368 9.82743 14.7368Z"
      />
    </svg>
  );
};

export default Footer;
