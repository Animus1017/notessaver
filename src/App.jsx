import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Pastes from "./pages/Pastes";
import ViewPaste from "./pages/ViewPaste";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/pastes",
      element: (
        <div>
          <Navbar />
          <Pastes />
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div>
          <Navbar />
          <ViewPaste />
        </div>
      ),
    },
  ]);
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-slate-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
