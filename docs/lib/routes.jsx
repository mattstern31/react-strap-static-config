import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import LayoutPage from './Components/LayoutPage';
import NavsPage from './Components/NavsPage';
import NavbarPage from './Components/NavbarPage';
import BreadcrumbsPage from './Components/BreadcrumbsPage';
import ButtonsPage from './Components/ButtonsPage';
import ButtonGroupPage from './Components/ButtonGroupPage';
import ButtonDropdownPage from './Components/ButtonDropdownPage';
import DropdownsPage from './Components/DropdownsPage';
import FormPage from './Components/FormPage';
import PopoversPage from './Components/PopoversPage';
import TooltipsPage from './Components/TooltipsPage';
import TagsPage from './Components/TagsPage';
import ModalsPage from './Components/ModalsPage';
import CardPage from './Components/CardPage';
import TablesPage from './Components/TablesPage';
import NotFound from './NotFound';
import Components from './Components';
import UI from './UI';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="buttons/" />
      <Route path="breadcrumbs/" component={BreadcrumbsPage} />
      <Route path="buttons/" component={ButtonsPage} />
      <Route path="button-group/" component={ButtonGroupPage} />
      <Route path="button-dropdown/" component={ButtonDropdownPage} />
      <Route path="dropdowns/" component={DropdownsPage} />
      <Route path="form/" component={FormPage} />
      <Route path="popovers/" component={PopoversPage} />
      <Route path="tooltips/" component={TooltipsPage} />
      <Route path="tags/" component={TagsPage} />
      <Route path="card/" component={CardPage} />
      <Route path="tables/" component={TablesPage} />
      <Route path="modals/" component={ModalsPage} />
      <Route path="layout/" component={LayoutPage} />
      <Route path="navs/" component={NavsPage} />
      <Route path="navbar/" component={NavbarPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
