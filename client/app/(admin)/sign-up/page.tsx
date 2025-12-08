"use client";
/*
 * This is just a sample page (might need to move to users in the future)
 * However, with the current spec there is no need for this page
 * Also, the logic on this page is a pain in the ass.
 */

import { LogIn, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef1 = useRef<HTMLInputElement>(null);
    const passwordRef2 = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [showPassword1, setShowPassword1] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);
    const [doPasswordsMatch, setDoPasswordsMatch] = useState<string>("empty");

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleChangePassword1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword1(e.target.value);
    };
    const handleChangePassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value);
    };

    const handleShowPassword1 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword1((prev) => !prev);
    };
    const handleShowPassword2 = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword2((prev) => !prev);
    };

    useEffect(() => {
        const checkIfPasswordsMatch = () => {
            if (password1 !== "" && password2 !== "") {
                if (password1 !== password2) {
                    setDoPasswordsMatch("no match");
                } else {
                    setDoPasswordsMatch("match");
                }
            } else {
                setDoPasswordsMatch("empty");
            }
        };
        checkIfPasswordsMatch();
    }, [password1, password2]);

    return (
        <div className="w-full h-screen">
            <form className="grid grid-cols-12 h-screen">
                <div className="flex flex-col items-start justify-center col-span-12 md:col-span-5 lg:col-span-4 px-6 lg:px-10 gap-4 xl:px-24">
                    <div>
                        <h3>Sign Up</h3>
                        <p>
                            Create your account to access some of the best
                            Coworking spaces on the market.
                        </p>
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
                            onClick={() => passwordRef1.current?.focus()}
                            className="flex items-center focus-within:border-bloom-orbit rounded-2xl border border-slate-300 pl-4 gap-2 transition-all ease-in-out focus-within:scale-105 focus-within:shadow-2xl group"
                        >
                            <Lock className="text-slate-400 group-focus-within:text-bloom-orbit transition-all ease-in-out duration-150" />
                            <input
                                type={showPassword1 ? "text" : "password"}
                                id="password"
                                value={password1}
                                onChange={handleChangePassword1}
                                ref={passwordRef1}
                                className="p-2 outline-none border-none focus:focus-within:border-none w-full"
                            />
                            <button
                                onClick={handleShowPassword1}
                                className="p-2 text-slate-400 group-focus-within:text-bloom-orbit transition-all"
                                type="button"
                            >
                                {showPassword1 ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="password"
                            className="pl-2 text-sm font-bold"
                        >
                            Validate Password:
                        </label>
                        <div
                            onClick={() => passwordRef2.current?.focus()}
                            className="flex items-center focus-within:border-bloom-orbit rounded-2xl border border-slate-300 pl-4 gap-2 transition-all ease-in-out focus-within:scale-105 focus-within:shadow-2xl group"
                        >
                            <Lock className="text-slate-400 group-focus-within:text-bloom-orbit transition-all ease-in-out duration-150" />
                            <input
                                type={showPassword2 ? "text" : "password"}
                                id="password"
                                value={password2}
                                onChange={handleChangePassword2}
                                ref={passwordRef2}
                                className="p-2 outline-none border-none focus:focus-within:border-none w-full"
                            />
                            <button
                                onClick={handleShowPassword2}
                                className="p-2 text-slate-400 group-focus-within:text-bloom-orbit transition-all"
                                type="button"
                            >
                                {showPassword2 ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                    </div>
                    <p className={`${doPasswordsMatch === "match" ? "text-green-500": doPasswordsMatch === "no match" ? "text-red-500" : "h-0" } transition-all ease-in-out duration-300`}>
                        { doPasswordsMatch === "match" ? "Passwords Match" : doPasswordsMatch === "no match" ? "Passwords do not match" : ""}
                    </p>
                    <button
                        type="submit"
                        className="w-full bg-bloom-orbit text-white py-2 rounded-xl hover:-translate-y-0.5 hover:bg-bloom-orbit/80 transition-all ease-in-out"
                    >
                        {" "}
                        Sign Up
                    </button>
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <p>Already have an account?</p>
                        <Link href="/login" className="text-bloom-orbit">
                            Login
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block relative md:col-span-7 lg:col-span-8">
                    <Image
                        src="/assets/images/create_account_page.jpg"
                        alt="The Space Space"
                        fill
                        className="object-cover rounded-r-[2em]"
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
