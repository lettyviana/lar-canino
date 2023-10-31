type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog className="modal-container">
      <div className="modal-wrapper">
        <button
          className="close-btn"
          onClick={onClose}
          type="button"
          aria-label="Fechar"
        >
          x
        </button>
        {children}
      </div>
    </dialog>
  );
};
