import { apiGet, apiPost, apiDelete, apiPatch } from "./api/api";

export const getTask = async () => {
  try {
    const tasks = await apiGet("task");
    return tasks;
  } catch (err) {
    console.error("Error fetching tasks:", err);
    throw err;
  }
};

export const createTask = async (data) => {
  try {
    const task = await apiPost(data, "task");
    return task;
  } catch (err) {
    console.error("Error creating task:", err);
    throw err;
  }
};

export const updateTask = async (data, id) => {
  try {
    const task = await apiPatch(data, "task/update", id);
    return task;
  } catch (err) {
    console.error("Error updating task:", err);
    throw err;
  }
};

export const updateTaskState = async (data, id) => {
  try {
    const task = await apiPatch(data, "taskC", id);
    return task;
  } catch (err) {
    console.error("Error updating task status:", err);
    throw err;
  }
};

export const deleteTask = async (id) => {
  try {
    const task = await apiDelete("task/delete", id);
    return task;
  } catch (err) {
    console.error("Error deleting task status:", err);
    throw err;
  }
};
