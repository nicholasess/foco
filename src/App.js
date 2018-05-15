import React, { Component } from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./protected/Dashboard";
import Loading from "./components/loading";

function PrivateRoute({ component: Component, authed, handleLogout, ...rest,  }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} handleLogout={handleLogout} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authed, handleLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} handleLogin={handleLogin} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true
  };
  componentDidMount() {
    let { loading, authed } = this.state;
    if (!localStorage.getItem("token")) {
      authed = false;
    } else {
      authed = true;
    }
    setTimeout(() => {
      this.setState({ authed }, () => {
        this.setState({ loading: false });
      });
    }, 1000);
  }

  handleLogout = () =>{
    let { authed } = this.state;
    localStorage.removeItem("token");
    this.setState({ authed: false });
  }

  handleLogin = () => {
    console.log("Login")
    this.setState({ authed: true });
  }

  render() {
    if (this.state.loading) return <Loading />;

    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute
            handleLogin={this.handleLogin}
            authed={this.state.authed}
            path="/"
            component={Login}
            exact={true}
          />
          <PrivateRoute
            authed={this.state.authed}
            handleLogout={this.handleLogout}
            path="/dashboard"
            component={Dashboard}
          />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
