import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './components/home/HomePage';
import NotFound from './components/ui/NotFound';
import ProductPage from './components/products/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:slug" element={<ProductPage />} />
        <Route path='*' element= {<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
