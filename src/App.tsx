import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
     
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/location/:locationId",
        element: <LocationPage />,
      },
    ],
  },
]);

function LayoutWrapper() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;