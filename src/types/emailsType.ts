export interface EmailProps {
  option: "email" | "phone";
  name: string;
  email?: string;
  phone?: string;
  subject?: string;
}
