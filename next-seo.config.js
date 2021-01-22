const title = 'Lentreprenariat étudiant par killian';
const description =
  'Étudiant Entrepreneur, jaime raconter mes aventures et expériance sur la réalisation de mes projets';

const SEO = {
  title,
  description,
  canonical: 'https://leerob.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://leerob.io',
    title,
    description,
    images: [
      {
        url: 'https://leerob.io/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;
