import React, { useEffect } from 'react';
import bannerLargeScreen from '@/assets/banner-wide.jpg';
import bannerSmallScreen from '@/assets/bannerSmallScreen.jpg';
import bannerMediumScreen from '@/assets/bannerMiddleScreen.jpg';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { SCREENS_BREAKPOINT } from '@/utils/Utils';
import { CallToAction } from './CallToActions';

const Banner = () => {
  /*
   *Sur le site de Vinted, la bannière utilisé entre sm et md n'est pas la même.
   *Le custum hook widthWindow permet de connaitre la largeur de la fenêtre
   */
  const widthWindow = useWindowWidth();

  const pickBannerImage: (width: number) => string = (widthWindow: number) => {
    if (widthWindow <= SCREENS_BREAKPOINT.Small) {
      return bannerSmallScreen;
    } else if (widthWindow <= SCREENS_BREAKPOINT.Medium) {
      return bannerMediumScreen;
    } else {
      return bannerLargeScreen;
    }
  };

  const bannerImage: string = pickBannerImage(widthWindow);

  return (
    <section
      id="banner"
      className="flex flex-col items-center justify-center sm:flex sm:flex-row-reverse sm:relative sm:z-10  "
    >
      <img
        src={bannerImage}
        alt="bannière"
        className="object-cover w-full max-h-64 sm:min-h-[420px]  sm:object-cover   "
      />
      <CallToAction />
    </section>
  );
};

export default Banner;
