/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function UpdateToast({ product, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();

    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
        <AiOutlineCheckCircle className="text-green-500 text-3xl" />
        <div>
          <p className="text-lg font-medium text-gray-900">Product Data Updated</p>
          <p className="text-sm text-gray-600">{product.title} has been updated successfully.</p>
        </div>
      </div>
    </div>
  );
}

export default UpdateToast;
