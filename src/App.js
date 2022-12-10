import "./sass/styles.scss";
import Projects from "./components/Projects";
import { data } from "./constants/data";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header size="1" title="Utv&aelig;r" />
      <Header size="2" title="Portfolio" />
      <Projects projects={data} />
    </Container>
  );
}

export default App;
