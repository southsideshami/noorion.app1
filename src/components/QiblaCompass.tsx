"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface Location {
  latitude: number;
  longitude: number;
}

const KAABA_COORDS = {
  latitude: 21.4225,
  longitude: 39.8262
};

export default function QiblaCompass() {
  const [location, setLocation] = useState<Location | null>(null);
  const [qiblaDirection, setQiblaDirection] = useState<number>(0);
  const [compassHeading, setCompassHeading] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [permissionGranted, setPermissionGranted] = useState(false);
  const compassRef = useRef<HTMLDivElement>(null);

  // Calculate Qibla direction
  const calculateQiblaDirection = (lat: number, lng: number): number => {
    const lat1 = lat * Math.PI / 180;
    const lat2 = KAABA_COORDS.latitude * Math.PI / 180;
    const lng1 = lng * Math.PI / 180;
    const lng2 = KAABA_COORDS.longitude * Math.PI / 180;

    const y = Math.sin(lng2 - lng1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
    
    let qibla = Math.atan2(y, x) * 180 / Math.PI;
    qibla = (qibla + 360) % 360;
    
    return qibla;
  };

  // Calculate distance to Kaaba
  const calculateDistance = (lat: number, lng: number): number => {
    const R = 6371; // Earth's radius in km
    const lat1 = lat * Math.PI / 180;
    const lat2 = KAABA_COORDS.latitude * Math.PI / 180;
    const deltaLat = (KAABA_COORDS.latitude - lat) * Math.PI / 180;
    const deltaLng = (KAABA_COORDS.longitude - lng) * Math.PI / 180;

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  // Get user location
  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        const qibla = calculateQiblaDirection(latitude, longitude);
        setQiblaDirection(qibla);
        setPermissionGranted(true);
        setIsLoading(false);
        setError(''); // Clear any previous errors
      },
      (error) => {
        // Don't log to console, just handle the error gracefully
        let errorMessage = 'Unable to get your location.';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location permission denied. Please enable location access in your browser settings.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is currently unavailable. Please try again.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out. Please check your connection and try again.';
            break;
          default:
            errorMessage = 'Unable to determine your location. Please try again.';
        }
        
        setError(errorMessage);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // Increased timeout
        maximumAge: 300000 // 5 minutes cache
      }
    );
  }, []);

  // Handle device orientation for compass
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setCompassHeading(event.alpha);
      }
    };

    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  // Get location on component mount
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  // Calculate the rotation needed for the compass
  const compassRotation = qiblaDirection - compassHeading;
  const distance = location ? calculateDistance(location.latitude, location.longitude) : 0;

  if (isLoading) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
        <div className="flex items-center justify-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gold"></div>
          <span className="text-ivory">Getting your location...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
        <div className="text-center space-y-3">
          <MapPin className="mx-auto h-8 w-8 text-red-400" />
          <p className="text-red-300 text-sm">{error}</p>
          <button
            onClick={getLocation}
            className="px-4 py-2 bg-gold text-navy rounded-lg hover:bg-gold/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Navigation className="h-5 w-5 text-gold" />
          <h3 className="text-lg font-serif text-gold">Qibla Direction</h3>
        </div>

        {/* Compass */}
        <div className="relative w-48 h-48 mx-auto">
          <div 
            ref={compassRef}
            className="w-full h-full rounded-full border-4 border-gold/30 relative overflow-hidden"
            style={{
              transform: `rotate(${compassRotation}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Compass background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy to-dark-navy rounded-full" />
            
            {/* Cardinal directions */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gold font-serif text-lg font-bold">N</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gold font-serif text-lg font-bold transform rotate-90 translate-x-16">E</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gold font-serif text-lg font-bold transform rotate-180">S</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gold font-serif text-lg font-bold transform -rotate-90 -translate-x-16">W</div>
            </div>

            {/* Qibla indicator */}
            <div 
              className="absolute top-1/2 left-1/2 w-1 h-16 bg-gold transform -translate-x-1/2 -translate-y-1/2 origin-bottom"
              style={{ transform: `translate(-50%, -50%) rotate(${qiblaDirection}deg)` }}
            />
            
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gold rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Current heading indicator */}
          <div 
            className="absolute top-1/2 left-1/2 w-1 h-20 bg-red-500 transform -translate-x-1/2 -translate-y-1/2 origin-bottom"
            style={{ transform: `translate(-50%, -50%) rotate(${compassHeading}deg)` }}
          />
        </div>

        {/* Information */}
        <div className="space-y-2 text-sm text-ivory/80">
          <p>Qibla Direction: <span className="text-gold font-semibold">{Math.round(qiblaDirection)}°</span></p>
          <p>Distance to Kaaba: <span className="text-gold font-semibold">{Math.round(distance)} km</span></p>
          {permissionGranted && (
            <p>Your Location: <span className="text-gold font-semibold">
              {location?.latitude.toFixed(4)}, {location?.longitude.toFixed(4)}
            </span></p>
          )}
        </div>

        {/* Instructions */}
        <div className="text-xs text-ivory/60 bg-white/5 rounded-lg p-3">
          <p>• Point your device towards the red arrow</p>
          <p>• The gold arrow shows the Qibla direction</p>
          <p>• Face the direction of the gold arrow to pray</p>
        </div>
      </div>
    </div>
  );
} 