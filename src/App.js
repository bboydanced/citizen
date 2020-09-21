import React from "react";
import { Pagination } from "@material-ui/lab";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {DataProvider} from './components/DataProvider';
import Details from "./components/Details";
import ScrollTop from "./components/ScrollTop";
import NotFound404 from "./components/NotFound404";

function App() {
  return (
    <DataProvider>
      <div className="App">
        
        <Router>
          <Header />
          
          <section>
            <Switch>
              <Route exact path="/">
                <Products />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route exact path="/products/:id">
                <Details />
              </Route>
            
              <Route component={NotFound404}>

              </Route>
            </Switch>
          </section>
          {/* <div className="pagination">
            <Pagination count={10} color="secondary" />
          </div> */}
        </Router>
      </div>
      <ScrollTop />
    </DataProvider>

  );
}

export default App;
