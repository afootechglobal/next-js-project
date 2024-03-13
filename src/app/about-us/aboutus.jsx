"use client";
// import { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import { PageButton } from "@/components/site/websiteBody";
import { FaqItem } from "@/components/site/websiteBody";
import { Paragraph } from "@/components/site/websiteBody";
import {OtherPagesTitle} from "@/components/site/websiteBody";
////////////////////////////////////////////////////////////

export default function AboutUpPage() {
   
    return (
      <>
        <OtherPagesTitle
          title="About Us"
          ul="About Us"
        />
    
        <div className="w-[100%] relative top-[100%]">
          <div className="w-[100%] m-h-[300px] py-8 px-0">
            <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
              <div className="w-[100%] flex flex-col gap-0 items-center">

                <div className="w-[100%] mt-[20px] flex flex-wrap justify-between items-start">
                  <div className="w-[50%] min-h-[400px] flex flex-col gap-4 justify-between items-end">
                   <Paragraph
                      text="Since the year 2005, Leaders Network has been delivering trusted technology solutions for Corporate Bodies, Government, Telecommunication, Educational, Insurance and Financial Services all over the world. "
                   />
                   
                   <Paragraph
                      text="In view of the global village nature of the world, we also collaborate together on several projects with various organisations and consultants as partners in a team thereby increasing the knowledge base of team members and enhancing capacities. We always seek for the most experienced organization on a particular project and collaborate to give our customers the full benefit. We continue to innovate and improve the product experience for all our customers"
                   />

                    <Paragraph
                      text="Leaders Network Ltd is a firm of Management and Information Technology Consultants providing services on Document Management, Resource As A Service (RAAS), Software Development, Social Media Campaigns, Management Training and Smartcard Solutions."
                   />

                    <Paragraph
                      text="Our goal is to assist corporate bodies, states and organizations to motivate and inspire their employees to peak performance as evidence has shown this to be the key drive for successful corporate performance."
                   />

                    <Paragraph
                      text="Our consulting methodology is driven by world-class tools sourced from our international partner firms in the USA, India, United Kingdom and South Africa. This partnership provides us with excellent training, development and consultancy support."
                   />
                    
                   
                    <PageButton
                      text="GET IN TOUCH"
                    />
                  </div> 

                  <div className="w-[48%] h-[500px] relative">
                    <Image
                      src="/images/about-leaders-network.png"
                      className="w-full h-full"
                      objectFit="cover"
                      layout="fill"                      
                      alt="about-leaders-network"
                    />
                  </div>
                </div>        
              </div>
            </div> 
          </div> 

          <div className="w-[100%] min-h-[300px] mt-14 bg-[url('/images/faq-bg.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
            <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
              <div className="w-[55%] min-h-[530px] flex flex-col items-start gap-6 bg-white bg-opacity-70 pt-[45px] pb-[30px] px-5">
    
                <FaqItem 
                  title="Our Vision Statement"
                />

                <FaqItem 
                  title="Our Mission Statement"
                />
                
              </div>
            </div> 
          </div>
        </div>
      </>
    );
  }


 
  