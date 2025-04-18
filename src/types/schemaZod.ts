import { z } from "zod";

// Definindo o esquema do Zod
export const schemaZod = z
  .object({
    name: z.string().nonempty({ message: "Nome é obrigatório!" }),
    option: z.enum(["email", "phone"], { message: "Opção é obrigatória!" }),
    email: z
      .string()
      .min(3)
      .email({ message: "Email inválido!" })
      .or(z.literal(""))
      .optional(),
    phone: z
      .string()
      .min(10, { message: "Número inválido!" })
      .or(z.literal(""))
      .optional(),
    subject: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.option === "email" ? !!data.email : !!data.phone;
    },
    {
      message: "Forneça um email ou telefone conforme a opção escolhida.",
      path: ["email"],
    }
  );
