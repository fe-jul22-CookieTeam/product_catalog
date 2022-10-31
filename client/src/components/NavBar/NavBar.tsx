import { PageNavLink } from '../PageNavLink';

export const NavBar = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="home" />
        <PageNavLink to="phones" text="phones" />
        <PageNavLink to="tablets" text="tablets" />
        <PageNavLink to="accessories" text="accessories" />
        <PageNavLink to="favourites" text="" />
        <PageNavLink to="cart" text="" />
      </div>
    </div>
  </nav>
);