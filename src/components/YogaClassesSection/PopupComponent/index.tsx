import React, { useLayoutEffect, useState } from "react";
import { Backdrop, PopupContainer } from "./styles";
import { X } from "@phosphor-icons/react";

interface PopupComponentProps {
  onClose: () => void;
  content: React.ReactNode;
}

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // Guardar o valor original do overflow do body
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    document.body.style.overflow = 'hidden';

    // Reverter para o estilo original quando o componente for desmontado
    return () => { document.body.style.overflow = originalStyle };
  }, []); // Array vazio garante que o efeito só roda no montar e desmontar
};

const PopupComponent: React.FC<PopupComponentProps> = ({
  onClose,
  content,
}) => {
  const [closing, setClosing] = useState(false)
  
  useLockBodyScroll();

  const initiateClosing = () => {
    setTimeout(onClose, 200);
    setClosing(!closing)
  }

  return (
    <>
      <Backdrop closing={closing} onClick={initiateClosing}/>
      <PopupContainer closing={closing}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>
          <X size={20} onClick={initiateClosing} />
        </div>
        <p>{content}</p>
      </PopupContainer>
    </>
  );
};

export default PopupComponent;
