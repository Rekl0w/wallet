import Banner from "./sections/Banner/Banner";
import Example from "./sections/Example/Example";
import Footer from "./sections/Footer/Footer";
import Questions from "./sections/Questions/Questions";
import Review from "./sections/Review/Review";
import Topbar from "./sections/Topbar/Topbar";

export default function App() {

  return (
    <div className="bg-[#2B2B2B]" style={{fontFamily:'Poppins'}}>
      <Topbar />
      <Banner />
      <Example />
      <Review />
      <Questions />
      <Footer />
    </div>
  );
}

