import Header from "../components/shared/Header";
import Slide from "../components/slide/Slide";
import Grid from "../components/search/similar/Grid";
import Footer from "../components/shared/Footer/Footer";

export default function Search() {
  return (
    <>
      <div className="container">
        <Header />
        <Slide />
        <Grid />
      </div>
      <Footer />
    </>
  );
}
