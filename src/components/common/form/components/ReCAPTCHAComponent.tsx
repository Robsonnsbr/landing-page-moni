"use client";

import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ReCAPTCHAComponentProps {
  setCaptcha: React.Dispatch<React.SetStateAction<string | null>>;
  atualizar: boolean;
  RECAPTCHA_KEY: string;
}

const ReCAPTCHAComponent = ({
  setCaptcha,
  atualizar,
  RECAPTCHA_KEY,
}: ReCAPTCHAComponentProps) => {
  const handleCaptchaChange = (value: string | null) => {
    setCaptcha(value);
  };

  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, [atualizar]);

  const NEXT_PUBLIC_RECAPTCHA_SITE_KEY = RECAPTCHA_KEY;

  return (
    <div className="flex items-center justify-start py-3" key={key}>
      {NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
        <ReCAPTCHA
          sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
      ) : (
        <span>reCAPTCHA indisponível.</span>
      )}
    </div>
  );
};

export default ReCAPTCHAComponent;
