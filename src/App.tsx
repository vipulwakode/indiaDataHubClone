import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import CatalogueLayout from "./components/catalogue/CatalogueLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product-catalogue" element={<CatalogueLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
