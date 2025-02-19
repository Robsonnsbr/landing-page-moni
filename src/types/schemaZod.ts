import { z } from "zod";

// Definindo o esquema do Zod
export const schemaZod = z
  .object({
    name: z.string().nonempty({ message: "Nome é obrigatório" }),
    option: z.enum(["email", "phone"], { message: "Opção é obrigatória" }),
    email: z
      .string()
      .email({ message: "Email inválido" })
      .or(z.literal(""))
      .optional(),
    phone: z
      .string()
      .min(10, { message: "Telefone deve ter no mínimo 10 dígitos" })
      .or(z.literal(""))
      .optional(),
    subject: z.string().optional(),
  })
  .refine((data) => (data.option === "email" ? !!data.email : !!data.phone), {
    message: "Forneça um email ou telefone conforme a opção escolhida",
    path: ["email"], // O erro será atribuído ao email se a opção for 'email', e ao telefone caso contrário
  });
