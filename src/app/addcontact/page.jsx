"use client"
import React from 'react'


const page = () => {

    const handleAddContact = async (e) => {
        e.preventDefault();
        const newContact = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }

        const resp = await fetch("http://localhost:3000/contacts/api/add", {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                "content-type": "application/json",
            }
        })

        if (resp.status === 200) {
            e.target.reset();
        }
    }

    return (
        <div className="container px-24 mx-auto py-24">
            <div className="flex items-center  justify-center">

                <div className="w-1/2 p-12">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                        Enter our contact
                    </h6>
                    <form onSubmit={handleAddContact} action="">
                        <label htmlFor="email">Name</label> <br />
                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br /> <br />
                        

                        <label htmlFor="phone">phone</label> <br />
                        <input
                            type="text"
                            name="phone"
                            placeholder="your phone"
                            className="w-full mt-3 input input-bordered"
                        />
                        <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="your email"
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
    )
}

export default page
