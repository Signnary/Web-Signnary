import { LandingPage } from '../components/LandingPage/LandingPage';
import { DropzoneButton } from '@/components/DropzoneButton/DropzoneButton';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import { FooterLinks } from '@/components/FooterLinks/FooterLinks';
import { Subgrid } from '@/components/Subgrid/Subgrid';
export function PredictPage() {
    return (
      <>
      <HeaderSimple />
      <LandingPage/>
      <DropzoneButton />
      <FooterLinks />
      </>
    );
  }
  