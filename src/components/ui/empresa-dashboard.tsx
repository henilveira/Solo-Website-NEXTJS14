'use client';
import React, { useState } from 'react';
import { CompanyProvider } from './CompanyProvider';
import RegisterCompanyModal from './RegisterCompanyModal';
import CompanyTable from './CompanyTable';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CompanyProvider>
      <div>
        <h1>Dashboard</h1>
        {/* Outros componentes do dashboard */}
        <button onClick={openModal}>Adicionar Empresa</button>
        {/* Passa o estado de controle de abertura do modal */}
        {/* <RegisterCompanyModal onClose={closeModal} isOpen={isModalOpen} /> */}
        <CompanyTable />
      </div>
    </CompanyProvider>
  );
}

export default App;
