import React from "react";

const ModalTitle = ({ title, onClose }) => {
  return (
    <div className="flex justify-between p-3 py-1">
      <h2 className="font-bold text-xl text-white">{title}</h2>
      <button className="text-white font-bold" onClick={() => onClose()}>
        X
      </button>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0">
      <div className="border rounded-lg max-w-[500px] w-[90%] absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-theme-black-800">
        {children}
      </div>
      <div className="fixed w-screen h-screen bg-theme-black-900 opacity-80 top-0 left-0 flex items-center z-0"></div>
    </div>
  );
};

Modal.Title = ModalTitle;

export default Modal;
