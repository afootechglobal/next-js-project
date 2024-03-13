"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full m-h-[350px] bg-[#25292D] px-[7%] py-[25px] flex flex-col">
        <div className="w-[100%] m-h-[100px] max-w-[1200px] m-auto m-b-[30px] py-[30px] flex justify-between items-center border-b border-gray-300 border-solid border-opacity-50">
          <div className="flex flex-row items-start gap-3 justfy-between text-[#e9e9e9]">
            <div className="w-[30%] flex flex-col gap-5">
              <h4 className="text-[18px] p-0 m-0">About Us</h4>
              <p className="text-[#c0c0c0] text-[13px]">
                Leaders Network has been delivering trusted technology solutions
                for Corporate Bodies, Government, Telecommunication,
                Educational, Insurance and Financial Services all over the
                world.
              </p>

              <div className="w-[120px]">
                <Image
                  src="/images/logo.png"
                  width={120}
                  height={70}
                  alt="Loading.."
                />
              </div>
            </div>

            <div className="w-[30%]">
              <h4 className="text-[18px] p-0 m-0">Quick Links</h4>
              <ul className="flex flex-col mt-[25px] items-start justify-between gap-2">
                <NavLink url="/about-us" text="About US" />
                <NavLink url="/services" text="Our Services" />
                <NavLink url="/" text="FAQs" />
                <NavLink url="/" text="Contact Us" />
              </ul>
            </div>

            <div className="w-[30%] flex flex-col flex-wrap justify-start items-start gap-5">
              <h4 className="text-[18px]">Social</h4>

              <SocialMedia  
                icon={<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                }
                text="Whatsapp"
                url="/#"
              />

              <SocialMedia              
                icon={<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                }
                text="Facebook"
                url="/#"
              />
            </div>


            <div className="w-[30%] flex flex-col gap-3 items-start">
              <h4 className="text-[18px] p-0 m-0">Newsletter</h4>
              <p className="text-[13px] text-[#c0c0c0]">Subscribe to our weekly Newsletter and receive update via email</p>
             
              <div className="w-[90%] flex justify-normal flex-row">
                <input className="w-[90%] p-2 text-sm text-[#000] outline-none bg-white" placeholder="Enter your email" />
                <button className="p-2 text-white bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-send-arrow-up-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z"/>
                    <path fill-rule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z"/>
                  </svg>
                </button>
              </div>
            </div>  
          </div>
        </div>
        
        <div className="py-[15px] flex flex-col gap-2 items-center text-[13px] text-[#c0c0c0]">
          <p>© 2022 - 2024 Leader Network Limited. All Rights Reserved. <span className="text-white text-[14px] cursor-pointer">Terms - Privacy</span></p>
          <p>
            Developed by{""}
            <Link href="http://www.afootechglobal.com/" target="_blank" className="text-white text-[14px] ml-[5px] cursor-pointer hover:underline">
              AfooTech Global I.T Solution
            </Link>
          </p>

        </div>
      </footer>
    </>
  );
}

export function NavLink({ url, text }) {
  return (
    <Link
      href={url}
      className="h-[30px] text-[14px] flex items-start hover:text-[#fff] cursor-pointer transition ease-in-out delay-150"
    >
      {text}
    </Link>
  );
}


export function SocialMedia({url, icon, text}) {
  return (
    <Link
      href={url}
      >
      <p className="text-[13px] flex gap-2 text-[#c0c0c0] mt-[10px]">
        {icon}
        <span>{text}</span>
      </p>
    </Link>
  );
}