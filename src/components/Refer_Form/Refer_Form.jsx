import axios from 'axios';
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ReferModal = ({ isOpen, onRequestClose }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Name.value;
    const email = form.Email.value;
    const refereeName = form.refereeName.value;
    const refereeEmail = form.refereeEmail.value;
    const info = {name,email,refereeName,refereeEmail};

    try {
        const {data} = await axios.post('http://localhost:5000/refer_info',info);
        if(data.message === "Data inserted successfully"){
            alert("sent success")
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg w-96">
    <div className='flex justify-end'>
    <div
            type="button" 
            onClick={onRequestClose} 
            className=" hover:text-red-600  font-bold px-2 py-1 rounded-full"
          >
            x
          </div>
    </div>
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Your Name:
            <input 
              type="text" 
              name="Name" 
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
              required 
            />
          </label>
          <label className="block mb-2">
            Your Email:
            <input 
              type="email" 
              name="Email" 
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
              required 
            />
          </label>
          <label className="block mb-2">
            Friend's Name:
            <input 
              type="text" 
              name="refereeName" 
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
              required 
            />
          </label>
          <label className="block mb-2">
            Friend's Email:
            <input 
              type="email" 
              name="refereeEmail" 
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
              required 
            />
          </label>
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ReferModal;
