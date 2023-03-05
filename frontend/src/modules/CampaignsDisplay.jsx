import React from 'react';

import { CampaignCard, Loading, Section } from '../components';

function CampaignsDisplay({ title, isLoading, campaigns }) {
  return (
    <Section title={title} quantity={campaigns.length}>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-10">
          {campaigns &&
            campaigns.length > 0 &&
            campaigns.map((campaign) => <CampaignCard key={campaign.pId} {...campaign} />)}
        </div>
      )}
    </Section>
  );
}

export default CampaignsDisplay;
