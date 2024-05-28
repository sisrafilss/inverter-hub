/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function DeleteToast({ product, onClose, onDelete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      onDelete(product.id)
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose, onDelete, product.id]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
        <AiOutlineCheckCircle className="text-green-500 text-3xl" />
        <div>
          <p className="text-lg font-medium text-gray-900">Product Deleted</p>
          <p className="text-sm text-gray-600">{product.title} has been deleted successfully.</p>
        </div>
      </div>
    </div>
  );
}

export default DeleteToast;
