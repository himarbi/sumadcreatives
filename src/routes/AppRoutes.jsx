import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Portfolio from '../pages/Portfolio/Portfolio';
import PortfolioDetails from '../pages/PortfolioDetails/PortfolioDetails';
import Contact from '../pages/Contact/Contact';
import ThankYou from '../pages/ThankYou/ThankYou';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "services",
          element: <Services />,
          children: [
            {
              path: ":serviceSlug",
              element: <ServiceDetails />
            }
          ]
        },
        {
          path: "portfolio",
          element: <Portfolio />
        },
        {
          path: "portfolio/:projectId",
          element: <PortfolioDetails />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "thank-you",
          element: <ThankYou />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ]);

  return routes;
};

export default AppRoutes;
