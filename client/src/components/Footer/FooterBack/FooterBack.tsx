import footer from '../Footer.module.scss';

export const FooterBack = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={footer.back}>
      <div className={footer.back__title}>Back to top</div>
      <button className={footer.back__button} onClick={scrollToTop} />
    </div>
  );
};
