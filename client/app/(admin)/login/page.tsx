"use client";

import { LogIn, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="w-full h-screen">
            <form className="grid grid-cols-12 h-screen">
                <div className="hidden md:block relative md:col-span-7 lg:col-span-8">
                    <Image
                        src="/assets/images/login_image.jpg"
                        alt="The Space Space"
                        fill
                        className="object-cover rounded-r-[2em]"
                    />
                </div>
                <div className="flex flex-col items-start justify-center col-span-12 md:col-span-5 lg:col-span-4 px-6 lg:px-10 gap-4 xl:px-24">
                    <div>
                        <h3>Welcome Back</h3>
                        <p>Enter your credentials to access your account. </p>
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="login"
                            className="pl-2 text-sm font-bold"
                        >
                            Email:
                        </label>
                        <div
                            onClick={() => emailRef.current?.focus()}
                            className="flex items-center focus-within:border-bloom-orbit rounded-2xl border border-slate-300 pl-4 gap-2 transition-all ease-in-out focus-within:scale-105 focus-within:shadow-2xl group"
                        >
                            <LogIn className="text-slate-400 group-focus-within:text-bloom-orbit transition-all ease-in-out duration-150" />
                            <input
                                type="email"
                                id="login"
                                value={email}
                                onChange={handleChangeEmail}
                                ref={emailRef}
                                className="p-2 outline-none border-none focus:focus-within:border-none rounded-r-2xl w-full"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="password"
                            className="pl-2 text-sm font-bold"
                        >
                            Password:
                        </label>
                        <div
                            onClick={() => passwordRef.current?.focus()}
                            className="flex items-center focus-within:border-bloom-orbit rounded-2xl border border-slate-300 pl-4 gap-2 transition-all ease-in-out focus-within:scale-105 focus-within:shadow-2xl group"
                        >
                            <Lock className="text-slate-400 group-focus-within:text-bloom-orbit transition-all ease-in-out duration-150" />
                            <input
                                type={showPassword ? "text": "password"}
                                id="password"
                                value={password}
                                onChange={handleChangePassword}
                                ref={passwordRef}
                                className="p-2 outline-none border-none focus:focus-within:border-none w-full"
                            />
                            <button
                                onClick={handleShowPassword}
                                className="p-2 text-slate-400 group-focus-within:text-bloom-orbit transition-all"
                                type="button"
                            >
                                {showPassword ?  <Eye /> : <EyeOff />}
                            </button>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="text-end w-full text-bloom-orbit font-semibold text-sm hover:text-bloom-orbit/80 transition-colors ease-in-out"
                    >
                        {" "}
                        Forgot Password?{" "}
                    </Link>
                    <button
                        type="submit"
                        className="w-full bg-bloom-orbit text-white py-2 rounded-xl hover:-translate-y-0.5 hover:bg-bloom-orbit/80 transition-all ease-in-out"
                    >
                        {" "}
                        Login
                    </button>
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <p>Don't have an account?</p>
                        <Link href="/sign-up" className="text-bloom-orbit">
                            {" "}
                            Create an Account{" "}
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
