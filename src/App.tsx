import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Login from "./Pages/login";
import Register from "./Pages/register";

function App() {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={<Suspense fallback={"loading..."}>home</Suspense>}
        />

        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/Register"}
          element={
            <Suspense fallback={"loading... "}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
