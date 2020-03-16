import React from "react";
import { Redirect, Router, Link } from "@reach/router";

import NotFound from "./views/NotFound";
import NewCity from "./views/NewCity";
import Cities from "./views/Cities";
import City from "./views/City";
import EditCity from "./views/EditCity";
// import Nav from "./components/Nav";

function App() {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>

      <div style={{ display: 'inline-block' }}>
        <Link to="/cities">Cities</Link>{' '}
        <Link to="/cities/new">New City</Link>
        <hr />
        <Router>
          <Redirect
            from="/"
            to="/cities"
            noThrow="true"
          />
          <NewCity path="cities/new" />
          <Cities path="cities" />
          <City path="cities/:id" />
          <EditCity path="cities/:id/edit" />
          <NotFound default />
        </Router>

        {/* <div>
          <p>Nav Test</p>;
          <Nav />
        </div> */}
      </div>
    </div>
  );
}

export default App;
