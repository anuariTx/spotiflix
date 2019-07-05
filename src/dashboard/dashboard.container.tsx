import React from 'react';

import { DashboardComponent } from '@dashboard/dashboard.component';
import { GridContainer } from '@album/grid.container';
import { CarouselContainer } from '@album/carousel.container';

export const DashboardContainer = () => {
  return (
    <div>
      <DashboardComponent />
      <GridContainer
        ids={[
          '4ENxWWkPImVwAle9cpJ12I',
          '6vuykQgDLUCiZ7YggIpLM9',
          '47xaqCsJcYFWqD1gwujl1T',
          '1DBkJIEoeHrTX4WCBQGcCi',
          '7eyQXxuf2nGj9d2367Gi5',
          '36lJLPoPPOKNFddTAcirnc',
          '1oW3v5Har9mvXnGk0x4fHm',
          '6V9YnBmFjWmXCBaUVRCVXP',
          '19RUXBFyM4PpmrLRdtqWbp',
          '7dxKtc08dYeRVHt3p9CZJn',
        ]}
        areRound={false}
      />
      <CarouselContainer
        ids={[
          '4ENxWWkPImVwAle9cpJ12I',
          '6vuykQgDLUCiZ7YggIpLM9',
          '47xaqCsJcYFWqD1gwujl1T',
          '1DBkJIEoeHrTX4WCBQGcCi',
          '7eyQXxuf2nGj9d2367Gi5',
          '36lJLPoPPOKNFddTAcirnc',
          '1oW3v5Har9mvXnGk0x4fHm',
          '6V9YnBmFjWmXCBaUVRCVXP',
          '19RUXBFyM4PpmrLRdtqWbp',
          '7dxKtc08dYeRVHt3p9CZJn',
        ]}
        areRound={false}
      />
    </div>
  );
};
