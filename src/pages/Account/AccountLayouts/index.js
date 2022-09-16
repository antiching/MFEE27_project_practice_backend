import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Aside from '../components/Aside';
import AsideMobile from '../components/AsideMobile';
function AccountLayout() {
  return (
    <>
      <main className="container my-3">
        <Breadcrumb />
        <AsideMobile />
        <div className="d-flex">
          <Aside />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AccountLayout;
