import Header from "../components/shared/Header";
import Slide from "../components/slide/Slide";
import Grid from "../components/search/similar/Grid";
import Footer from "../components/shared/Footer/Footer";
import LocalInformation from "../components/search/similar/LocalInformation";

export default function Search() {
  return (
    <>
      <div className="container">
        <Header />
        <Slide />
        <Grid />
        <LocalInformation />
      </div>
      <Footer />
    </>
  );
}
