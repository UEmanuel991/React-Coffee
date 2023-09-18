import Footer from "../Components/Footer/Footer";
import NavbarApp from "../Components/NavbarApp/NavbarApp";

const Wrapper = ({ children }) => {

  return (
    <>
      <NavbarApp  className="shop-menu-btns" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;