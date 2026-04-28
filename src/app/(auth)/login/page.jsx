"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [isShowPassword, setIsShowPassword] = useState(true)


    const handleLogin = async (data) => {
        const { name, email, password, photo } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error)
    }

    console.log(errors)

    return (
        <div className='container flex flex-col items-center justify-center mx-auto'>
            <h2>Login page</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" {...register("email", { required: "Email field is required" })} placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type={isShowPassword? "text" : "password"} className="input" {...register("password", { required: "Password field is required" })} placeholder="Password" />
                    {isShowPassword? <FaEye onClick={() => setIsShowPassword(!isShowPassword)}/> : <FaEyeSlash onClick={() => setIsShowPassword(!isShowPassword)}/>}
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
            <p>Dont have an account? <Link href={'/register'}>Rgister</Link></p>
        </div>
    );
};

export default LoginPage;