import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-themeBlack">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-white sm:justify-start text-3xl font-bold">
              Footer
            </div>
            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-themeMidGray sm:max-w-xs sm:mx-0 sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
            <div className="flex justify-center gap-3 mt-8 md:gap-4 sm:justify-start">
              <div className="bg-white rounded-lg p-2">
                <Link href="/" className="text-themeBlack">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="bg-white rounded-lg p-2">
                <Link href="/" className="text-themeBlack">
                  <FaInstagram />
                </Link>
              </div>
              <div className="bg-white rounded-lg p-2">
                <Link href="/" className="text-themeBlack">
                  <FaTwitter />
                </Link>
              </div>
              <div className="bg-white rounded-lg p-2">
                <Link href="/" className="text-themeBlack">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Company History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Meet the Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Employee Handbook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Google Ads
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>
              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75">
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    href="mailto:john@doe.com"
                    className="flex items-center justify-center sm:justify-start gap-1.5 group">
                    <FaEnvelope className="w-3 h-3 text-white shrink-0" />
                    <span className="text-white transition group-hover:text-white/75">
                      john@doe.com
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:0123456789"
                    className="flex items-center justify-center sm:justify-start gap-1.5 group">
                    <FaPhoneAlt className="w-3 h-3 text-white shrink-0" />
                    <span className="text-white transition group-hover:text-white/73">
                      0123456789
                    </span>
                  </Link>
                </li>
                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                  <FaMapMarkerAlt className="w-3 h-3 text-white shrink-0" />
                  <address className="-mt-0.5 not-italic text-white">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-12 border-t border-themeGray">
          <p className="mt-4 text-sm text-center text-themeSubGray sm:order-first sm:mt-0">
            © 2022 Company Name All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
