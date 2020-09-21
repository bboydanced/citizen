import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import BackHome from './BackHome';

function NotFound404() {
  const location = useLocation();

  return (
    <Suspense >
        <div>
          <h1>Not found <code>{location.pathname}</code></h1><br />
          <BackHome />
        </div>
    </Suspense>
  );
}

export default NotFound404;