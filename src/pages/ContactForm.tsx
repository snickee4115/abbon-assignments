import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContactStore } from "@/store/contactStore";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { contactSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";

type ContactFormData = {
  firstName: string;
  lastName: string;
  age: number;
};

const ContactForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addContact = useContactStore((state) => state.addContact);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema(t).omit({ id: true })),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: undefined,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      addContact(data);
      alert(t("contact.success"));
      navigate("/contact/list");
    } catch (error) {
      alert(t("contact.error"));
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.firstName")}</FormLabel>
                <FormControl>
                  <input {...field} className="w-full p-2 border rounded" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.lastName")}</FormLabel>
                <FormControl>
                  <input {...field} className="w-full p-2 border rounded" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.age")}</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="number"
                    className="w-full p-2 border rounded"
                    onChange={(e) => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full p-2 rounded">
            {t("contact.create")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
