import { Helmet } from 'react-helmet-async';

export const TransportListPageMetadata = () => {
  return (
    <Helmet>
      <title>Транспорт. ProvPortal</title>
      <meta name='description' content='Информация по всему транспорту. МТА Провинция' />
      <meta
        name='keywords'
        content='МТА, Провинция, ProvPortal, prov portal, пров портал, провпортал'
      />
      <meta property='og:title' content='Транспорт. ProvPortal' />
      <meta property='og:description' content='Информация по всему транспорту. МТА Провинция' />
    </Helmet>
  );
};
