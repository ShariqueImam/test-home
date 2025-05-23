"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";
import Link from "next/link";
export default function Header10({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll d-flex align-items-center justify-content-center"> 
        <a href="#top" className="logo">
        <Image
          src="/assets/images/full-width-images/logo-new.jpg"
          alt="Your Company Logo"
          width={120}
          height={120}
        />
        <h3> Caregiving Management</h3>
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          {/* Languages */}
          {/* End Languages */}
          {links[0].href.includes("/") ? (
            <li>
              <Link href="/contact" className="opacity-1 no-hover">
                <span
                  className="link-hover-anim underline"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    <span className="icon-ellipse me-1 text-black" /> Get Care
                    Today
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    <span className="icon-ellipse me-1 text-black" /> Get Care
                    Today
                  </span>
                </span>
              </Link>
            </li>
          ) : (
            <li>
              <a href="#contact" className="opacity-1 no-hover">
                <span className="link-hover-anim" data-link-animate="y">
                  <span className="icon-ellipse me-1 " /> Get Care Now
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
