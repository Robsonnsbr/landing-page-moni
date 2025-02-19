export interface EmailProps {
  name: string;
  subject: string;
  option: "email" | "phone";
  email?: string;
  phone?: string;
}
