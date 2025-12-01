import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, type = "website" }) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Mahesh Badgujar`;

    // Helper to update meta tags
    const updateMeta = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard Meta
    updateMeta("name", "description", description);

    // Open Graph
    updateMeta("property", "og:title", `${title} | Mahesh Badgujar`);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:type", type);
    // Safe access to window.location
    try {
      updateMeta("property", "og:url", window.location.href);
    } catch (e) {
      // Ignore in sandbox
    }

    // Schema.org JSON-LD
    const scriptId = "schema-json-ld";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mahesh Badgujar",
      url: typeof window !== "undefined" ? window.location.href : "",
      jobTitle: "Full-Stack Developer",
      knowsAbout: [
        "Web Development",
        "App Development",
        "Automation",
        "React",
        "Node.js",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
      },
    };

    script.textContent = JSON.stringify(schemaData);
  }, [title, description, type]);

  return null;
};

export default SEO;
