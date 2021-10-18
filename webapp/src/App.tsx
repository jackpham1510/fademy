import React from 'react';
import { AppRoutes } from './AppRoutes';
import { FdmFooter } from './shared/components/FdmFooter';
import { FdmHeader } from './shared/components/FdmHeader';

function App() {
  return (
    <>
      <FdmHeader />
      <div className="mt-24 mb-12 flex w-full justify-center">
        <div className="container">
          <AppRoutes />
        </div>
      </div>
      <FdmFooter />
    </>
  );
}

export default App;
