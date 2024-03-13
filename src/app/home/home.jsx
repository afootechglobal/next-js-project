"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageTitle} from "@/components/site/websiteBody";
import { PageButton } from "@/components/site/websiteBody";
import { Services } from "@/components/site/websiteBody";
import { Solutions } from "@/components/site/websiteBody";
import {FaqItem} from "@/components/site/websiteBody";
import { ContactButton } from "@/components/site/websiteBody";
import Footer from "@/components/site/footer";
////////////////////////////////////////////////////////////

export default function HomePage() {

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); 
  const CONTENT = [
    "Document Management",
    "Resource As A Service",
    "Software Development"
  ];
  const slideText = () =>{
      const interval = setInterval(() => {
        setText(prevText => {
          if (prevText === CONTENT[index]) {
            clearInterval(interval);
            setTimeout(() => {
              setIndex(prevIndex => (prevIndex + 1) % CONTENT.length);
            }, 5000); // Delay before typing next line (milliseconds)
            return prevText;
          } else {
            return CONTENT[index].slice(0, prevText.length + 1);
          }
        });
      }, 100); // Adjust typing speed here (milliseconds)
      // Clean up interval on component unmount and before next line
      return () => clearInterval(interval);
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText("");
      slideText();
    }, 100);
    return () => clearTimeout(timeout);
  }, [index]);

    return (
      <>
      {/* Slide Section */}
      <div className="w-full h-full absolute top-[0px] bg-[url('/images/slide-bg.jpg')] bg-cover bg-bottom bg-no-repeat">
        <div className="w-full h-full relative bg-black/70 pt-[200px] flex flex-col gap-5 items-center">
          <h1 className="text-center text-[60px] text-white animate-[slide-up-fade_2s_ease-in-out]">
            Information Technology and <br/>
            <span className="text-[#FF5100]" id="page-title">{text}</span><br/>
            Consultants
          </h1>
          <button className="w-[40%] min-w-[250px] text-[20px] bg-[#006EBB] h-[60px] px-3 rounded-[7px] text-white hover:text-[#fff] hover:bg-[#444444] transition ease-in-out delay-150" style={{ fontFamily: 'sub-title-font' }}>
            GET IN TOUCH
          </button>
        </div>
      </div>


       {/* Index Section */}
      <div className="w-[100%] absolute top-[100%]">
        
        {/* About Section */}
        <div className="w-[100%] m-h-[300px] py-8 px-0">
          <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
            <div className="w-[100%] flex flex-col gap-0 items-center">
              
              <PageTitle
                title="About Leaders Network Limited"
                text="Best Management and Information Technology Consultants"           
              />
            
              <div className="w-[100%] mt-[40px] flex justify-between items-center">
                <div className="w-[50%">
                  <Image
                    src="/images/about-leaders-network.png"
                    width={650} 
                    height={500}  
                    alt="Loading.."
                  />
                </div>

                <div className="w-[50%] min-h-[400px] flex flex-col gap-0 justify-between items-end">
                  <p className="leading-8 text-justify text-[16px]">Leaders Network Ltd is a firm of Management and Information Technology Consultants providing services on Document Management, Resource As A Service (RAAS), Software Development, Social Media Campaigns, Management Training and Smartcard Solutions </p>
                  <p className="leading-8 text-justify text-[16px]">Our consulting methodology is driven by world-class tools sourced from our international partner firms in the USA, India, United Kingdom and South Africa. This partnership provides us with excellent training, development and consultancy support.</p>
                  <PageButton
                  text="READ MORE"
                  />
                </div> 
              </div>        
            </div>
          </div> 
        </div> 
      
        {/* Services Section */}
        <div className="w-[100%] min-h-[300px] py-8 px-0">
          <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
            <div className="w-[100%] flex flex-col gap-0 items-center">
              
              <PageTitle
                title="Our Services"
                text="Leaders Network offers the following Products and Services "           
              />

              <div className="w-[100%] flex flex-row justify-between gap-5 items-center">
                <Services
                  img="/images/document-management.jpg"
                  title="Document Management"
                  text="Leaders Network Ventures Ltd offer services in Digital Information, Work Flow evaluation, Project Management, Scanning, Capturing and...."                
                  url="/#"
                />

                <Services
                  img="/images/software-development.png"
                  title="Software Development"
                  text="Leaders Network Limited is a Software development & Solution firm that is focused on developing high standard and cost persuasive...."                 
                  url="/#"
                />   

                <Services
                  img="/images/RaaS.png"
                  title="Resource As A Service (RAAS)"
                  text="Leaders Network is experienced in Human resource outsourcing for Information Technology and Management jobs whereby an employer transfers...."
                  url="/#"
                />  
              </div>

              <div className="w-[100%] flex flex-row justify-between gap-5 items-center">
                <Services
                  img="/images/social-media.png"
                  title="Social Media Campaigns"
                  text="In view of the fact that the present social media platforms being used by politicians in Nigeria now rely so much on followership...."
                  url="/#"
                />  

                <Services
                  img="/images/management-trainning.jpg"
                  title="Management Training"
                  text="We train on the following: Leadership Training, Time Management and Human Development Training ...."
                  url="/#"
                />  

                <Services
                  img="/images/smartcard.jpg"
                  title="Smart-Card Programming"
                  text="Leaders Network offers solution for clients through the Smartcard technology. This comprise of smartcards and card readers...."
                  url="/#"
                />    
              </div>   
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="w-[100%] min-h-[300px] py-8 px-0">
          <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
            <div className="w-[100%] flex flex-col gap-0 items-center">
              
              <PageTitle
                title="Solution"
                text="We have the following solutions to solve challenges being faced by governments "           
              />

              <div className="w-[100%] flex flex-row justify-between gap-5 items-center">
                <Solutions
                  img="/images/smartcard.jpg"
                  title="Smart TaxCard"
                  text="The present Tax card being used by many state government and agencies even though electronics, are presently not readable by any Mobile device...."            
                  url="/#"
                />

                <Solutions
                  img="/images/RaaS.png"
                  title="Smart CMR CARD"
                  text="It is known that about 75% of the crimes such as Car Theft, Armed Robbery, Kidnapping, Bombing, Attack, Burglary, Bag snatching etc...."
                  url="/#"
                />  

                <Solutions
                  img="/images/worthiness-card.jpg"
                  title="Road Worthiness Card"
                  text="Many vehicle owners in many states or provinces in developing countries are supposed to carry genuine road worthiness certificate but...."
                  url="/#"
                />   

              </div>

              <div className="w-[100%] flex flex-row justify-between gap-5 items-center">
                <Solutions
                  img="/images/ghost-worker.jpg"
                  title="Ghost Worker Solutions"
                  text="Ghost workers problem in developing countries is based on the fact that a lot of money goes into wrong hands in the process of paying salaries ...."
                  url="/#"
                />  

                <Solutions
                  img="/images/custom-card.jpg"
                  title="Smart Customs Card"
                  text="There are several leakages in the Import and Export procedures in developing countries. There are also many inter-governmental...."
                  url="/#"
                />  

                <Solutions
                  img="/images/driving-license.jpg"
                  title="Smart Driver’s License"
                  text="Road Safety Commissions in developing countries are charged with the responsibility of arresting and prosecuting offenders..."
                  url="/#"
                />    
              </div>   
            </div>
          </div> 
        </div>
        
        {/* FAQ Section */}
        <div className="w-[100%] min-h-[300px] mt-14 bg-[url('/images/faq-bg.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
          <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
            <div className="w-[55%] min-h-[530px] flex flex-col items-start gap-6 bg-white bg-opacity-70 pt-[45px] pb-[30px] px-5">
              <h4 className="text-[28px] text-white">Frequently Asked Questions (FAQs)</h4>
              
              <FaqItem 
                title="What is the importance of the vision of Leaders Network?"
               />

              <FaqItem 
                title="What is the explanation of the Mission statement?"
               />

              <FaqItem 
                title="What are the products and services of Leaders Network?"
               /> 

              <PageButton
                text="SEE MORE FAQs"
                /> 
              
            </div>
          </div> 
        </div>
         
        {/* Contact Section */}
        <div className="w-full min-h-[380px] flex mb-0 bg-[#092E3E]">
          <div className="w-[86%] max-w-[1200px] m-auto">
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="text-[40px] text-white">Do you need help from Leaders Network<span className="text-[#FF5100]">?</span></h2>
              <p className="text-white">Kindly, contact us for more information</p>
              
              <ContactButton
                text="Contact Us"
                /> 
                
            </div>
          </div>
        </div> 

        <Footer/>
      </div> 

      

      </>
    );
}
  