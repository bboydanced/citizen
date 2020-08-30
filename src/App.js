import React from "react";
import { Pagination } from "@material-ui/lab";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {DataProvider} from './components/DataProvider';
import Details from "./components/Details";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <DataProvider>
      <div className="App">
        
        <Router>
          <Header />
          
          <section>
            <Switch>
              <Route exact path="/products">
                <Products />
              </Route>

              <Route path="/products/:id">
                <Details />
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
