import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, className, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose}
    >
      <div
        className={cn("relative bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md", className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button title="close" type="button" className="cursor-pointer absolute right-4 top-4">
          <XIcon className="size-4" onClick={onClose} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
