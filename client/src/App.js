import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";


const App = () => {
  // Initial login states
  const { token, login, logout, userId, name, image } = useAuth();
  // Default toolbar states
  let className = `toolbar-company`;
  let avatar = `./logo1.png`;

  let routes;
  if (token) {
    className = `toolbar-avatar`;
    avatar = `http://localhost:5000/${image}`;
    routes = (
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/inventories/:userId/add" exact>
          <AddInventory />
        </Route>
        <Route path="/items/:inventoryId/add" exact>
          <AddItem />
        </Route>
        <Redirect to="/" exact />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
  // Returns
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Toolbar name={name} image={avatar} className={className} />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
