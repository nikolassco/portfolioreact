import { BrowserRouter } from "react-router-dom";
import Footer from '../../components/Footer';
import ScrollToTop from '../../helpers/ScrollToTop';
import MainRoutes from '../../routes';
import './styles.css';

function Main() {
  return (
    <div className="Main">
      <BrowserRouter>
        <ScrollToTop />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Main;
