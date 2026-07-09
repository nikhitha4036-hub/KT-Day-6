import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ClientLogos from './pages/ClientLogos';
import ServiceBreakdown from './pages/ServiceBreakdown';
import './App.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/client-logos" replace />,
      },
      {
        path: '/client-logos',
        element: <ClientLogos />,
      },
      {
        path: '/service-breakdown',
        element: <ServiceBreakdown />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
