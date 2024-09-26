import Home from './pages/Home';
import Plan from "./pages/Plan";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
  {
    path: "plan",
    element: <Plan />
  },
  {
    path: "evenements",
    element: <Evenements />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "apropos",
    element: <Apropos />
  },
]);

function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  );
}


export default App;
