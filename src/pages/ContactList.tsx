import { useState, useEffect, useMemo } from "react";
import { useContactStore } from "@/store/contactStore";
import { Trash2Icon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const ContactList = () => {
  const { t } = useTranslation();
  const { contacts, currentPage, searchQuery, deleteContact, setCurrentPage, setSearchQuery } =
    useContactStore();
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const pageSize = 20;

  useEffect(() => {
    if (searchQuery.length >= 3) {
      const filtered = contacts.filter((contact) =>
        `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [contacts, searchQuery]);

  const pageCount = useMemo(
    () => Math.ceil(filteredContacts.length / pageSize),
    [filteredContacts, pageSize]
  );
  const paginatedContacts = useMemo(
    () => filteredContacts.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [filteredContacts, currentPage, pageSize]
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <Button
          type="button"
          variant="secondary"
          disabled={!(searchQuery.length >= 3)}
          onClick={() => setSearchQuery("")}
          className="ml-2 px-4 py-2 bg-gray-200 rounded"
        >
          Clear
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {paginatedContacts.map((contact) => (
          <div key={contact.id} className="flex justify-between items-center p-4 border rounded">
            <div>
              <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
              <p>
                {t("contact.age")}: {contact.age}
              </p>
            </div>
            <Trash2Icon
              className="text-red-500 cursor-pointer"
              onClick={() => deleteContact(contact.id)}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: pageCount }, (_, i) => (
          <Button
            key={i + 1}
            type="button"
            variant={currentPage === i + 1 ? "default" : "secondary"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
