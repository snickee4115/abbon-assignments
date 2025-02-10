import { Contact } from "@/lib/validation";
import { create } from "zustand";

interface ContactStore {
  contacts: Contact[];
  addContact: (contact: Omit<Contact, "id">) => void;
}

export const useContactStore = create<ContactStore>((set) => ({
  contacts: Array.from({ length: 100 }, (_, i) => ({
    id: `${i + 1}`,
    firstName: `FirstName${i + 1}`,
    lastName: `LastName${i + 1}`,
    age: Math.floor(Math.random() * 50),
  })),
  addContact: (contact) =>
    set((state) => ({
      contacts: [{ ...contact, id: crypto.randomUUID() }, ...state.contacts],
    })),
}));
