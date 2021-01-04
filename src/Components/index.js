import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Movies, MovieDetail } from '../Containers';

const ContentArea = () => (
  <Switch>
    <Redirect exact from='/' to='/movies' />
    <Route exact path='/movies' component={Movies} />
    <Route path='/movies/:id' component={MovieDetail} />
    <Redirect to='/dashboard' />
  </Switch>
);

export default ContentArea;
