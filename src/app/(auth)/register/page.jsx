"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = async (data) => {

        const { name, email, password, photo } = data;

        const { data: res, error} = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });

        console.log(res, error)

        if(error) {
            alert(error.message)
        } else {
            alert("Sign Up Successful")
        }

    }

    return (
        <div className='container flex flex-col items-center justify-center mx-auto'>
            <h2>Register page</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Register</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input" {...register("name", { required: "Name field is required" })} placeholder="Name" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <label className="label">Photo URL</label>
                    <input type="text" className="input" {...register("photo", { required: "Photo field is required" })} placeholder="Photo url" />
                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                    <label className="label">Email</label>
                    <input type="email" className="input" {...register("email", { required: "Email field is required" })} placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" className="input" {...register("password", { required: "Password field is required" })} placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
            <p>Dont have an account? <Link href={'/login'}>Login</Link></p>
        </div>
    );
};

export default RegisterPage;