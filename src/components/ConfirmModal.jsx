import Modal from "./Modal";
import Button from "./Button";
import { AlertTriangle } from "lucide-react";

export default function ConfirmModal({ open, onClose, onConfirm, title, message }) {
  return (
    <Modal open={open} onClose={onClose} title={title || "Confirm Action"} size="sm">
      <div className="flex flex-col items-center text-center py-2">
        <div className="p-3 bg-amber-50 rounded-full mb-4">
          <AlertTriangle size={24} className="text-amber-600" />
        </div>
        <p className="text-sm text-slate-600">{message || "Are you sure you want to proceed?"}</p>
        <div className="flex gap-3 mt-6 w-full">
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="danger" className="flex-1" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
}
