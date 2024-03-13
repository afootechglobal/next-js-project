import Image from "next/image";

export default function FullPageLoadingIcon() {
  return (
    <div className=" h-[100%] w-[100%] fixed flex z-[1000]  justify-center bg-[#FFF] items-center top-0">
        <div className="w-[200px] h-[50px] bg-slate-400">
        <Image
            src="/images/loader.gif"
            width={200} 
            height={50}  
            alt="Loading.."
        />
        </div>
    </div>
  );
}



export function InnerLoading() {
  return (
    <div className={`flex justify-center items-center h-[200px] ${style}`}>
      <TailSpinPreloader width={72} height={72} fill="#efb703" />
    </div>
  );
}
