"use client";
import {OtherPagesTitle} from "@/components/site/websiteBody";
import {FaqItem} from "@/components/site/websiteBody";
////////////////////////////////////////////////////////////

export default function FaqUpPage() {
   
    return (
      <>
        <OtherPagesTitle
          title="Frequently Asked Questions"
          ul="Frequently Asked Questions"
        />

        <div className="w-[100%] relative top-[100%]">
          <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
            <div className="w-[100%] m-h-[300px] py-8 px-0">
              <div className="flex flex-col items-start w-full gap-6 bg-white">

                <FaqItem 
                  title="What is the importance of the vision of Leaders Network?"
                />

                <FaqItem 
                  title="What is the explanation of the Mission statement?"
                />

                <FaqItem 
                  title="What are the products and services of Leaders Network?"
                />

                <FaqItem 
                  title="When was Leaders Network incorporated"
                />

                <FaqItem 
                  title="Who are the clients of Leaders Network?"
                />

                <FaqItem 
                  title="Where are the partners of Leaders Network from?"
                />                  
              </div>
            </div> 
          </div>
         
        </div>
      </>
    );
  }


 
  