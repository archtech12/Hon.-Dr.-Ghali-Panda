"use client";

import { useEffect, useRef } from 'react';
import Script from 'next/script';

type AdUnitProps = {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  style?: React.CSSProperties;
};

const AdUnit = ({ slot, format = 'auto', responsive = true, style }: AdUnitProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Prevent double execution in React Strict Mode
    if (isLoaded.current) return;
    
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (err: any) {
      if (process.env.NODE_ENV !== 'production' && err?.message?.includes('already have ads')) {
          // Suppress this specific warning in dev as it's common with React Strict Mode re-renders
          return;
      }
      // Also suppress in prod if desired, or just log everything else
      if (err?.message && err.message.includes('adsbygoogle')) {
         // Known harmless AdSense clutter
         return; 
      }
      console.error('AdSense error:', err);
    }
  }, []);

  // If no Publisher ID is set, show a placeholder in development
  const pid = process.env.NEXT_PUBLIC_ADSENSE_PID;
  if (!pid) {
      return (
          <div style={{ 
              padding: '20px', 
              background: '#f0f0f0', 
              border: '1px dashed #ccc', 
              textAlign: 'center', 
              margin: '20px 0',
              ...style 
          }}>
              <p style={{color: '#666', fontSize: '14px'}}>Ad Placeholder (Slot: {slot})</p>
              <small>Configure NEXT_PUBLIC_ADSENSE_PID to see ads</small>
          </div>
      );
  }

  return (
    <div style={{ overflow: 'hidden', minHeight: '100px', ...style }} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={pid}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdUnit;
