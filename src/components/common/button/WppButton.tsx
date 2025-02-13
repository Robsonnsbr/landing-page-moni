"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import consultanteAvatar from "@public/images/avatar-moni.jpg";
import { useEffect, useState } from "react";

const WppButton = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      const handleLoad = () => setIsLoaded(true);
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  if (!isLoaded) {
    return null;
  }
  return (
    <div id="whatsapp-button-first">
      <FloatingWhatsApp
        accountName="Monichara Moccelin"
        phoneNumber="554198083760"
        avatar={consultanteAvatar.src}
        chatMessage="Olá! Tudo bem? Eu sou a Monichara, advogada. Como posso ajudar você hoje?"
        statusMessage="Normalmente responde dentro de 1 hora"
        placeholder="Escrever mensagem..."
        chatboxHeight={360}
        notificationDelay={15}
      />
    </div>
  );
};

export default WppButton;
