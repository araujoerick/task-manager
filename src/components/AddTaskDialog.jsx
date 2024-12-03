import { createPortal } from "react-dom";

const AddTaskDialog = ({ isOpen }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-brightness-50">
      <div className="max-w-96 rounded-xl bg-white p-5 text-center">
        <h2 className="text-xl font-semibold">Nova Tarefa</h2>
        <p className="mt-1 text-sm text-textGray">
          Insira as informações abaixo
        </p>
      </div>
    </div>,
    document.body,
  );
};

export default AddTaskDialog;
