import React, { useState } from "react";
import { Backdrop, PopupContainer } from "./styles";
import { X } from "@phosphor-icons/react";

interface PopupComponentProps {
  onClose: () => void;
  content: React.ReactNode;
}

const PopupComponent: React.FC<PopupComponentProps> = ({
  onClose,
  content,
}) => {
  const [closing, setClosing] = useState(false)
  
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
