import { PageNavLink } from '../../PageNavLink';

export const HeaderNav = () => (
  <>
    <PageNavLink to="/" text="home" end={true} />
    <PageNavLink to="phones" text="phones" end={false} />
    <PageNavLink to="tablets" text="tablets" end={false} />
    <PageNavLink to="accessories" text="accessories" end={false} />
  </>
);
