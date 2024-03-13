"use client";
import { MainServices } from "@/components/site/websiteBody";
import {MainLeftServices} from "@/components/site/websiteBody";
import {OtherPagesTitle} from "@/components/site/websiteBody";
////////////////////////////////////////////////////////////

export default function ServiceUpPage() {
   
    return (
      <>
       <OtherPagesTitle
          title="Our Services"
          ul="Services"
        />

        <div className="w-[100%] relative top-[100%]">
          <div className="w-[100%] m-h-[300px] py-8 px-0">
            <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
              
              <MainServices
                title="Document Management"
                text="Leaders Network Ventures Ltd offer services in Digital Information, Work Flow evaluation, Project Management, Scanning, Capturing and Integration of data for our clients. Our digital centre conversion service includes Site Survey, Documents Batching, Sorting, Scanning, Quality Control, Repacking and Organised Storage."
                url="services/document-management"
                img="/images/document-management.jpg"
              />

              <MainLeftServices
                title="Software Development"
                text="Leaders Network Limited is a Software development & Solution firm that is focused on developing high standard and cost persuasive Solutions for Global business. We have spacious experience in many diverse areas of Software Development, Digital Solutions, Web Solutions and VoIP Solution."
                url="services/software-development"
                img="/images/software-development.png"
              />           
                
              <MainServices
                title="Resource As A Service (RAAS)"
                text="Leaders Network is experienced in Human resource outsourcing for Information Technology and Management jobs whereby an employer transfers responsibilities and risks for HR functions to the external provider which performs this tasks for the company."
                url="services/document-management"
                img="/images/RaaS.png"
              />
              
              <MainLeftServices
                title="Social Media Campaigns"
                text="In view of the fact that the present social media platforms being used by politicians in Nigeria now rely so much on followership or friends and this number is usually too sectional, deceptive and does not reflect the acceptance of the people."
                url="services/software-development"
                img="/images/social-media.png"
              />  
              
              <MainServices
                title="Management Training"
                text="Leadership Training We conduct Leadership training in Time Management, Personal effectiveness, Team Building, Motivation, Selling Skills, Conflict Resolution, Delegation, Budgeting skills, Effective communications and Discipline."
                url="services/document-management"
                img="/images/management-trainning.jpg"
              />

              <MainLeftServices
                title="Smart-Card Programming"
                text="Leaders Network offers solution for clients through the Smartcard technology. This comprise of smartcards and card readers. The Smartcards deployed follow the T=0 and T=1 protocol and is an ISO 7816 compliant Class A, B, C (5V, 3V, 1.8V)."
                url="services/software-development"
                img="/images/smartcard.jpg"
              /> 
            </div> 
          </div> 
        </div>
      </>
    );
  }


 
  