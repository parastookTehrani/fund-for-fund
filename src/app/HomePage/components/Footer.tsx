import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-t-3xl  ">
      <div className="flex justify-between md:justify-start md:gap-[15%] md:border-b border-b-[#AA99EC] px-[5%] pt-10.5 pb-25 md:pb-10 md:px-[10%]">
        <div>
          <p className="mb-4.5">ABOUT</p>
          <ul className="flex flex-col items-start">
            <li className="py-2 hover:text-[#644FC1] hover:border-b border-[#644FC1] ">
              <Link href="#">About Us</Link>
            </li>
            <li className="py-2 hover:text-[#644FC1] hover:border-b border-[#644FC1]">
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4.5">RESOURSES</p>
          <ul className="flex flex-col items-start">
            <li className="py-2 hover:text-[#644FC1] hover:border-b border-[#644FC1] ">
              <Link href="#">Blog</Link>
            </li>
            <li className="py-2 hover:text-[#644FC1] hover:border-b border-[#644FC1] ">
              <Link href="#">How 3f works?</Link>
            </li>
            <li className="py-2 hover:text-[#644FC1] hover:border-b border-[#644FC1] ">
              <Link href="#">Help & Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4.5">CONTRIBUTING</p>
          <ul className="flex flex-col items-start">
            <li className="py-2 hover:text-[#644FC1] hover:border-b border-[#644FC1] ">
              <Link href="#">Brand & Organizations</Link>
            </li>
            <li className="py-2 hover:text-[#644FC1] hover:border-b border-[#644FC1] ">
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-around items-center pb-5.5" >
          <div className="px-4 py-2 bg-white rounded-md text-[#123D6F]">
            English (100%)
          </div>
          <div>
            <ul className="flex gap-3">
            <li><a href="#"><Image src="/twitter.png" width={16} height={13} alt="logo" /></a></li>
            <li><a href="#"><Image src="/discord.png" width={16} height={13} alt="logo" /></a></li>
            <li><a href="#"><Image src="/gitHub.png" width={16} height={13} alt="logo" /></a></li>
            <li><a href="#"><Image src="/linkdin.png" width={16} height={13} alt="logo" /></a></li>
            <li><a href="#"><Image src="/email.png" width={16} height={13} alt="logo" /></a></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
