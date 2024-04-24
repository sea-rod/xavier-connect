import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer/Footer";
import RouterClientConfig from "./services/Router/RouterClientConfig";
import { ToastContainer,Bounce } from "react-toastify";

const Client = () => {
  return (
    <>
      <Navbar />
      <RouterClientConfig />
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="dark"
      />
      <Footer />
    </>
  );
};

export default Client;
