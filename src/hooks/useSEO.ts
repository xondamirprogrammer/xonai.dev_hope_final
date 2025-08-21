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
  title: 'xonai.dev - AI Solutions & Smart Website Development | Build the Future with AI',
  description: 'Transform your business with cutting-edge AI solutions, smart websites, and automation systems. We build custom AI agents, futuristic websites, and intelligent automation tools that work 24/7.',
  keywords: 'AI development, smart websites, AI agents, chatbots, automation, custom AI solutions, GPT integration, 3D websites, React development, business automation',
  canonical: 'https://xonai.dev',
};

const pageSEO: Record<string, SEOConfig> = {
  '/': {
    title: 'xonai.dev - Build the Future with AI Solutions & Smart Websites',
    description: 'Transform your business with cutting-edge AI solutions, smart websites, and automation systems. Custom AI agents and futuristic web development that works 24/7.',
    keywords: 'AI development, smart websites, AI agents, chatbots, automation, custom AI solutions, GPT integration, 3D websites, React development, business automation',
    canonical: 'https://xonai.dev',
  },
  '/documentation': {
    title: 'xonai.dev - Company Documentation & Services Brochure',
    description: 'Comprehensive documentation of xonai.dev services including AI agent development, smart websites, automation systems, pricing, and our proven process.',
    keywords: 'xonai.dev documentation, AI services brochure, company information, pricing, AI development process, service documentation',
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