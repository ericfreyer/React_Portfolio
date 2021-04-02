import React from 'react';
import Aljoscha from './images/Aljoscha.jpg'
import Audiobridge from './images/Audiobridge.PNG'
import Brendan from './images/Brendan.jpg'
import Changing from './images/Changing.jpg'
import Farmwise from './images/Farmwise.PNG'
import Growth from './images/Growth.png'
import Merlin from './images/Merlin.jpg'
import Noguchi from './images/Noguchi.jpg'
import Rainforest from './images/Rainforest.png'
import Sofa from './images/Sofa.jpg'
import Sound from './images/Sound.png'
import Storm from './images/Storm.png'
import Unnamed from './images/Unnamed.jpg'
import Weather from './images/Weather.PNG'

function Portfolio () {
    return(
<div className="portfolio div">
    <h1 className="text-center pt-5">Coding Projects</h1>

    <br /><br />

    <div className="container" style={{backgroundColor: "rgba(222, 213, 248, 0)", border: "1px",}}>
        <div className="codingProjects">
            <div className="row row-cols-1 row-cols-md-4 mainDiv">
                <div className="col farmDiv">
                    <div>
                        <div>
                        <h5 className="card-title" style={{color:"rgba(0, 0, 0, 0)"}}>Yo</h5>
                        <br />
                        
                        <br /><br />
                        <p className="card-text" style={{color:"rgba(0, 0, 0, 0)"}}>Yo</p>
                        
                        </div>
                    </div>
                </div>
                <div className="col farmDiv">
                    <div className="card shadow bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Farmwise Fresh Eats</h5>
                            <br />
                            <img src={Growth} className="card-img-top farmPic" alt="..." />
                            <br /><br />
                            <p className="card-text">Simple app to find nearby farmer's markets.</p>
                            <button type="button" className="btn btn-info"> <a className="codeLink" href="https://ericfreyer.github.io/Farmwise_FreshEats/" target="_blank" rel="noopener noreferrer">See it live</a></button>
                            <button type="button" className="btn btn-info"> <a className="codeLink" href="https://github.com/ericfreyer/Farmwise_FreshEats" target="_blank" rel="noopener noreferrer">Code</a></button>
                            <br /><br />
                            <img src={Farmwise} alt="farm" className="farmwiseScreenshot" />
                        </div>
                    </div>
                </div>
                <div className="col quizDiv">
                    <div className="card shadow bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Audio Bridge</h5>
                            <br />
                            <img src={Sound} className="card-img-top examPic" alt="..." />
                            <br /><br />
                            <p className="card-text">Simple Social Media App for music lovers.<br /><br /><br /></p>
                            <button type="button" className="btn btn-info"> <a className="codeLink" href="https://hidden-castle-67810.herokuapp.com/" target="_blank" rel="noopener noreferrer">See it live</a></button>
                            <button type="button" className="btn btn-info"> <a className="codeLink" href="https://github.com/ericfreyer/Project_2" target="_blank" rel="noopener noreferrer">Code</a></button>
                            <br /><br />
                            <img src={Audiobridge} alt="Audiobridge" className="audioScreenshot" />
                        </div>
                    </div>
                </div>
                <div className="col weatherDiv">
                    <div className="card shadow bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <br />
                            <img src={Storm} className="card-img-top weatherPic" alt="..." />
                            <br /><br />
                            <p className="card-text">Simple app for realtime, regional weather forecasts.</p>
                            <button type="button" className="btn btn-info"> <a className="codeLink" href="https://ericfreyer.github.io/Weather_App/" target="_blank" rel="noopener noreferrer">See it live</a></button>
                            <button type="button" className="btn btn-info"> <a className="codeLink" href="https://github.com/ericfreyer/Weather_App" target="_blank" rel="noopener noreferrer">Code</a></button>
                            <br /><br />
                            <img src={Weather} alt="Weather" className="weatherScreenshot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <br /><br />
            
        <br /><br />
            <h2 style={{textAlign: "center"}}>Other Professional Projects</h2>
    <div className="container" style={{backgroundColor: "rgba(222, 213, 248, 0)", border: "1px"}}>
        <div className="row">

            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Gabriel Orozco's <br /> Rotating Objects</h5>
                <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/gabriel-orozco-rotating-objects/"> 
                        <img src={Sofa} width="100%" height="100%" alt="Rotating Objects" className="rounded float-left img-fluid img-thumbnail" style={{height: "auto"}} />
                </a>
            </div>

            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Changing and <br /> Unchanging Things</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/changing-and-unchanging-things-noguchi-and-hasegawa-in-postwar-japan-noguchi-museum/"> 
                    <img src={Changing} width="100%" height="100%" className="rounded float-left img-fluid img-thumbnail" alt="Changing and Unchanging Things" style={{height: "auto"}} />
                    </a>
            </div>

            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Contract and <br /> Release</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/brendan-fernandes-contract-and-release/">
                        <img src={Brendan} width="100%" height="100%" className="rounded float-left img-fluid img-thumbnail" alt="Contract and Release" style={{height: "auto"}} />
                    </a>
            </div>

            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Body Space  <br />   Devices</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/noguchi-body-space-devices/">
                        <img src={Noguchi} width="100%" height="100%" class="rounded float-left img-fluid img-thumbnail" alt="Body Space Devices" style={{height: "auto"}} />
                    </a>
            </div>
            
        </div>
        <div className="row" style={{paddingTop: "1%"}}>
            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Dzanga-Sangha <br /> Rain forest</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://eportfolios.macaulay.cuny.edu/cornelisse14/2014/12/12/a-stroll-through-the-hall-of-biodiversity/">
                        <img src={Rainforest} width="100%" height="100%" class="rounded float-left img-fluid img-thumbnail" alt="Dzanga-Sangha Rainforest" style={{height: "auto"}} />
                    </a>
            </div>
            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Hall of <br /> Biodiversity</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.amnh.org/exhibitions/permanent/biodiversity">    
                        <img src={Unnamed} width="100%" height="100%" class="rounded float-left img-fluid img-thumbnail" alt="Hall of Biodiversity" style={{height: "auto"}} />
                    </a>
            </div>
            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Ichthyology <br /> Collection</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.nytimes.com/2018/12/23/nyregion/museum-of-natural-history-fish-nyc.html">
                        <img src={Merlin} width="100%" height="100%" class="rounded float-left img-fluid img-thumbnail" alt="Ichthyology Collection" style={{height: "auto"}} />
                    </a>
            </div>
            <div className="col-sm-3"> 
                <h5 style={{textAlign: "center"}}>Aljoscha: The <br /> Miraculous Draught</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.stjohndivine.org/art/art-exhibitions/">
                        <img src={Aljoscha} width="100%" height="100%" class="rounded float-left img-fluid img-thumbnail" alt="The Miraculous Draught" style={{height: "auto"}} /></a></div>
            </div>
        </div>        
    </div>


    )
}

export default Portfolio