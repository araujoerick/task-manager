import "./AddTaskDialog.css";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";

import Button from "./ui/Button";
import Input from "./ui/Input";
import TimeSelect from "./ui/TimeSelect";

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [errors, setErrors] = useState([]);

  const nodeRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  const handleSaveClick = () => {
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
      return;
    }

    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: "not_started",
    });
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
              <p className="mb-4 mt-1 text-sm text-textGray">
                Insira as informações abaixo
              </p>

              <div className="flex flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Nome da tarefa"
                  error={titleError}
                  ref={titleRef}
                />

                <TimeSelect ref={timeRef} />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  error={descriptionError}
                  ref={descriptionRef}
                />

                <div className="flex gap-3">
                  <Button
                    onClick={handleClose}
                    className="w-full"
                    variant="secondary"
                    size="medium"
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => handleSaveClick()}
                    className="w-full"
                    size="medium"
                  >
                    Salvar
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

export default AddTaskDialog;
