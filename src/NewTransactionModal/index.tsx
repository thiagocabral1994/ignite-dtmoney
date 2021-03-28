import Modal from 'react-modal';

import { FormContainer } from './styles';
import closeImg from '../assets/close.svg';

Modal.setAppElement('#root');

type NewTransactionModal = {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModal) {


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <FormContainer>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </FormContainer>
        </Modal>
    );
}