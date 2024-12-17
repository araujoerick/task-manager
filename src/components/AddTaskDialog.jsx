import "./AddTaskDialog.css";

import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { toast } from "sonner";
import { v4 } from "uuid";

import { LoaderIcon } from "../assets/icons";
import Button from "./ui/Button";
import Input from "./ui/Input";
import TimeSelect from "./ui/TimeSelect";

const AddTaskDialog = ({ isOpen, handleClose, onSubmitSuccess }) => {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const nodeRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  const handleSaveClick = async () => {
    setIsLoading(true);
    const newErrors = [];
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const time = timeRef.current.value;

    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        errorMessage: "O nome da tarefa é obrigatório.",
      });
    }

    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        errorMessage: "A descrição da tarefa e obrigatória.",
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return setIsLoading(false);
    }

    const task = {
      id: v4(),
      title,
      description,
      time,
      status: "not_started",
    };

    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      setIsLoading(false);
      return toast.error("Erro ao criar tarefa");
    }

    onSubmitSuccess(task);
    setIsLoading(false);
  };

  const titleError = errors.find((error) => error.inputName === "title");
  const descriptionError = errors.find(
    (error) => error.inputName === "description",
  );

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
            <div className="w-[400px] rounded-xl bg-white p-5 text-center">
              <h2 className="text-xl font-semibold">Nova Tarefa</h2>
              <p className="mb-4 mt-1 text-sm text-brand-text-gray">
                Insira as informações abaixo
              </p>

              <div className="flex flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Nome da tarefa"
                  error={titleError}
                  ref={titleRef}
                  disabled={isLoading}
                />

                <TimeSelect ref={timeRef} disabled={isLoading} />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  error={descriptionError}
                  ref={descriptionRef}
                  disabled={isLoading}
                />

                <div className="flex gap-3">
                  <Button
                    onClick={handleClose}
                    className="w-full"
                    color="secondary"
                    size="medium"
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => handleSaveClick()}
                    className="w-full"
                    size="medium"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <LoaderIcon className="mr-2 animate-spin" />
                    ) : (
                      "Salvar"
                    )}
                  </Button>
                </div>
              </div>
            </div>
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
