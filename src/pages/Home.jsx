import Header from "../components/shared/Header";
import Article from "../components/Article";
import Slide from '../components/slide/Slide';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Slide />
      Home 👋
    </div>
  );
}
