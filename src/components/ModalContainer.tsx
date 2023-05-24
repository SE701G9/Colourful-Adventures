import React from 'react';
import './ModalContainer.css';

type ModalProps = {
  children: React.ReactNode;
};

const ModalContainer = ({ children }: ModalProps) => (
  <div className="modal">{children}</div>
);

export default ModalContainer;
