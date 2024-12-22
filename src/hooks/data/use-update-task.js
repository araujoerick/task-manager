import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "../../lib/axios";

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateTask", taskId],
    mutationFn: async (data) => {
      const { data: updatedTask } = api.patch(`/tasks/${taskId}`, {
        title: data?.title.trim(),
        description: data?.description.trim(),
        time: data?.time.trim(),
      });

      queryClient.setQueryData(["tasks"], (oldTasks) => {
        return oldTasks.map((oldTask) => {
          if (oldTask.id === taskId) {
            return updatedTask;
          }
          return oldTask;
        });
      });
      queryClient.setQueryData(["task", taskId], updatedTask);
    },
  });
};
