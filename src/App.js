import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/register";
import Navigation from "./components/Layout/components/Header/components/Navigation";
import AuthService from "./services/auth.service";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import BrowseTask from "./components/BrowseTask/BrowseTask";
import PostTask from "./components/PostTask/PostTask";
import Notifications from "./components/Notifications/Notifications";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>

      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/browse-tasks" exact component={BrowseTask} />
          <Route path="/post-task" exact component={PostTask} />
          <Route path="/notifications" exact component={Notifications} />
          <Route path="/browse-tasks/:id" exact component={BrowseTask} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
