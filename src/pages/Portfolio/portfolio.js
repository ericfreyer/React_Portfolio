import React from 'react';
import Aljoscha from './images'
import Audiobridge from './images'
import Brendan from './images'
import Changing from './images'
import Farmwise from './images'
import Growth from './images'
import Merlin from './images'
import Noguchi from './images'
import Rainforest from './images'
import Sofa from './images'
import Sound from './images'
import Storm from './images'
import Unnamed from './images'
import Weather from './images'

function Portfolio () {
    return(
<div className="portfolio div">
    <h1 className="text-center pt-5">Coding Projects</h1>

    <br /><br />

    <div className="container" style="background-color: rgba(222, 213, 248, 0); border: 1px;">
        <div className="codingProjects">
            <div className="row row-cols-1 row-cols-md-4" className="mainDiv">
                <div className="col" className="farmDiv">
                    <div>
                        <div>
                        <h5 className="card-title"></h5>
                        <br />
                        
                        <br /><br />
                        <p className="card-text"></p>
                        
                        </div>
                    </div>
                </div>
                <div className="col" className="farmDiv">
                    <div className="card shadow bg-white rounded">
                        <div className="card-body">
                        <h5 className="card-title">Farmwise Fresh Eats</h5>
                        <br />
                        <img src={Growth} className="card-img-top" alt="..." className="farmPic" />
                        <br /><br />
                        <p className="card-text">Simple app to find nearby farmer's markets.</p>
                        <button type="button" className="btn btn-info"> <a className="codeLink" href="https://ericfreyer.github.io/Farmwise_FreshEats/" target="_blank" rel="noopener noreferrer">See it live</a></button>
                        <button type="button" className="btn btn-info"> <a className="codeLink" href="https://github.com/ericfreyer/Farmwise_FreshEats" target="_blank" rel="noopener noreferrer">Code</a></button>
                        <br /><br />
                        <img src={Farmwise} className="farmwiseScreenshot" />
                        </div>
                    </div>
                </div>
                <div className="col" className="quizDiv">
                    <div className="card shadow bg-white rounded">
                        <div className="card-body">
                        <h5 className="card-title">Audio Bridge</h5>
                        <br />
                        <img src={Sound} className="card-img-top" alt="..." className="examPic" />
                        <br /><br />
                        <p className="card-text">Simple Social Media App for music lovers.<br><br><br></p>
                        <button type="button" className="btn btn-info"> <a className="codeLink" href="https://hidden-castle-67810.herokuapp.com/" target="_blank" rel="noopener noreferrer">See it live</a></button>
                        <button type="button" className="btn btn-info"> <a className="codeLink" href="https://github.com/ericfreyer/Project_2" target="_blank" rel="noopener noreferrer">Code</a></button>
                        <br /><br />
                        <img src={Audiobridge} className="audioScreenshot" />
                        </div>
                    </div>
                </div>
                <div className="col" className="weatherDiv">
                    <div className="card shadow bg-white rounded">
                        <div className="card-body">
                        <h5 className="card-title">Weather Dashboard</h5>
                        <br />
                        <img src={Storm} className="card-img-top" alt="..." className="weatherPic" />
                        <br /><br />
                        <p className="card-text">Simple app for realtime, regional weather forecasts.</p>
                        <button type="button" className="btn btn-info"> <a className="codeLink" href="https://ericfreyer.github.io/Weather_App/" target="_blank" rel="noopener noreferrer">See it live</a></button>
                        <button type="button" className="btn btn-info"> <a className="codeLink" href="https://github.com/ericfreyer/Weather_App" target="_blank" rel="noopener noreferrer">Code</a></button>
                        <br /><br />
                        <img src={Weather} className="weatherScreenshot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <br /><br />
            
        <br /><br />
            <h2 style="text-align: center;">Other Professional Projects</h2>
    <div className="container" style="background-color: rgba(222, 213, 248, 0); border: 1px;">
        <div className="row">

            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Gabriel Orozco's <br /> Rotating Objects</h5>
                <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/gabriel-orozco-rotating-objects/"> 
                        <img src={Sofa} width="100%" height="100%" alt="Rotating Objects" className="rounded float-left" className="img-fluid img-thumbnail" style="height: auto;" />
                </a>
            </div>

            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Changing and <br /> Unchanging Things</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/changing-and-unchanging-things-noguchi-and-hasegawa-in-postwar-japan-noguchi-museum/"> 
                    <img src={Changing} width="100%" height="100%" className="rounded float-left" alt="Changing and Unchanging Things" className="img-fluid img-thumbnail" style="height: auto;" />
                    </a>
            </div>

            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Contract and <br /> Release</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/brendan-fernandes-contract-and-release/">
                        <img src={Brendan} width="100%" height="100%" className="rounded float-left" alt="Contract and Release" className="img-fluid img-thumbnail" style="height: auto;" />
                    </a>
            </div>

            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Body Space  <br />   Devices</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.noguchi.org/museum/exhibitions/view/noguchi-body-space-devices/">
                        <img src={Noguchi} width="100%" height="100%" class="rounded float-left" alt="Body Space Devices" className="img-fluid img-thumbnail" style="height: auto;" />
                    </a>
            </div>
            
        </div>
        <div className="row" style="padding-top: 1%;">
            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Dzanga-Sangha <br /> Rain forest</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://eportfolios.macaulay.cuny.edu/cornelisse14/2014/12/12/a-stroll-through-the-hall-of-biodiversity/">
                        <img src={Rainforest} width="100%" height="100%" class="rounded float-left" alt="Dzanga-Sangha Rainforest" class="img-fluid img-thumbnail" style="height: auto;" />
                    </a>
            </div>
            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Hall of <br /> Biodiversity</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.amnh.org/exhibitions/permanent/biodiversity">    
                        <img src={Unnamed} width="100%" height="100%" class="rounded float-left" alt="Hall of Biodiversity" class="img-fluid img-thumbnail" style="height: auto;" />
                    </a>
            </div>
            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Ichthyology <br /> Collection</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.nytimes.com/2018/12/23/nyregion/museum-of-natural-history-fish-nyc.html">
                        <img src={Merlin} width="100%" height="100%" class="rounded float-left" alt="Ichthyology Collection" class="img-fluid img-thumbnail" style="height: auto;" />
                    </a>
            </div>
            <div className="col-sm-3"> 
                <h5 style="text-align: center;">Aljoscha: The <br /> Miraculous Draught</h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.stjohndivine.org/art/art-exhibitions/">
                        <img src={Aljoscha} width="100%" height="100%" class="rounded float-left" alt="The Miraculous Draught" class="img-fluid img-thumbnail" style="height: auto;" /></a></div>
            </div>
        </div>        
    </div>
</div>

    )
}

export default Portfolio