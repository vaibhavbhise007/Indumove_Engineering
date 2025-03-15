import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



// Components
import Home from "./pages/Home/Home";
import ProductDetail from "./components/Products/ProductDetail";
import ProductCard from "./components/ui/ProductCard";

// Layouts
import Mainlayouts from "./layouts/Mainlayouts.jsx";



// Loader & Toast



export default function App() {
  

  

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
        {renderRoutes({ component: <Mainlayouts /> }, mainRoutes)}

        {/* Redirect to home if no route is found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
