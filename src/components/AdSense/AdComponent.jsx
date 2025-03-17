import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8133770374688667"
      data-ad-slot="3237974213"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  );
};

export default AdComponent;
