"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <>
    <header className="w-[100%] h-[110px] bg-white px-[7%] flex flex-col animate-[slide-down-fade_1s_ease-in-out]">
    <div className="w-[100%] h-[90px] flex justify-between items-center">
      <div className="w-[200px]">
        <Image
          src="/images/logo.png"
          width={200} 
          height={100}  
          alt="Loading.."
        />
      </div>
      <div className="flex gap-3 justify-between">
        <HeaderContact 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF5100" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
          }
          title="MAIL US"
          text="info@eleadersnetwork.com"
        />

        <HeaderContact 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF5100" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>
          }
          title="CALL US"
          text="0708-701-3213"
        />

        <HeaderContact 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FF5100" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          }
          title="WORKING HOURS"
          text="Mon - Fri, 8am - 6pm"
        />
        
      </div>
    </div>

    </header>

    <nav className="w-[86%] bg-[#578caf] m-auto mt-[-25px] rounded-[3px] px-[20px] flex justify-between items-center animate-[slide-down-fade_2s_ease-in-out]">
      <ul className="flex gap-2 h-[50px] justify-between items-center">
        <NavLink url="/" text="HOME PAGE" title="HOME PAGE" />
        <NavLink url="/about-us" text="ABOUT US" title="ABOUT US" />
        <NavLink url="/" text="OUR SERVICES" />
        <NavLink url="/" text="SOLUTIONS" />
        <NavLink url="/" text="FAQs" />
        <NavLink url="/" text="CONTACT US" />
      </ul>
      <button className=" bg-[#FF5100] h-[40px] px-3 rounded-[3px] text-white text-[14px]" style={{ fontFamily: 'sub-title-font' }}>GET IN TOUCH</button>
    </nav>
    </>
  );
}

export function HeaderContact({icon, title, text}) {
  return (
    <div className="flex flex-col gap-0 text-[13px] px-4">
          <h3 className="text-[14px] flex gap-1 text-[#006EBB]">
            {icon}
            <span>{title}</span>
          </h3>
          <p>{text}</p>
      </div>
  );
}

export function NavLink({url, text, title}) {
  return (
    <Link 
      href={url}
      className="h-[40px] px-3 text-[14px] flex items-center hover:bg-white/50 rounded-[3px] cursor-pointer text-white transition ease-in-out delay-150" title={title}>
      {text}
    </Link>
  );
}