import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useSession from "./hooks/Authentication/useSession";

// Components
import Home from "./pages/Home/Home";
import ProductDetail from "./components/Products/ProductDetail";
import ProductCard from "./components/ui/ProductCard";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Loader & Toast
import Loader from "./components/Loader/Loader";
import ToastContainers from "./components/Toast/ToastContainer";

export default function App() {
  const { isLoggedIn, isLoading } = useSession();

  if (isLoading) return <Loader />;

  // Main routes
  const mainRoutes = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <ProductCard /> }, 
    { path: "/product-detail", element: <ProductDetail /> }, 
  ];

  // Function to render routes with the specified layout
  const renderRoutes = (layout, routes) => (
    <Route element={layout.component}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  );

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes({ component: <MainLayout /> }, mainRoutes)}

        {/* Redirect to home if no route is found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainers />
    </BrowserRouter>
  );
}
