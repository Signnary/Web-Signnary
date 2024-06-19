import { LandingPage } from '../components/LandingPage/LandingPage';
import { FeaturesImages } from '../components/FeaturesImages/FeaturesImages';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
export function HomePage() {
  return (
    <>
      <HeaderSimple />
      <LandingPage />
      <FeaturesImages />
      <FooterLinks />
    </>
  );
}
