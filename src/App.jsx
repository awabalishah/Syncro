import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { WhatIsSyncro } from './components/WhatIsSyncro';
import { HowItWorks } from './components/HowItWorks';
import { Technology } from './components/Technology';
import { Results } from './components/Results';
import { ProfitShare } from './components/ProfitShare';
import { Referral } from './components/Referral';
import { GrowthCalculator } from './components/GrowthCalculator';
import { SuccessStories } from './components/SuccessStories';

function App() {
  return (
    <Layout>
      <Hero />
      <GrowthCalculator />
      <WhatIsSyncro />
      <HowItWorks />
      <Technology />
      <Results />
      <SuccessStories />
      <ProfitShare />
      <Referral />



      {/* Sections will be added here */}
    </Layout>
  );
}

export default App;
