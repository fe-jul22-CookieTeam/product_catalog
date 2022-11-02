import { ROUTES } from '../../../routes';
import { PageNavLink } from '../../PageNavLink';

export const HeaderNav = () => (
  <>
    <PageNavLink to={ROUTES.home} text="home" end={true} />
    <PageNavLink to={ROUTES.phones} text="phones" end={false} />
    <PageNavLink to={ROUTES.tablets} text="tablets" end={false} />
    <PageNavLink to={ROUTES.accessories} text="accessories" end={false} />
  </>
);
