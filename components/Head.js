import NextHead from 'next/head';

const Head = ({ title, keywords, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  );
};

Head.defaultProps = {
  title: 'Alaa portfolio and blog',
  keywords:
    'portfolio, blog, web development, nextjs, react, frontend, html, css',
  description: 'Alaa portfolio and blog about web development',
};

export default Head;
