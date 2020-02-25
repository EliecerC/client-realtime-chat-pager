import React from 'react';
import Loader from 'Components/feedback/Loader/Loader.jsx';

export default function asyncComponent(importComponent, delay = 200) {
  const LazyComponent = React.lazy(importComponent);

  const AsyncComponent = props => (
    <React.Suspense fallback={<Loader delay={delay} />}>
      <LazyComponent {...props} />
    </React.Suspense>
  );

  return AsyncComponent;
}
