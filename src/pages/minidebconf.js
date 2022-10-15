import React from 'react';
// import { Link } from "gatsby"
import * as aboutStyles from '../styles/about.module.scss';
// import { Link } from 'gatsby';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

const SecondPage = () => (
    <div className='mainbody'>
        <SEO title='About' />
        <Header />
        <div className='site-content'>
            <h1 className={aboutStyles.aboutHead}>MiniDebConf Palakkad 2022</h1>
            <img src="https://in2022.mini.debconf.org/media/pages_files/MiniDebConfP22Logo.png"  alt="MiniDebConf" width="400" class={aboutStyles.center}></img>
            <div className={aboutStyles.body}>
                <h2 className={aboutStyles.heading}>
                About the Event 
                   
                </h2>
                

                <p>

                India is hosting the Annual Debian Conference in 2023. As a pre-event, the Debian India community combined with the FOSS NSS team is hosting a MiniDebConf in NSS College of Engineering, Palakkad, Kerala, India on 12th and 13th November 2022. MiniDebConf Palakkad 2022 is a smaller version of the Debian Conference which focuses on Debian as a Free and Open Source Software by conducting talks and workshops. The conference will provide a platform for advances in not only Debian but various Free Software projects as well.
                <br></br>
                For more details please, refer to the <a href="https://in2022.mini.debconf.org/">Website</a> and the <a href="https://wiki.debian.org/DebianIndia/MiniDebConfPalakkad2022">Wiki</a>
                </p>
                
            </div>
            <div className={aboutStyles.body}>
                <h6 className={aboutStyles.heading}>
                Important Dates </h6>
                <p>
               
<span></span>
<span></span>

    
        </p>
        <span></span><span></span>
        <p><ul>
            <li><span role='img' aria-label="globe">🌐</span> <a href='https://in2022.mini.debconf.org/contribute/cfp/'><b>Call for Proposals:</b></a></li>
            Start Date : 1 October 2022<span>
        </span><span></span><br></br>
        End Date : 21 October 2022
  
        
        <li><b>Registration</b></li>
            Start Date : 10 October 2022<span>
        </span><span></span><br></br>
        End Date : 1 November 2022


        <li><b>Proposal Acceptance notification :</b>  23 October 2022 </li>
       

        <li><b>Event Dates :</b> 12 & 13 November 2022</li>
            

        
        </ul>
        </p>
        
             
</div>
</div>

                    
          

        <Footer />
    </div>
);
export default SecondPage;
