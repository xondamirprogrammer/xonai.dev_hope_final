import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';

// Force dark mode on application start
function AppWithDarkMode() {
  useEffect(() => {
    // Add dark class to html element and ensure it stays
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    
    // Remove any light mode classes that might exist
    document.documentElement.classList.remove('light');
    
    // Prevent any external scripts from changing the theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (!document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark');
          }
          document.documentElement.classList.remove('light');
        }
      });
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <App />
      <Toaster 
        position="top-center" 
        richColors={false}
        closeButton
        theme="dark"
        toastOptions={{
          style: {
            background: 'hsl(0 0% 3.9%)',
            border: '1px solid hsl(0 0% 14.9%)',
            color: 'hsl(0 0% 98%)',
          },
          className: 'custom-toast',
          duration: 4000,
        }}
        offset={20}
      />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithDarkMode />
  </StrictMode>
);