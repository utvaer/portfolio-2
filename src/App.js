import "./sass/styles.scss";
import Projects from "./components/Projects";
import { data } from "./constants/data";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Header size="1" title="Utv&aelig;r" classN="main-header" />
        <Container>
          <Header size="2" title="About me" classN="secondary-header" />
          <AboutSection />
          <Header size="2" title="Portfolio" classN="secondary-header" />
          <Projects projects={data} />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
