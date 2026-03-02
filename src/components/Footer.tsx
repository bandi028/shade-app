"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const href = e.currentTarget.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        e.preventDefault();

        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);

        if (elem) {
            const offset = 80;
            const elementPosition = elem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Link href="/" className="text-3xl font-serif font-semibold tracking-wide text-white flex items-center group">
                            HSNG <span className="text-blue-400 font-medium ml-1.5 transition-colors group-hover:text-amber-500">& Co.</span>
                        </Link>
                        <p className="text-gray-400 text-base max-w-sm">
                            Unlock your financial potential with expert guidance, strategic insights, and comprehensive planning.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2 sm:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                                    Services
                                </h3>
                                <ul className="space-y-3">
                                    {['Assurance services', 'Taxation services', 'Regulatory services', 'Accounting & Bookkeeping', 'Advisory services', 'Virtual CFO'].map((item) => (
                                        <li key={item}>
                                            <Link href="#services" onClick={handleScroll} className="text-base text-gray-400 hover:text-white transition-colors">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                                    Contact Us
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <MapPin className="flex-shrink-0 h-6 w-6 text-gray-400 mt-0.5" aria-hidden="true" />
                                        <span className="ml-3 text-base text-gray-400">
                                            #H1103, 11th Floor, Satva Laurel Heights,<br />
                                            Hesaraghatta Main Road, chikkasandra.<br />
                                            Karnataka-560057
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <Phone className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3 text-base text-gray-400">
                                            <a href="tel:+919148353052" className="hover:text-white transition-colors">+91 91483 53052</a>
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <Mail className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3 text-base text-gray-400">
                                            <a href="mailto:info@hsngandco.com" className="hover:text-white transition-colors">info@hsngandco.in</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-500 mb-4 md:mb-0">
                        &copy; {currentYear} Hsng & co. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
