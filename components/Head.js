import NextHead from 'next/head';

const Head = ({ title, keywords, description, url, ogType, img }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name='viewport' content='viewport-fit=cover' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={ogType} />
      <meta property='og:image' content={img} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@agribeenia' />
      <meta name='twitter:creator' content='@agribeenia' />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  );
};

Head.defaultProps = {
  title: 'Alaa portfolio and blog', //title of the page
  keywords:
    'portfolio, blog, web development, nextjs, react, frontend, html, css',
  description: 'Alaa portfolio and blog about web development',
  ogType: 'profile', //article
  url: 'Alla.sd', //url of the page
  img: '', //The URL of the image that appears when someone shares the content to social media
};

export default Head;
