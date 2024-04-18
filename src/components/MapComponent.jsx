import React, { useEffect, useRef } from 'react';

function MapComponent({ address, apiKey }) {
  const mapRef = useRef(null);

  useEffect(()=>{
    if (!address) return;
  })

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new google.maps.Map(mapRef.current, {
        zoom: 12,
        center: { lat: 37.7749, lng: -122.4194 },
      });
    }
}