"use client";
import { MainServices } from "@/components/site/websiteBody";
import {MainLeftServices} from "@/components/site/websiteBody";
import {OtherPagesTitle} from "@/components/site/websiteBody";
////////////////////////////////////////////////////////////

export default function SolutionUpPage() {
   
    return (
      <>
        <OtherPagesTitle
          title="Our Solutions"
          ul="Our Solutions"
        />

        <div className="w-[100%] relative top-[100%]">
          <div className="w-[100%] m-h-[300px] py-8 px-0">
            <div className="w-[86%] max-w-[1200px] m-auto flex flex-col gap-0">
              
              <MainServices
                title="Smart TaxCard"
                text="The present Tax card being used by many state government and agencies even though electronics, are presently not readable by any Mobile device. It is necessary that the tax card being issued to monitor compliance be readable by mobile devices in this modern world...."
                url="services/document-management"
                img="/images/smartcard.jpg"
              />

              <MainLeftServices
                title="Smart CMR CARD"
                text="It is known that about 75% of the crimes such as Car Theft, Armed Robbery, Kidnapping, Bombing, Attack, Burglary, Bag snatching, Phone snatching, One chance, Assassination, etc, in developing countries, are vehicle related, but unfortunately, many of the officers of the Police force...."
                url="services/software-development"
                img="/images/cmr-card.jpg"
              />        
                
              <MainServices
                title="Smart Road Worthiness Card "
                text="Many vehicle owners in many states or provinces in developing countries are supposed to carry genuine road worthiness certificate but they don’t carry them because lack of technology has not made Inspection Officers in those states to be able to check the proliferation of fake road worthiness certificates...."
                url="services/document-management"
                img="/images/worthiness-card.jpg"
              />
              
              <MainLeftServices
                title="Ghost Worker Solutions"
                text="Ghost workers problem in developing countries is based on the fact that a lot of money goes into wrong hands in the process of paying salaries at different levels of government...."
                url="services/software-development"
                img="/images/ghost-worker.jpg"
              />  
              
              <MainServices
                title="Smart Customs Card "
                text="There are several leakages in the Import and Export procedures in developing countries. There are also many inter-governmental agencies involved in the processes of Import and Export but usually the collaboration between them is not much...."
                url="services/document-management"
                img="/images/custom-card.jpg"
              />

              <MainLeftServices
                title="Smart Driver’s License"
                text="Road Safety Commissions in developing countries are charged with the responsibility of arresting and prosecuting offenders reasonably suspected of having committed the offense of operating vehicles with forged driving or insurance papers...."
                url="services/software-development"
                img="/images/driving-license.jpg"
              /> 
            </div> 
          </div> 
        </div>
      </>
    );
  }


 
  