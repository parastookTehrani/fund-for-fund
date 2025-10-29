import Image from "next/image";
import Link from "next/link";
import Button from "./shared/button";


export const Nav = () => {
  return (
    <nav className="py-[6px] px-[5%] md:py-[16px] md:px-[10%] flex items-center justify-between">
      <Image src="/Vector.png" width={27} height={48} alt="logo" />
      <div className="flex gap-[22px] items-center md:hidden">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.5 1.75C4.77 1.75 1.75 4.7721 1.75 8.5C1.75 12.2279 4.77 15.25 8.5 15.25C10.36 15.25 12.05 14.4953 13.27 13.273C14.5 12.0506 15.25 10.3642 15.25 8.5C15.25 4.7721 12.23 1.75 8.5 1.75ZM0.25 8.5C0.25 3.9437 3.94 0.25 8.5 0.25C13.06 0.25 16.75 3.9437 16.75 8.5C16.75 10.5078 16.0301 12.3491 14.8401 13.7793L19.53 18.4697C19.82 18.7626 19.82 19.2374 19.53 19.5303C19.24 19.8232 18.76 19.8232 18.47 19.5303L13.78 14.8399C12.35 16.032 10.51 16.75 8.5 16.75C3.94 16.75 0.25 13.0563 0.25 8.5Z"
              fill="#644FC1"
            />
          </svg>
        </span>
        <span>
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1C0 0.4477 0.45 0 1 0H23C23.55 0 24 0.4477 24 1C24 1.5523 23.55 2 23 2H1C0.45 2 0 1.5523 0 1ZM0 8C0 7.4477 0.45 7 1 7H23C23.55 7 24 7.4477 24 8C24 8.5523 23.55 9 23 9H1C0.45 9 0 8.5523 0 8ZM0 15C0 14.4477 0.45 14 1 14H23C23.55 14 24 14.4477 24 15C24 15.5523 23.55 16 23 16H1C0.45 16 0 15.5523 0 15Z"
              fill="#644FC1"
            />
          </svg>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-20 justify-between">
        <ul className="flex gap-6 text-[#444444]">
          <li >
            <Link  href="/">Home</Link>
          </li>
          <li>
            <Link href={""}>Explore</Link>
          </li>
          <li>
            <Link href={""}>About us</Link>
          </li>
          <li>
            <Link href={""}>Help & Support</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-3.5  border-[0.5px] px-3 py-2 text-sm rounded-md border-[#E7E7E7] shadow-[-2px_2px_10px_0px_#95959526]">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.5 1.75C4.77 1.75 1.75 4.7721 1.75 8.5C1.75 12.2279 4.77 15.25 8.5 15.25C10.36 15.25 12.05 14.4953 13.27 13.273C14.5 12.0506 15.25 10.3642 15.25 8.5C15.25 4.7721 12.23 1.75 8.5 1.75ZM0.25 8.5C0.25 3.9437 3.94 0.25 8.5 0.25C13.06 0.25 16.75 3.9437 16.75 8.5C16.75 10.5078 16.03 12.3491 14.84 13.7793L19.53 18.4697C19.82 18.7626 19.82 19.2374 19.53 19.5303C19.24 19.8232 18.76 19.8232 18.47 19.5303L13.78 14.8399C12.35 16.032 10.51 16.75 8.5 16.75C3.94 16.75 0.25 13.0563 0.25 8.5Z"
                  fill="#959595"
                />
              </svg>
            </span>
            <input
            className="focus:outline-0"
              type="text"
              placeholder="Search brand, category, tag or..."
            />
          </div>
          <div className="w-15">
          <Button>
            <Link href="/Signin">SignIn</Link>
          </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
