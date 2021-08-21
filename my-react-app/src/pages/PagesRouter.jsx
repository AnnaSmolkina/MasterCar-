import React from 'react';
import { Route } from 'react-router-dom';
import Page_Contacts from './Page_Contacts';
import Page_Main from './Page_Main';
import Page_Catalog from './Page_Catalog';


class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" component={Page_Main} exact />
        <Route path="/catalog" component={Page_Catalog} exact />
        <Route path="/contacts" component={Page_Contacts} exact />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    