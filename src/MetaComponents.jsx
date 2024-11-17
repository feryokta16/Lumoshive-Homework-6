import React from "react";
import { Helmet } from "react-helmet";

const MetaComponents = () => {
  const title = "Home";
  const description = "Best Cloud Website";
  const keywords = "Cloud, Website, Hosting";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default MetaComponents;
