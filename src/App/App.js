import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImagensSection from "../components/ImagensSection";
import Main from "../components/Main";
import MainSection from "../components/MainArticle";
import * as Styled from "./style";

function App() {
  return (
    <Styled.Container>
      <Styled.Center>
        <Header />
        <Main />
        <MainSection />
        <ClientTestimonials />
        <ImagensSection />
        <Footer />
      </Styled.Center>
    </Styled.Container>
  );
}

export default App;
