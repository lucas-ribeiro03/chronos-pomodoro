import MainTemplate from "../../templates/MainTemplates";
import Container from "../../components/Container";

import styles from "./styles.module.css";
import { Heading, TrashIcon } from "lucide-react";
import Button from "../../components/Button";

const History = () => {
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            <span>
              <Button color="red" icon={<TrashIcon />} />
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
