import "./AddTaskDialog.css";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";

import Button from "./ui/Button";
import Input from "./ui/Input";
import TimeSelect from "./ui/TimeSelect";

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState("");
  const nodeRef = useRef();

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setTime("morning");
      setDescription("");
    }
  }, [isOpen]);

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
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                />

                <TimeSelect
                  value={time}
                  onChange={({ target }) => setTime(target.value)}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
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
                    onClick={() =>
                      handleSubmit({
                        id: v4(),
                        title,
                        time,
                        description,
                        status: "not_started",
                      })
                    }
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
