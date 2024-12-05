import "./AddTaskDialog.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Button from "./ui/Button";
import Input from "./ui/Input";
import InputLabel from "./ui/InputLabel";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const nodeRef = useRef();

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
                <Input id="title" label="Título" placeholder="Nome da tarefa" />

                <div className="flex flex-col gap-1 text-left">
                  <InputLabel htmlFor="time">Horário</InputLabel>
                  <select
                    name="time"
                    id="time"
                    className="rounded-lg border border-[#ECECEC] px-4 py-3 text-[#35383E] outline-primary"
                  >
                    <option value="morning">Manhã</option>
                    <option value="afternoon">Tarde</option>
                    <option value="evening">Noite</option>
                  </select>
                </div>

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
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
                  <Button className="w-full" size="medium">
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
