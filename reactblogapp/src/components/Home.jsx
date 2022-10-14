import React from 'react'
import {Link} from 'react-router-dom'
import imge from './img/imgFive.jpg'
import imgTwo from './img/imgFour.jpg'
import imgThree from './img/imgThree.jpg'
import imgTemp from './img/NatureTemp.jpg'
import nature from './img/NatureTwo.jpg'
import {Heading} from './Heading'

export const Home = ({Image}) => {
    return(
        <div>
            <div className='mainHeading'><span className='theHead'>The</span><span className='theSpiran'>Spiran</span></div>
            <div className='navigation'>
                <ul>
                    <li><Link to='/' style={{textDecoration:'none'}} className='navItem'>Home</Link></li>
                    <li><Link to='/Bollywood' style={{textDecoration:'none'}} className='navItem'>Bollywood</Link></li>
                    <li><Link to='/Technology' style={{textDecoration:'none'}} className='navItem'>Technology</Link></li>
                    <li><Link to='/Hollywood' style={{textDecoration:'none'}} className='navItem'>Hollywood</Link></li>
                    <li><Link to='/Fitness' style={{textDecoration:'none'}} className='navItem'>Fitness</Link></li>
                    <li><Link to='/Food' style={{textDecoration:'none'}} className='navItem'>Food</Link></li>
                </ul>
            </div>
            <div className='contentData'>
                <div className='firstCont'>
                    <div className='firstConstImg'>
                        <img src={imge}/>
                        <div className='firstConstImgText'>
                            <p className='imgHead'>Title of vertical Gallery</p>
                            <p className='sideImg'>Travel / Augest 21 2017</p>
                        </div>
                    </div>
                    <div className='ConstFirstImg'>
                        <div className="firImg">
                            <img src={imgTwo} />
                            <div className="smallImgText">
                                <p className='smallText'>The Sound cloud <br/>You loved is doomed</p>
                                <p className='sideImg'>Travel / Augest 21 2017</p>
                            </div>
                        </div>
                        <div className="secImg">
                            <img src={imgThree} />
                            <div className="smallImgText">
                                <p className='smallText'>The Sound cloud <br/>You loved is doomed</p>
                                <p className='sideImg'>Travel / Augest 21 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="temple">
                    <p>The Latest</p>
                    <hr />
                    <div className="imgData">
                        <div className="imgDataOne">
                            <img src={imgTemp} />
                            <div className="conxt">
                                <p className='imgDataOneTitle'>Joshua Tree <br/> Overnight Adventure</p>
                                <span className='imgDataOneInfo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quod eius sequi, iusto quos fuga, animi adipisci aliquam!</span><br />
                                <span className='time'><span>Travel </span>/ Augest 21 2017</span>
                            </div>
                        </div>
                        <div className="imgDataOne">
                            <img src={imgTemp} />
                            <div className="conxt">
                                <p className='imgDataOneTitle'>Joshua Tree <br/> Overnight Adventure</p>
                                <span className='imgDataOneInfo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quod eius sequi, iusto quos fuga, animi adipisci aliquam!</span><br />
                                <span className='time'><span>Travel </span>/ Augest 21 2017</span>
                            </div>
                        </div>
                        <div className="imgDataOne">
                            <img src={imgTemp} />
                            <div className="conxt">
                                <p className='imgDataOneTitle'>Joshua Tree <br/> Overnight Adventure</p>
                                <span className='imgDataOneInfo'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quod eius sequi, iusto quos fuga, animi adipisci aliquam!</span><br />
                                <span className='time'><span>Travel </span>/ Augest 21 2017</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="latestArticleMain">
                    <p>Latest Articles</p>
                    <hr />
                    <div className="latestArticle">
                    <div className="imgInfo">
                        <p className='lineShdow'></p>
                        <div className="waves">
                            <div className="image"><img src={nature} /></div>
                            <div className="articleText">
                                <h4>Catch waves with <br /> an adventure guide</h4>
                                <p>Gujarat is wastly underrated and it's a <br /> mystery to us why the region isn't more well-</p>
                                <p className='smllText' style={{marginTop:'32px'}}><span>Travel </span>/ Augest 21 2017 </p>
                            </div>
                        </div>
                        <p className='lineShdow'></p>
                        <div className="waves">
                        <div className="image"><img src={nature} /></div>
                        <div className="articleText">
                                <h4>Catch waves with <br /> an adventure guide</h4>
                                <p>Gujarat is wastly underrated and it's a <br /> mystery to us why the region isn't more well-</p>
                                <p className='smllText' style={{marginTop:'32px'}}><span>Travel </span>/ Augest 21 2017 </p>
                            </div>
                        </div>
                        <p className='lineShdow'></p>
                        <div className="waves">
                        <div className="image"><img src={nature} /></div>
                        <div className="articleText">
                                <h4>Catch waves with <br /> an adventure guide</h4>
                                <p>Gujarat is wastly underrated and it's a <br /> mystery to us why the region isn't more well-</p>
                                <p className='smllText' style={{marginTop:'32px'}}><span>Travel </span>/ Augest 21 2017 </p>
                            </div>
                        </div>
                    </div>
                    <div className="adv">
                        <p><h2>Advertistement</h2></p>
                    </div>
                    </div>
                    <div className="topNews">
                       <div className="leftNews">
                        <div className='leftNewsContent'>
                        <p className='lineShdow'></p>
                        <div className="waves">
                        <div className="image"><img src={nature} /></div>
                        <div className="articleText">
                                <h4>Catch waves with <br /> an adventure guide</h4>
                                <p>Gujarat is wastly underrated and it's a <br /> mystery to us why the region isn't more well-</p>
                                <p className='smllText' style={{marginTop:'32px'}}><span>Travel </span>/ Augest 21 2017 </p>
                            </div>
                        </div>
                        </div>
                       </div>
                       <div className="rightNews"></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

// export default Home;