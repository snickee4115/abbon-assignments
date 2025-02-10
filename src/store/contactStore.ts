import { Contact } from "@/lib/validation";
import { create } from "zustand";

interface ContactStore {
  contacts: Contact[];
  currentPage: number;
  searchQuery: string;
  addContact: (contact: Omit<Contact, "id">) => void;
  deleteContact: (id: string) => void;
  setCurrentPage: (page: number) => void;
  setSearchQuery: (term: string) => void;
}

export const useContactStore = create<ContactStore>((set) => ({
  contacts: Array.from({ length: 100 }, (_, i) => ({
    id: `${i + 1}`,
    firstName: `FirstName${i + 1}`,
    lastName: `LastName${i + 1}`,
    age: Math.floor(Math.random() * 50),
  })),
  currentPage: 1,
  searchQuery: "",
  addContact: (contact) =>
    set((state) => ({
      contacts: [{ ...contact, id: crypto.randomUUID() }, ...state.contacts],
    })),
  deleteContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    })),
  setCurrentPage: (page) => set({ currentPage: page }),
  setSearchQuery: (term) => set({ searchQuery: term }),
}));
