// src/components/Modal.tsx
import { FC, ReactNode } from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/50" />
      <DialogContent className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
