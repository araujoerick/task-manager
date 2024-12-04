import { createPortal } from "react-dom";

import Button from "./Button";
import Input from "./Input";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-brightness-50">
      <div className="w-[400px] rounded-xl bg-white p-5 text-center">
        <h2 className="text-xl font-semibold">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm text-textGray">
          Insira as informações abaixo
        </p>

        <div className="flex flex-col space-y-4">
          <Input id="title" label="Título" placeholder="Nome da tarefa" />
          <Input id="time" label="Horário" />
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
  );
};

export default AddTaskDialog;
