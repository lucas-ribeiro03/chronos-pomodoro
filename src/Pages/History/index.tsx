import MainTemplate from "../../templates/MainTemplates";
import Container from "../../components/Container";

import styles from "./styles.module.css";
import { TrashIcon } from "lucide-react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { useState } from "react";
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks";

const History = () => {
  const { state } = useTaskContext();
  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: "startDate",
        direction: "desc",
      };
    }
  );

  const taskType = {
    workTime: "Foco",
    shortBreakTime: "Descanso Curto",
    longBreakTime: "Descanso Longo",
  };

  const handleSortTasks = ({ field }: Pick<SortTasksOptions, "field">) => {
    const newDirection = sortTaskOptions.direction === "desc" ? "asc" : "desc";

    setSortTaskOptions({
      tasks: sortTasks({
        tasks: sortTaskOptions.tasks,
        direction: newDirection,
        field,
      }),
      direction: newDirection,
      field,
    });
  };

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            <span className={styles.buttonContainer}>
              <Button
                aria-label="Apagar todo o histórico"
                title="Apagar histórico"
                color="red"
                icon={<TrashIcon />}
              />
            </span>
          </Heading>
        </Container>
        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: "name" })}
                  >
                    Tarefa
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: "duration" })}
                  >
                    Duração
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: "startDate" })}
                  >
                    Data
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortTaskOptions.tasks.map((task) => {
                  return (
                    <tr>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>
                        {getTaskStatus(task, state.activeTask ?? undefined)}
                      </td>
                      <td>{taskType[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </MainTemplate>
    </>
  );
};

export default History;
