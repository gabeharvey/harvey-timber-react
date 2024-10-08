import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import Map from './components/Map.jsx';
import Timber from './components/Timber.jsx';
import MineralRights from './components/MineralRights.jsx';
import Loblolly from './components/Loblolly.jsx';
import Wildlife from './components/Wildlife.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Contact from './components/Contact.jsx';
import AboutUs from './components/AboutUs.jsx';
import NotFound from './components/NotFound.jsx'
import PrivateRoute from './components/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <LogIn /> },
      { path: 'signup', element: <SignUp /> },
      {
        path: 'map',
        element: (
          <PrivateRoute>
            <Map />
          </PrivateRoute>
        )
      },
      {
        path: 'timber',
        element: (
          <PrivateRoute>
            <Timber />
          </PrivateRoute>
        )
      },
      {
        path: 'mineralrights',
        element: (
          <PrivateRoute>
            <MineralRights />
          </PrivateRoute>
        )
      },
      {
        path: 'loblolly',
        element: (
          <PrivateRoute>
            <Loblolly />
          </PrivateRoute>
        )
      },
      {
        path: 'wildlife',
        element: (
          <PrivateRoute>
            <Wildlife />
          </PrivateRoute>
        )
      },
      {
        path: 'privacypolicy',
        element: (
          <PrivateRoute>
            <PrivacyPolicy />
          </PrivateRoute>
        )
      },
      {
        path: 'contact',
        element: (
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        )
      },
      {
        path: 'about',
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        )
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </AuthProvider>
);
