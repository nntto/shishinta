import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactElement;
  delay?: number;
};
const LazyLoad: React.FC<Props> = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay,
  });
  return (
    <div
      style={{
        transition: '1s',
        opacity: inView ? 1 : 0,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default LazyLoad;
