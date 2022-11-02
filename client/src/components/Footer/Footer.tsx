import footer from './Footer.module.scss';
import { FooterBack } from './FooterBack';
import { FooterLogo } from './FooterLogo';
import { FooterNav } from './FooterNav';

export const Footer = () => (
  <footer className={footer.footer}>
    <FooterLogo />
    <FooterNav />
    <FooterBack />
  </footer>
);
