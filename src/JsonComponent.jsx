import React from "react";
import { Helmet } from "react-helmet";

const JsonComponent = () => {
  const title = "Cloud Website";
  const description = "Best Cloud updated";
  const author = "fery oktabrian";
  const datePublished = "2024-11-17";
  const jssonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": window.location.href,
    },
    headline: title,
    description: description,
    author: {
      "@type": "person",
      name: author,
    },
    datePublished: datePublished,
    publisher: {
      "@type": "Organization",
      name: author,
      logo: {
        "@type": "ImageObject",
        url: "https://www.example.com/images/logo.png",
      },
    },
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jssonLd)}</script>
    </Helmet>
  );
};

export default JsonComponent;
