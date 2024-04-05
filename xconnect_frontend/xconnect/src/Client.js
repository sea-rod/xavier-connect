import Navbar from "./shared/components/Navbar/Navbar";
import Footer from "./shared/components/Footer/Footer";
import RouterClientConfig from "./services/Router/RouterClientConfig";

const Client = () => {
  return (
    <>
      <Navbar />
      <RouterClientConfig />
      <Footer />
    </>
  );
};

export default Client;
