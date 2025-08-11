import MainTemplate from "../../templates/MainTemplates";
import Container from "../../components/Container";
import MainForm from "../../components/MainForm";
import Countdown from "../../components/Countdown";

const Home = () => {
  return (
    <>
      <MainTemplate>
        <Container>
          <Countdown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
};

export default Home;
