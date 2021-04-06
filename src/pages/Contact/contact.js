import React from 'react';
import IMG_3760 from '../Home/images/IMG_3760.JPG';
import gmail from '../Home/images/gmail.webp';
import Linkedin from '../Home/images/Linkedin_symbol_transparent.png';
import Github from '../Home/images/GitHub-Mark.png';

function Contact () {
    return(
        <div class="container sm border border-dark w-50 p-3" style={{marginTop: "5%", backgroundColor:  "rgba(211, 197, 252, 0.116)"}}>
    <h1 style={{textAlign: "center"}}>Contact</h1>
    <div class="row">
        <div class="col-sm-6 h-100 d-inline-block">
            <img src={IMG_3760} width="100%" height="100%" class="rounded float-left img-fluid" alt="Eric" style={{height: "auto"}} />
                <div class="row">    
                    <div class="col-sm-12 d-inline-block" style={{textAlign: "center", paddingTop: "2%", paddingLeft: "10%"}}>
                        <ul class="list-group list-group-horizontal" style={{listStyleType: "none"}}>
                            <li>
                                <a href="mailto: ericcfreyer@gmail.com">
                                    <img src={gmail} width="180%" height="100%" class="rounded float-left img-fluid img-thumbnail" alt="Gmail" /> 
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" alt="Linkedin" class= "rounded float-left" href="https://www.linkedin.com/in/eric-freyer-977719168/">
                                <img src={Linkedin} alt="Linkedin" style= {{height: "25%", width: "25%"}} />
                                </a>
                            </li>
                            <li style={{paddingRight: "7%"}}>
                                <a target="_blank" rel="noopener noreferrer" alt="Github" class= "rounded float-left" href="https://github.com/ericfreyer">
                                <img src={Github} alt="GitHub" style={{height: "120%", width: "120%"}} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>    
        </div>
        <div class="col-sm-6 border text-justify overflow-auto align-justified d-flex justify-content-center d-flex align-items-center" style={{fontFamily: 'Noto Serif, serif', fontSize: "20px"}}>
        <ul>
          <li><h2>Name: Eric Freyer</h2></li>
          <li><h2>Email: ericcfreyer@gmail.com</h2></li>
          <li><h2>Phone Number:914-980-0015</h2></li>
        </ul>
        </div>
    </div>
    <h1 style={{opacity: '0'}}>yo</h1>
      <h1 style={{opacity: '0'}}>yo</h1>
      <h1 style={{opacity: '0'}}>yo</h1>
      <h1 style={{opacity: '0'}}>yo</h1>
</div>
    )
}

export default Contact;