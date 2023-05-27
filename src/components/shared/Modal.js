
function Modal({ onClose, children }){
  
  return (
    <div onClick={onClose} className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-md z-20 bg-black bg-opacity-50">
      <div onClick={(e)=> e.stopPropagation()} className="bg-white z-30  rounded-lg  p-4">
        {children}
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 float-right mt-5"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
