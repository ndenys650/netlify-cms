import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app/App';
import HomeRedirect from './HomeRedirect';
import EditorialWorkflowCheckpoint from '../editorial-workflow/EditorialWorkflowCheckpoint';
import CollectionEntriesList from '../entriesList/CollectionEntriesList';
import EntryPage from '../containers/EntryPage';
import SearchEntriesList from '../entriesList/SearchEntriesList';
import NotFoundPage from '../containers/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeRedirect} />
    <Route
      path="/editorial-workflow"
      component={EditorialWorkflowCheckpoint}
    />
    <Route
      path="/collections/:name"
      component={CollectionEntriesList}
    />
    <Route
      path="/collections/:name/entries/new"
      component={EntryPage}
      newRecord
    />
    <Route
      path="/collections/:name/entries/:slug"
      component={EntryPage}
    />
    <Route
      path="/search/:searchTerm"
      component={SearchEntriesList}
    />
    <Route
      path="*"
      component={NotFoundPage}
    />
  </Route>
);
