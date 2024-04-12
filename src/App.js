import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout children={route.element} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
