import React from 'react';
import { Route } from 'react-router';
import { startRouter } from 'carbon-react/lib/utils/router';

import Banner from 'views/banner'

var routes = (
  <Route path="/" component = { Banner } />
);

startRouter(routes);
