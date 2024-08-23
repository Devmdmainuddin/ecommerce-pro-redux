
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Detail from './pages/Detail'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:slug",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
