import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => (
  <MutatingDots
    height="100"
    width="100"
    color="#a378ff"
    secondaryColor="#a378ff"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{ justifyContent: 'center' }}
    visible={true}
  />
);
