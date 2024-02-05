// Modal.js

import React from 'react';

const Modal = ({ isOpen, closeModal, onSubmit, onClick, title }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: e.target.title.value,
      description: e.target.description.value,
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        {/* Gray Overlay */}
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>

        <div className="relative bg-white p-8 w-[500px] h-full mx-auto z-50 rounded-md">
          <span
            className="absolute top-4 right-4 text-black cursor-pointer text-4xl"
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="mb-4">
            <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-2xl font-semibold text-black">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full mt-1 p-2 border rounded-md border-slate-950"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-2xl font-semibold text-black">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full mt-1 p-2 border rounded-md border-slate-950"
                required
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
              <div>
                <div className="bg-red-500 h-10 flex items-center justify-center rounded-md w-24">
                  <button onClick={onClick}>{title}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
