"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

// Assign Page to a variable to define the component name explicitly
const Page = () => {
    const router = useRouter();

    const handleAddContact = async (e) => {
        e.preventDefault();
        const newContact = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        };

        const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts/api/add`, {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                "content-type": "application/json",
            },
        });

        if (resp.status === 200) {
            e.target.reset();
            router.push('/contacts');
        }
    };

    return (
        <div className="">
            <div className="flex items-center justify-center">
                <div className="w-1/2 p-12">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                        Enter your contact
                    </h6>
                    <form onSubmit={handleAddContact} action="">
                        <label htmlFor="name">Name</label> <br />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br /> <br />

                        <label htmlFor="phone">Phone</label> <br />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your phone"
                            className="w-full mt-3 input input-bordered"
                        />
                        <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input
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
                            Save Contact
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
