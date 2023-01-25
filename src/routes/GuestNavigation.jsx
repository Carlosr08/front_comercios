import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { map } from 'lodash'
import {guest} from "./routes"

export default function Navigation() {
  return (
    <Router>
      <Routes>
        {map(guest, (route, index) => (
          <Route
            key={index}
            path={route.path}
            loader="cargando"
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
