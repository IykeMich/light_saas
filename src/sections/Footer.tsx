import Image from "next/image";
import logo from "@/assets/logosaas.png"
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        {/* <p className="mt-6">&copy; 2025 <a href="https://wa.me/+2349039374531" target="_blank" rel="noopener noreferrer">Ikechukwu Michael.</a> All rights reserved.</p> */}
        <p className="mt-6 text-sm text-gray-500">
          &copy; 2025 Ikechukwu Michael. Site developed by <a href="https://wa.me/+2349039374531" target="_blank" rel="noopener noreferrer" className="underline">Ikechukwu Michael</a> <br /> using a template by <a href="https://www.youtube.com/@frontend-tribe" target="_blank" rel="noopener noreferrer" className="underline">Frontend Tribe</a>. All rights to the original template are reserved to Frontend Tribe.
        </p>

      </div>
    </footer>
  );
};
