"use client"
import Link from 'next/link';
import React from 'react'

const page = () => {

    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const resp = await fetch("http://localhost:3000/signup/api",{
            method: "POST",
            body: JSON.stringify(newUser),
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
            <div className="flex items-center border justify-center">

                <div className="w-1/2 p-12">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                        Sign Up
                    </h6>
                    <form onSubmit={handleSignUp} action="">
                        <label htmlFor="email">Name</label> <br />
                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="your email"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="your password"
                            className="w-full mt-3 input input-bordered"
                        />
                        <br />
                        <button
                            type="submit"
                            className="w-full btn btn-primary mt-12 text-lg"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <h6 className="my-12 text-center">or sign in with</h6>
                        <h6 className="my-12 text-center">
                            Already have account ?{" "}
                            <Link className="text-primary font-semibold" href={"/api/auth/signin"}>
                                Sign In
                            </Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
