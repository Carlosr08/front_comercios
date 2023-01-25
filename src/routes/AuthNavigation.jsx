import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { map } from 'lodash'
import {auth} from "./routes"

export default function Navigation() {
  return (
    <Router>
      <Routes>
        {map(auth, (route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component/>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}
