import { Helmet } from 'react-helmet-async';

const MetaInfo = ({
  meta = [],
  defer = false,
  lang = 'en',
  title = 'Home',
  locale = 'en_US',
  description = 'Home description'
}) => {
  const url = window?.location.href || 'unknown';

  return (
    <Helmet
      defer={defer}
      title={title}
      htmlAttributes={{ lang }}
      titleTemplate={`Let's trip | %s`}
      link={[
        {
          rel: 'canonical',
          href: url
        }
      ]}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:site_name',
          content: "Let's trip"
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:locale',
          content: locale
        },
        {
          property: 'og:image',
          content: `https://www.bnf.fr/sites/default/files/2019-10/btv1b8457904c_f1.jpg`
        },
        {
          name: 'author',
          content: 'Liildev'
        }
      ].concat(meta)}
    />
  );
};

export default MetaInfo;
