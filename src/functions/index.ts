"use client";

import { sendGAEvent } from "@next/third-parties/google";

// Função adaptada para o envio do evento de conversão
export function sendEventGoogleAds() {
  // Envia o evento de conversão para o Google Ads utilizando o sendGAEvent
  sendGAEvent("event", "conversion", {
    send_to: "AW-16892245591/zC7ZCNOmzqIaENfs7PY-",
    value: 1.0,
    currency: "BRL",
  });
}
