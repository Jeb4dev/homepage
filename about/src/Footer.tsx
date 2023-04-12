import React from "react";

export const Footer = () => {
    return (<div className="relative bg-zinc-900">
        <svg
            className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-zinc-900"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
        >
            <path
                fill="currentColor"
                d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 md:grid-cols-6 lg:content-center">
                {/* Logo */}
                <div className="md:max-w-md md:col-span-2">
                    <a href="/" className="flex items-center">
                        <img src="/lambda.png" className="w-8 mr-3" alt="Lambda icon"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jeb's portfolio</span>
                    </a>
                    <div className="ml-11 mt-4 lg:max-w-sm">
                        <p className="text-sm text-gray-100">
                            Software developer and ethical hacker from Finland.
                        </p>
                    </div>
                </div>
                {/* End Logo */}
                {/* Links */}
                <div className="grid grid-cols-2 gap-5 row-gap-8 md:col-span-4">
                    <div>
                        <p className="font-semibold tracking-wide text-gray-50">
                            Contacts
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="mailto:contact@jeb4.dev" target="_blank"
                                   className="text-sm text-gray-100 hover:underline">
                                    contact@jeb4.dev
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/Jeb444" target="_blank"
                                   className="text-sm text-gray-100 hover:underline">
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a href="https://matrix.to/#/@jeb4:matrix.org" target="_blank"
                                   className="text-sm text-gray-100 hover:underline">
                                    Matrix
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-gray-50">
                            Other pages
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="https://tryhackme.jeb4.dev/"
                                    target="_blank"
                                    className="text-gray-100 hover:underline"
                                >
                                    TryHackMe Notes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://writeup.jeb4.dev/"
                                    target="_blank"
                                    className="text-gray-100 hover:underline"
                                >
                                    CTF Writeups
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* End Links*/}
            </div>
            <div
                className="flex flex-col justify-center pt-5 pb-10 border-t sm:flex-row">
                <p className="text-sm text-gray-100">
                    © Copyright 2023 Jeb. All rights reserved.
                </p>
            </div>
        </div>
    </div>);
};