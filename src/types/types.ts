import { z } from "zod";
import { schemaZod } from "src/types/schemaZod";

export type FormDataProps = z.infer<typeof schemaZod>;
