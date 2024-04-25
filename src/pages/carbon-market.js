import React  from 'react';
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import CarbonMarketDetails from '../components/carbonMarket/carbon-market-details';

const CarbonMarket = () => {
  return (
    <Layout page={true}>
      <CarbonMarketDetails/>
    </Layout>
  )
}
export default CarbonMarket;

export const Head = () => <Seo title="Carbon Market" />