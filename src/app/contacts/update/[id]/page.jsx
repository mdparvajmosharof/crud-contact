"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';

const Page = ({ params }) => {
    const router = useRouter();
    const { id } = params; // Directly destructure `id` from `params`

    const [contacts, setContacts] = useState({});

    // Memoize fetchContacts to prevent unnecessary re-renders
    const fetchContacts = useCallback(async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts/api/delete/${id}`);
            const data = await res.json();
            console.log(data.data);
            setContacts(data.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    }, [id]); // Only re-run if `id` changes

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const handleAddContact = async (e) => {
        e.preventDefault();
        const newContact = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        };

        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts/api/delete/${id}`, {
            method: "PATCH",
            body: JSON.stringify(newContact),
            headers: {
                "content-type": "application/json",
            }
        });

        if (resp.status === 200) {
            fetchContacts();
            e.target.reset();
            router.push("/contacts");
        }
    };

    return (
        <div className="">
            <div className="flex items-center justify-center">
                <div className="w-1/2 p-12">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                        Update Contact
                    </h6>
                    <form onSubmit={handleAddContact} action="">
                        <label htmlFor="email">Name</label> <br />
                        <input
                            defaultValue={contacts.name}
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br /> <br />

                        <label htmlFor="phone">Phone</label> <br />
                        <input
                            defaultValue={contacts.phone}
                            type="text"
                            name="phone"
                            placeholder="Your phone"
                            className="w-full mt-3 input input-bordered"
                        />
                        <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input
                            defaultValue={contacts.email}
                            type="text"
                            name="email"
                            placeholder="Your email"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br />
                        <button
                            type="submit"
                            className="w-full btn btn-primary mt-12 text-lg"
                        >
                            Update Contact
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
