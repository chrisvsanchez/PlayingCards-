import React from "react";
import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import War from "./GameInstructions/War";
import Memory from "./GameInstructions/Memory";
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/war",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <War />,
  },
  {
    path: "/memory",
    sidebar: () => <div>MEMZ!</div>,
    main: () => <Memory />,
  },
];
const HowToPlay = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "pink",
            overflow: "visible",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              height: "auto",
            }}
          >
            <li>
              <Link to="/war">War</Link>
            </li>
            <li>
              <Link to="/memory">Memory</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
        <div
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "teal",
            overflow: "auto",
          }}
        >
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default HowToPlay;
