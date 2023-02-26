import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import { MainLayout } from './layout';
import { HomePage, ProfilePage, CampaignDetailPage, CreateCampaignPage } from './pages';

function App() {
  return (
    <Switch>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="campaign">
          <Route path=":id" element={<CampaignDetailPage />} />
          <Route path="create" element={<CreateCampaignPage />} />
        </Route>
      </Route>
    </Switch>
  );
}

export default App;