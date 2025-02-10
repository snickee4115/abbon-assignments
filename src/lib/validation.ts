import i18next from "i18next";
import { z } from "zod";

export const contactSchema = (t: typeof i18next.t) =>
  z.object({
    id: z.string(),
    firstName: z.string().min(2, t("contact.validation.firstName.min", { min: 2 })),
    lastName: z.string().min(2, t("contact.validation.lastName.min", { min: 2 })),
    age: z
      .number({ required_error: t("contact.validation.age.required") })
      .min(1, t("contact.validation.age.min", { min: 1 }))
      .max(150, t("contact.validation.age.max", { max: 150 })),
  });

export type Contact = z.infer<ReturnType<typeof contactSchema>>;
