import "./AddTaskDialog.css";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import { toast } from "sonner";
import { v4 } from "uuid";

import { LoaderIcon } from "../assets/icons";
import Button from "./ui/Button";
import Input from "./ui/Input";
import TimeSelect from "./ui/TimeSelect";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const queryClient = useQueryClient();

  const nodeRef = useRef();

  const { mutate } = useMutation({
    mutationKey: ["addTask"],
    mutationFn: async (task) => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    },
  });

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      time: "morning",
    },
  });

  const handleSaveClick = async (data) => {
    const task = {
      id: v4(),
      title: data.title.trim(),
      description: data.description.trim(),
      time: data.time.trim(),
      status: "not_started",
    };

    mutate(task, {
      onSuccess: () => {
        queryClient.setQueryData(["tasks"], (oldTasks) => {
          return [...oldTasks, task];
        });

        handleClose();
        reset({
          title: "",
          description: "",
          time: "morning",
        });
        toast.success("Tarefa criada com sucesso!");
      },
      onError: () => {
        toast.error("Erro ao criar tarefa!");
      },
    });
  };

  const handleCancelClick = () => {
    handleClose();
    reset({
      title: "",
      description: "",
      time: "morning",
    });
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-brightness-50"
          >
            <form
              onSubmit={handleSubmit(handleSaveClick)}
              className="w-[400px] rounded-xl bg-white p-5 text-center"
            >
              <h2 className="text-xl font-semibold">Nova Tarefa</h2>
              <p className="mb-4 mt-1 text-sm text-brand-text-gray">
                Insira as informações abaixo
              </p>

              <div className="flex flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Nome da tarefa"
                  disabled={isSubmitting}
                  {...register("title", {
                    required: "O título é obrigatório.",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "O título é obrigatório.";
                      }
                    },
                  })}
                  error={errors?.title?.message}
                />

                <TimeSelect
                  {...register("time", { required: true })}
                  disabled={isSubmitting}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  disabled={isSubmitting}
                  {...register("description", {
                    required: "A descrição é obrigatória.",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "A descrição é obrigatória.";
                      }
                    },
                  })}
                  error={errors?.description?.message}
                />

                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={handleCancelClick}
                    className="w-full"
                    color="secondary"
                    size="medium"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="w-full"
                    size="medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <LoaderIcon className="mr-2 animate-spin" />
                    ) : (
                      "Salvar"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>,
          document.body,
        )}
      </div>
    </CSSTransition>
  );
};

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
};

export default AddTaskDialog;
