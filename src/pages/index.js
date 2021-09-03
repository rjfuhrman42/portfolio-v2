import React from 'react';
// import { Helmet } from 'react-helmet';
import App from '../components/App';
import SEO from '../components/SEO/seo';
// import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  // const { title, lang, description } = headData;

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description} />
        <meta property="og:image" content="images/memory-game.jpg" />
      </Helmet> */}
      <SEO keywords={[`reid`, `fuhrman`]} title="Reid Fuhrman" />
      <App />
    </>
  );
};
