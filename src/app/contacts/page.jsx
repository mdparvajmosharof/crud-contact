"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:3000/contacts/api/get-all");

      const data = await res.json();
      setContacts(data?.contacts || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    // Fetch contacts when component mounts
    

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const deleted = await fetch(`http://localhost:3000/contacts/api/delete/${id}`, {
        method: "DELETE",
      });
      const resp = await deleted.json();
        console.log(deleted)
        console.log(resp)

        if(resp?.response?.deletedCount>0){
          fetchContacts();
        }else {
        console.error("Failed to delete contact:", resp.message);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Contacts</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact, index) => (
            <tr key={contact._id} className="hover">
              <th>{index + 1}</th>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <Link href={`contacts/update/${contact._id}`}><button  className="btn">Edit</button></Link>
                
              </td>
              <td>
                <button onClick={() => handleDelete(contact._id)} className="btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
