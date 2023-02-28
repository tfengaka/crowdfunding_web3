import React, { Fragment } from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MainLayout } from './layout';
import { CampaignDetailPage, CreateCampaignPage, HomePage, NotFound, ProfilePage } from './pages';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="campaign">
            <Route path=":id" element={<CampaignDetailPage />} />
            <Route path="create" element={<CreateCampaignPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
}

export default App;
