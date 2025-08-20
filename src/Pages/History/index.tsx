import MainTemplate from "../../templates/MainTemplates";
import Container from "../../components/Container";

import styles from "./styles.module.css";
import { TrashIcon } from "lucide-react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

const History = () => {
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            <span>
              <Button icon={<TrashIcon />} />
            </span>
          </Heading>
        </Container>
        <Container>
          <div className={styles.responsiveTable}></div>
        </Container>
      </MainTemplate>
    </>
  );
};

export default History;
