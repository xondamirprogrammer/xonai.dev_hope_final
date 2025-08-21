import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function Documentation() {
  const navigate = useNavigate();
  
  // SEO for documentation page
  useSEO({
    title: 'AI Development Services Documentation | Pricing & Process Guide | xonai.dev',
    description: 'Complete guide to xonai.dev AI development services. Learn about custom GPT agents, smart website development, pricing, our proven 4-step process, and how we increase business efficiency by 300%.',
    keywords: 'AI development services documentation, custom GPT agent pricing, AI chatbot development process, smart website development guide, business automation services, AI development agency portfolio, xonai.dev services, AI transformation consultation, intelligent automation solutions',
  });

  // This useEffect hook will run once when the component loads
  useEffect(() => {
    // Scrolls the window to the top left corner (0, 0)
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs only on mount

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <>
      <style>{`
        /* General Body Styles */
        .documentation-body {
            background-color: #0a0a1a;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: clamp(1rem, 5vw, 2rem);
            margin: 0;
            box-sizing: border-box;
            min-height: 100vh;
            font-display: swap;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* Page Container Styles */
        .page {
            background-color: #0f0f23;
            color: #E0E0E0;
            font-family: 'Inter', sans-serif;
            border: 1px solid #333;
            margin-bottom: 40px;
            padding: clamp(1.5rem, 5vw, 2.5rem);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            width: 95%; 
            max-width: 820px;
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            will-change: transform;
            contain: layout style paint;
        }

        /* Grid background effect */
        .page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 50px 50px;
            opacity: 0.5;
            pointer-events: none;
        }

        /* Typography */
        .page h1, .page h2, .page h3 {
            font-weight: 700;
            color: #FFFFFF;
        }
        .page h1 { 
            font-size: clamp(2.25rem, 5vw + 1rem, 3rem); 
            margin-bottom: 16px; 
            line-height: 1.2; 
        }
        .page h2 { 
            font-size: clamp(1.75rem, 4vw + 0.5rem, 2rem); 
            margin-bottom: 24px; 
            border-bottom: 2px solid #333; 
            padding-bottom: 12px; 
        }
        .page h3 { 
            font-size: clamp(1.1rem, 3vw, 1.25rem); 
            margin-bottom: 8px; 
        }
        .page p { 
            font-size: clamp(0.9rem, 2vw, 1rem); 
            line-height: 1.6; 
            color: #B0B0B0; 
        }
        .page ul { list-style-type: none; padding-left: 0; }
        .page li { margin-bottom: 12px; display: flex; align-items: flex-start; }
        .page li::before { content: '✓'; color: #8A2BE2; font-size: 20px; margin-right: 12px; }

        /* Special Text & Links */
        .gradient-text {
            background: linear-gradient(to right, #4A90E2, #9013FE);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }
        .page a {
            color: #E0E0E0;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .page a:hover {
            color: #4A90E2;
            text-decoration: underline;
        }

        /* Header & Footer */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #333;
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 20px;
        }
        .footer {
            margin-top: auto;
            padding-top: 20px;
            border-top: 1px solid #333;
            font-size: 12px;
            color: #777;
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }

        /* Logo Styles */
        .logo {
            display: flex;
            align-items: center;
        }
        .logo-box {
            width: 32px;
            height: 32px;
            background: linear-gradient(to right, #4A90E2, #9013FE);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            color: white;
            margin-right: 12px;
        }
        .logo-text {
            font-size: 20px;
            font-weight: bold;
        }

        /* Page Specific Styles */
        .cover-page {
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 80vh;
        }
        .cover-page h1 { font-size: clamp(2.5rem, 10vw, 4rem); }
        .cover-page p { font-size: clamp(1rem, 4vw, 1.25rem); color: #E0E0E0; }

        /* Component Styles */
        .service-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 20px;
        }
        .process-step {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
        }
        .step-number {
            font-size: clamp(2.5rem, 8vw, 3rem);
            font-weight: bold;
            color: rgba(255, 255, 255, 0.15);
            margin-right: 20px;
            line-height: 1;
        }
        .pricing-table {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .pricing-tier {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 24px;
            text-align: center;
        }
        .pricing-tier h3 {
            font-size: 24px;
            margin-bottom: 16px;
        }
        .pricing-tier .price {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        .pricing-tier .per {
            font-size: 14px;
            color: #B0B0B0;
            margin-bottom: 24px;
        }
       
        .contact-info {
            list-style-type: none;
            padding: 0;
        }
        .contact-info li {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #222;
        }
        .contact-info li:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .contact-info li::before {
            content: '';
            margin-right: 0;
        }
        .contact-info h3 {
            margin-bottom: 4px;
        }
       
        /* Clickable elements */
        .clickable {
            cursor: pointer;
            transition: opacity 0.3s ease;
        }
        .clickable:hover {
            opacity: 0.8;
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 640px) {
            .header {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
            .footer {
                flex-direction: column;
                gap: 15px;
            }
        }
      `}</style>

      <div className="documentation-body">
        {/* Page 1: Cover Page */}
        <div className="page cover-page">
          <div style={{ textAlign: 'center' }}>
            <div className="logo clickable" onClick={navigateToHome} style={{ justifyContent: 'center', marginBottom: '40px' }}>
              <div className="logo-box" style={{ width: '80px', height: '80px', borderRadius: '12px', fontSize: '36px' }}>X</div>
            </div>
            <h1>Build the <span className="gradient-text">Future</span> with AI</h1>
            <p>Your Partner in Intelligent Automation and Smart Web Solutions.</p>
            <p style={{ fontSize: '14px', marginTop: '40px', color: '#777' }}>xonai.dev</p>
          </div>
        </div>

        {/* Page 2: Introduction */}
        <div className="page">
          <div className="header">
            <div className="logo clickable" onClick={navigateToHome}>
              <div className="logo-box">X</div>
              <div className="logo-text">xonai.dev</div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '14px', color: '#B0B0B0' }}>Introduction</div>
          </div>
          <h2 className="gradient-text">Beyond the Code: We Engineer Intelligence.</h2>
          <p>At xonai.dev, we believe technology should do more than just function—it should think, adapt, and accelerate your growth. We are a dedicated agency specializing in crafting bespoke AI solutions and intelligent web platforms that work for you, 24/7.</p>
          <p>We transform complex business challenges into seamless, automated systems. From futuristic websites that captivate and convert, to custom AI agents that handle tasks with human-like intelligence, our goal is to build the impossible and make your business extraordinary.</p>
          <h3 style={{ marginTop: '40px', borderTop: '1px solid #333', paddingTop: '20px' }}>Our Core Philosophy</h3>
          <ul>
            <li><strong>Innovation First:</strong> We leverage cutting-edge AI and 3D web technologies to ensure your solution is not just current, but future-proof.</li>
            <li><strong>Client-Centric:</strong> Your vision is the blueprint. We align our entire process with your goals to deliver solutions that solve real-world problems.</li>
            <li><strong>Efficiency by Design:</strong> We build systems that automate workflows, save time, and unlock new levels of productivity for your business.</li>
          </ul>
          <div className="footer">
            <div>xonai.dev | Company Brochure</div>
            <div>Page 2</div>
          </div>
        </div>

        {/* Page 3: Our Services */}
        <div className="page">
          <div className="header">
            <div className="logo clickable" onClick={navigateToHome}>
              <div className="logo-box">X</div>
              <div className="logo-text">xonai.dev</div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '14px', color: '#B0B0B0' }}>Our Services</div>
          </div>
          <h2 className="gradient-text">A Spectrum of Intelligent Solutions.</h2>
          <div className="service-card">
            <h3>Smart Websites</h3>
            <p>Beautiful, modern websites built with intelligence and style. We create digital experiences that don't just look amazing—they work smarter.</p>
            <ul>
              <li>Futuristic landing pages & 3D interactive designs</li>
              <li>Portfolios, SaaS platforms, and eCommerce solutions</li>
              <li>Full SEO setup and mobile-first responsive design</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>AI Agents & Chatbots</h3>
            <p>Custom GPT-powered bots that talk, think, and take action. Trained on your business data for unparalleled accuracy and relevance.</p>
            <ul>
              <li>Booking bots, support agents, and lead qualification bots</li>
              <li>Multi-platform deployment (Web, Telegram, WhatsApp)</li>
              <li>Seamless integration with your existing tools</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Automation Systems & Custom AI Tools</h3>
            <p>End-to-end workflows that connect your tools and run your business on autopilot, alongside bespoke AI tools for your unique needs.</p>
            <ul>
              <li>CRM + Notion + Google Sheets automation</li>
              <li>AI-powered summarizers, generators, and data extractors</li>
              <li>Hosted tools or embeddable widgets for your platforms</li>
            </ul>
          </div>
          <div className="footer">
            <div>xonai.dev | Company Brochure</div>
            <div>Page 3</div>
          </div>
        </div>

        {/* Page 4: Our Process */}
        <div className="page">
          <div className="header">
            <div className="logo clickable" onClick={navigateToHome}>
              <div className="logo-box">X</div>
              <div className="logo-text">xonai.dev</div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '14px', color: '#B0B0B0' }}>Our Process</div>
          </div>
          <h2 className="gradient-text">From Vision to Reality.</h2>
          <p>Our proven methodology ensures your vision is translated into a powerful, effective solution with precision and transparency at every step.</p>
          <div style={{ marginTop: '30px' }}>
            <div className="process-step">
              <div className="step-number">01</div>
              <div>
                <h3>Vision Alignment</h3>
                <p>We start by deeply understanding your goals, needs, and automation ideas to map out a clear, strategic roadmap for your project.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div>
                <h3>Visual Prototype</h3>
                <p>See your solution before it's built. We present futuristic UI mockups and system blueprints for your feedback and approval.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div>
                <h3>AI Logic Build</h3>
                <p>Our expert developers get to work, building your tailored AI agents, automations, or smart website with clean, scalable code.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div>
                <h3>Launch & Iterate</h3>
                <p>We ensure a fast, seamless deployment, followed by continuous monitoring and performance upgrades to keep your solution at the cutting edge.</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <div>xonai.dev | Company Brochure</div>
            <div>Page 4</div>
          </div>
        </div>

        {/* Page 5: Pricing */}
        <div className="page">
          <div className="header">
            <div className="logo clickable" onClick={navigateToHome}>
              <div className="logo-box">X</div>
              <div className="logo-text">xonai.dev</div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '14px', color: '#B0B0B0' }}>Pricing Packages</div>
          </div>
          <h2 className="gradient-text">Solutions Scaled to Your Needs.</h2>
          <p>We offer clear, transparent pricing packages designed to provide maximum value whether you're a solo founder or a growing enterprise. For custom projects, please contact us for a tailored quote.</p>
          <div className="pricing-table">
            <div className="pricing-tier">
              <h3>Smart Website</h3>
              <p className="price">Starting at $600</p>
              <p className="per">One-time project fee</p>
              <ul>
                <li>Responsive Design</li>
                <li>3D Interactive Elements</li>
                <li>SEO Setup</li>
                <li>Contact Automation</li>
                <li>CMS Integration</li>
              </ul>
            </div>
            <div className="pricing-tier">
              <h3>AI Agent / Chatbot</h3>
              <p className="price">Starting at $750</p>
              <p className="per">One-time project fee</p>
              <ul>
                <li>Custom GPT Training</li>
                <li>Lead Capture / Booking</li>
                <li>Multi-Channel Support</li>
                <li>Website Integration</li>
                <li>Secure Data Handling</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#777' }}>All packages include post-launch support. Monthly maintenance plans are available.</p>
          <div className="footer">
            <div>xonai.dev | Company Brochure</div>
            <div>Page 5</div>
          </div>
        </div>

        {/* Page 6: Contact */}
        <div className="page">
          <div className="header">
            <div className="logo clickable" onClick={navigateToHome}>
              <div className="logo-box">X</div>
              <div className="logo-text">xonai.dev</div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '14px', color: '#B0B0B0' }}>Get in Touch</div>
          </div>
          <h2 className="gradient-text">Let's Build Something Smart.</h2>
          <p>Ready to transform your business with intelligent automation and design? We're here to help you navigate the future. Reach out to us, and let's start the conversation. We typically respond within 24 hours.</p>
          <ul className="contact-info" style={{ marginTop: '40px' }}>
            <li>
              <h3>Email</h3>
              <a href="mailto:xondamir@xonai.dev">xondamir@xonai.dev</a>
            </li>
            <li>
              <h3>Phone</h3>
              <p>+998901326467</p>
            </li>
            <li>
              <h3>Telegram (Fastest Response)</h3>
              <a href="https://t.me/M_X_Mirsaidov" target="_blank" rel="noopener noreferrer">@M_X_Mirsaidov</a>
            </li>
            <li>
              <h3>Website</h3>
              <a href="https://xonai.dev" target="_blank" rel="noopener noreferrer">www.xonai.dev</a>
            </li>
          </ul>
          <div className="footer">
            <div>xonai.dev | Company Brochure</div>
            <div>Page 6</div>
          </div>
        </div>
      </div>
    </>
  );
}
