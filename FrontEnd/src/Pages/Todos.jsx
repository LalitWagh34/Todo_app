import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar } from '../components/AppBar';
import Modal from '../components/Modal';
import axios from 'axios';

export function Todos() {
  const navigate = useNavigate();
  const [todos ,setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:3000/account/myTodo")
    .then(response =>setTodos(response.data))
    .catch(error => console.log('Error fetching todos:' ,error))
  },[])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (data) => {

    axios.post("http://localhost:3000/account/newTodo" ,data)
    .then(response =>{
        setTodos([...todos ,response.data]);
        closeModal();
    })
    .catch(error => console.error('Error creating todo:', error));
    
  };

  return (
    <div className="flex flex-col h-screen">
      <AppBar
        firstName={'Lalit'}
        label={'Log Out'}
        onClick={openModal}
      />
      <div className="flex-grow"></div> {/* This div will take up the remaining space */}
      <button
        className="bg-amber-500  text-white font-bold py-2 px-4 rounded mb-16 mx-auto"
        onClick={openModal}
      >
        Add Todo
      </button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} onSubmit={handleModalSubmit} title={'Add Todo'} />
    </div>
  );
}
