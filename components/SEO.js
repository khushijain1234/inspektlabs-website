import Head from 'next/head';

const SEO = ({ title, description, image, url, keywords, page }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='canonical' href={url} />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

      <link
        rel='alternate'
        href={`https://inspektlabs.com/${page}`}
        hrefLang='x-default'
      />
      <link
        rel='alternate'
        href={`https://pt.inspektlabs.com/${page}`}
        hrefLang='pt'
      />
      <link
        rel='alternate'
        href={`https://es.inspektlabs.com/${page}`}
        hrefLang='es'
      />
    </Head>
  );
};

export default SEO;
