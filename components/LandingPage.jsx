// components/LandingPage.jsx
'use client';
import { useState, useEffect, useRef } from 'react';
import HackerBackground from './HackerBackground';

export default function LandingPage({ onAccessGranted }) { 
  const correctPassword = 'SPECATHON';
  const [authenticated, setAuthenticated] = useState(false);
  const [booting, setBooting] = useState(false);
  const [bootText, setBootText] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const [authorizedText, setAuthorizedText] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const passwordInputRef = useRef(null);

  useEffect(() => {
    passwordInputRef.current?.focus();
  }, [showPasscode]);

  const handlePasswordEnter = (e) => {
    if (e.key === 'Enter') {
      if (passwordInputRef.current.value.toUpperCase() === correctPassword) {
        setAuthenticated(true);
        setBooting(true);
        setShowPasscode(false);
        passwordInputRef.current.value = '';
        runBootSequence();
      } else {
        passwordInputRef.current.value = '';
        passwordInputRef.current.classList.add('glitch');
        setTimeout(() => passwordInputRef.current.classList.remove('glitch'), 200);
      }
    }
  };

  useEffect(() => {
    const message = 'Authorized Personnel only.';
    let index = 0;
    let accumulated = '';

    const typeChar = () => {
      if (index < message.length) {
        accumulated += message.charAt(index);
        setAuthorizedText(accumulated);
        index++;
        setTimeout(typeChar, 50);
      } else {
        setShowPasscode(true);
      }
    };

    typeChar();
  }, []);

  const runBootSequence = () => {
    const messages = ['System Online...', 'Preparing Environment...', 'Loading Modules...', 'Finalizing Specs...'];
    let currentMessage = 0;
    let textIndex = 0;
    let accumulatedText = '';

    const typeNextChar = () => {
      if (currentMessage < messages.length) {
        const currentText = messages[currentMessage] || ''; // safeguard
        accumulatedText += currentText.charAt(textIndex);
        setBootText(accumulatedText);
        textIndex++;
        if (textIndex < currentText.length) {
          setTimeout(typeNextChar, 50);
        } else {
          accumulatedText += '\n';
          setBootText(accumulatedText);
          currentMessage++;
          textIndex = 0;
          setTimeout(typeNextChar, 300);
        }
      } else {
        setBooting(false);
        setShowTitle(true);
        onAccessGranted?.();
      }
    };

    typeNextChar();
  };

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#ccc', fontFamily: 'Courier New, monospace', whiteSpace: 'pre-line', zIndex: 10 }}>
      {booting && <pre style={{ marginBottom: '1rem', opacity: 0.8, whiteSpace: 'pre-line' }}>{bootText}</pre>}
      {!authenticated && !booting && (
        <div className="terminal" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{marginBottom: '0.5rem', fontWeight: 'bold'}}>{authorizedText}</p>
          {showPasscode && (
            <>
              <p style={{marginBottom: '0.5rem'}}>Enter passcode:</p>
              <input
                type="password"
                ref={passwordInputRef}
                onKeyDown={handlePasswordEnter}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ccc',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '1.5rem',
                  outline: 'none',
                  width: '70%',
                  caretColor: '#ccc',
                  fontWeight: 'bold',
                }}
                autoComplete="off"
              />
            </>
          )}
        </div>
      )}
      {showTitle && <h1 style={{ fontSize: '4rem', textShadow: '0 0 10px #fff, 0 0 20px #fff', letterSpacing: '2px', textAlign: 'center', marginTop: '1rem' }}>SPECATHON 2025</h1>}
    </div>
  );
}
