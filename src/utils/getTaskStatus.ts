import type { TaskModel } from "../models/TaskModel";

export const getTaskStatus = (task: TaskModel, activeTask?: TaskModel) => {
  if (task.interruptDate) return "Interrompida";
  if (task.completeDate) return "Completa";
  if (activeTask?.id === task.id) return "Em progresso";
  return "Abandonada";
};
