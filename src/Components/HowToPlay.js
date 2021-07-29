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
      <MainWrapper>
        <SideMenuWrapper>
          <ULWrapper>
            <li>
              <Link to="/war">War</Link>
            </li>
            <li>
              <Link to="/memory">Memory</Link>
            </li>
          </ULWrapper>

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
        </SideMenuWrapper>
        <ComponentWrapper>
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
        </ComponentWrapper>
      </MainWrapper>
    </Router>
  );
};

export default HowToPlay;
const MainWrapper = styled.div`
  display: flex;
  /* overflow: hidden; */
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
const SideMenuWrapper = styled.div`
  padding: 10px;
  width: 20%;
  background: pink;
  overflow: visible;
`;
const ULWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  height: auto;
`;
const ComponentWrapper = styled.div`
  flex: 1;
  padding: 10px;
  background-color: teal;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
