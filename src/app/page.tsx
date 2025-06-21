"use client";
import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  city: string;
  phone: string;
}

export default function HomePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    city: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for signing up! We&apos;ll notify you when Noorion launches.');
    setFormData({ name: '', email: '', city: '', phone: '' });
  };

  useEffect(() => {
    const quranAudio = document.getElementById('quranPlayer') as HTMLAudioElement;
    const unmuteOverlay = document.getElementById('unmuteOverlay');

    function unmuteAudio() {
      if (quranAudio && unmuteOverlay) {
        quranAudio.muted = false;
        quranAudio.play().catch(err => console.warn("Audio play issue:", err));
        unmuteOverlay.style.display = 'none';
        document.removeEventListener('click', unmuteAudio);
      }
    }

    document.addEventListener('click', unmuteAudio);

    return () => {
      document.removeEventListener('click', unmuteAudio);
    };
  }, []);

  return (
    <>
      <audio id="quranPlayer" autoPlay muted loop>
        <source src="https://verses.quran.com/Abdurrahmaan_As-Sudais/mp3/001.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div id="unmuteOverlay" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        zIndex: 9999,
        cursor: 'pointer'
      }}>
        🔊 Tap anywhere to unmute Quran audio
      </div>

      <div style={{
        fontFamily: "'Inter', sans-serif",
        margin: 0,
        padding: 0,
        backgroundColor: '#fff8e7',
        color: '#0b132b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <header style={{
          width: '100%',
          maxWidth: '900px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <span style={{
            background: '#fff3ce',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            fontSize: '0.9rem',
            color: '#0b132b',
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            Coming Soon
          </span>
          <h1 style={{ marginBottom: '1rem' }}>
            Welcome to <span style={{ color: '#f6b63c' }}>Noorion</span>
          </h1>
          <p>
            The modern Islamic social platform connecting Muslims worldwide through faith, knowledge, and community. Join thousands of believers building a stronger Ummah together.
          </p>
        </header>

        {/* Sign Up Section */}
        <section style={{
          width: '100%',
          maxWidth: '900px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            border: '1px solid #ddd',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Sign Up for the Release Date</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                name="city"
                placeholder="Your city/state"
                value={formData.city}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Contact number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#f6b63c',
                  border: 'none',
                  padding: '0.75rem',
                  width: '100%',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#0b132b',
                  fontSize: '1rem'
                }}
              >
                Sign Up
              </button>
            </form>
            <p>Be notified when Noorion launches</p>
          </div>
        </section>

        {/* Why Section */}
        <section style={{
          width: '100%',
          maxWidth: '900px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Why the Ummah Needs Noorion</h2>
          <p style={{ marginBottom: '2rem' }}>
            In today&apos;s digital age, Muslims are scattered across countless platforms that don&apos;t serve our values or needs. Noorion bridges this gap by providing a dedicated space where faith meets technology.
          </p>
          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            marginTop: '2rem'
          }}>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ color: '#f6b63c', marginBottom: '1rem' }}>Community Connection</h3>
              <p>Connect with verified Muslims in your area and around the world in a safe, moderated environment.</p>
            </div>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ color: '#f6b63c', marginBottom: '1rem' }}>Authentic Content</h3>
              <p>Explore meaningful content centered around Islamic values and unity.</p>
            </div>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ color: '#f6b63c', marginBottom: '1rem' }}>Privacy First</h3>
              <p>Your data and conversations are protected with Islamic values and modern security in mind.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{
          width: '100%',
          maxWidth: '900px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Everything You Need in One App</h2>
          <p style={{ marginBottom: '2rem' }}>
            From prayer times to community connections, Noorion provides comprehensive tools for the modern Muslim lifestyle.
          </p>
          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            marginTop: '2rem'
          }}>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Find Your Nearest Masjid</h3>
              <p>Locate mosques in your area with detailed information, prayer times, and contact details.</p>
            </div>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Accurate Qibla Direction</h3>
              <p>Get precise Qibla direction anywhere in the world using GPS technology.</p>
            </div>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Prayer Times & Reminders</h3>
              <p>Never miss a prayer with accurate times based on your location and customizable notifications.</p>
            </div>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Daily Duas & Reminders</h3>
              <p>Receive authentic daily supplications and Islamic reminders curated for you.</p>
            </div>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Secure Chat Functions</h3>
              <p>Connect with brothers and sisters in separate, moderated chat environments.</p>
            </div>
            <div style={{
              border: '1px solid #f6b63c',
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Local Islamic Classes</h3>
              <p>Discover and enroll in classes offered by your local masjid and students of knowledge.</p>
            </div>
          </div>
        </section>

        {/* Community Metrics */}
        <section style={{
          width: '100%',
          maxWidth: '900px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Join a Growing Community</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '2rem',
            fontWeight: 'bold',
            color: '#f6b63c'
          }}>
            <div>
              <div style={{ fontSize: '1.75rem' }}>1.8B+</div>
              <div>Muslims Worldwide</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem' }}>3mil+</div>
              <div>Mosques Globally</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem' }}>24/7</div>
              <div>Spiritual Connection</div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{
          backgroundColor: '#0b132b',
          color: 'white',
          padding: '2rem',
          width: '100%',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Be Part of Something Greater</h2>
          <p style={{ marginBottom: '2rem' }}>
            Help us build the platform the Ummah deserves. Sign up now to be notified the moment Noorion launches.
          </p>
          <div style={{
            border: '1px solid #ddd',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '2rem',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                name="city"
                placeholder="Your city/state"
                value={formData.city}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Contact number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#f6b63c',
                  border: 'none',
                  padding: '0.75rem',
                  width: '100%',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#0b132b',
                  fontSize: '1rem'
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          width: '100%',
          textAlign: 'center',
          padding: '2rem',
          fontSize: '0.9rem',
          color: '#555',
          backgroundColor: '#f4f4f4'
        }}>
          &copy; 2024 Noorion. Building the future of Islamic community connection.
        </footer>
      </div>
    </>
  );
}

