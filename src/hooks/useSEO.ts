import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

const defaultSEO: SEOConfig = {
  title: 'AI Development Agency | Custom GPT Agents & Smart Websites | xonai.dev',
  description: 'Leading AI development agency creating custom GPT agents, intelligent chatbots, and futuristic 3D websites. Expert AI automation solutions that increase efficiency by 300%. Get your AI transformation today.',
  keywords: 'AI development agency, custom GPT agents, AI chatbot development, business automation solutions, 3D interactive websites, intelligent web applications, AI workflow automation, custom AI tools, machine learning integration, conversational AI, AI agent training, smart website development, React AI applications, AI-powered business tools, automated lead generation, AI customer service',
  canonical: 'https://xonai.dev',
};

const pageSEO: Record<string, SEOConfig> = {
  '/': {
    title: 'AI Development Agency | Custom GPT Agents & Smart Websites | xonai.dev',
    description: 'Leading AI development agency creating custom GPT agents, intelligent chatbots, and futuristic 3D websites. Expert AI automation solutions that increase efficiency by 300%. Get your AI transformation today.',
    keywords: 'AI development agency, custom GPT agents, AI chatbot development, business automation solutions, 3D interactive websites, intelligent web applications, AI workflow automation, custom AI tools, machine learning integration, conversational AI, AI agent training, smart website development, React AI applications, AI-powered business tools, automated lead generation, AI customer service',
    canonical: 'https://xonai.dev',
  },
  '/documentation': {
    title: 'AI Development Services Documentation | Pricing & Process Guide | xonai.dev',
    description: 'Complete guide to xonai.dev AI development services. Learn about custom GPT agents, smart website development, pricing, our proven 4-step process, and how we increase business efficiency by 300%.',
    keywords: 'AI development services documentation, custom GPT agent pricing, AI chatbot development process, smart website development guide, business automation services, AI development agency portfolio, xonai.dev services, AI transformation consultation, intelligent automation solutions',
    canonical: 'https://xonai.dev/documentation',
  },
};

export function useSEO(customSEO?: SEOConfig) {
  const location = useLocation();

  useEffect(() => {
    const currentPageSEO = pageSEO[location.pathname] || {};
    const seoConfig = { ...defaultSEO, ...currentPageSEO, ...customSEO };

    // Update title
    if (seoConfig.title) {
      document.title = seoConfig.title;
    }

    // Update or create meta tags
    updateMetaTag('description', seoConfig.description);
    updateMetaTag('keywords', seoConfig.keywords);
    updateMetaTag('og:title', seoConfig.ogTitle || seoConfig.title);
    updateMetaTag('og:description', seoConfig.ogDescription || seoConfig.description);
    updateMetaTag('twitter:title', seoConfig.twitterTitle || seoConfig.title);
    updateMetaTag('twitter:description', seoConfig.twitterDescription || seoConfig.description);

    // Update canonical URL
    updateCanonical(seoConfig.canonical || `https://xonai.dev${location.pathname}`);

    // Update og:url
    updateMetaTag('og:url', `https://xonai.dev${location.pathname}`);

  }, [location.pathname, customSEO]);
}

function updateMetaTag(name: string, content?: string) {
  if (!content) return;

  const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  
  let metaTag = document.querySelector(selector) as HTMLMetaElement;
  
  if (!metaTag) {
    metaTag = document.createElement('meta');
    if (isProperty) {
      metaTag.setAttribute('property', name);
    } else {
      metaTag.setAttribute('name', name);
    }
    document.head.appendChild(metaTag);
  }
  
  metaTag.setAttribute('content', content);
}

function updateCanonical(url: string) {
  let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  
  canonicalTag.setAttribute('href', url);
}