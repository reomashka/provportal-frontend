import { Helmet } from 'react-helmet-async';

export const JobInfoPageMetadata = () => {
  return (
    <Helmet>
      <title>Работа. ProvPortal</title>
      <meta name='description' content='Информация по работе. МТА Провинция' />
      <meta
        name='keywords'
        content='МТА, Провинция, ProvPortal, prov portal, пров портал, провпортал'
      />
      <meta property='og:title' content='Работа. ProvPortal' />
      <meta property='og:description' content='Информация по работе. МТА Провинция' />
    </Helmet>
  );
};
