declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params: {
        send_to: string;
        value: number;
        currency: string;
        event_callback?: () => void;
      }
    ) => void;
  }
}

export const reportConversion = (): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16892245591/nu7eCPGxmaIaENfs7PY-",
      value: 1.0,
      currency: "BRL",
    });
  }
};
