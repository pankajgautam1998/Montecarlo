import Footer from "../Footer";
import Header from "../Header";
import HomePage from "../HomePage";
import Slider from "../Slider";

export const routes = [
  {
    id: 1,
    path: "/header",
    element: <Header />,
  },
  {
    id: 2,
    path: "/footer",
    element: <Footer />,
  },
  {
    id: 3,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 4,
    path: "/slider",
    element: <Slider />,
  },
];
