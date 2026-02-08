import React from 'react';
import { Hero } from '../components/Hero';
import { WhatIsSyncro } from '../components/WhatIsSyncro';
import { HowItWorks } from '../components/HowItWorks';
import { Technology } from '../components/Technology';
import { Results } from '../components/Results';
import { ProfitShare } from '../components/ProfitShare';
import { Referral } from '../components/Referral';
import { GrowthCalculator } from '../components/GrowthCalculator';
// Trustpilot testimonials - commented out until we have legitimate reviews
// import { SuccessStories } from '../components/SuccessStories';
import { FAQ } from '../components/FAQ';
import { Features } from '../components/Features';

export function Home() {
    return (
        <>
            <Hero />
            <WhatIsSyncro />
            <GrowthCalculator />
            <HowItWorks />
            <Technology />
            <Features />
            <Results />
            {/* <SuccessStories /> */}
            <FAQ />
            <ProfitShare />
            <Referral />
        </>
    );
}
