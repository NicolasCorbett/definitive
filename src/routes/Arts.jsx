import React from 'react'
import DotRing2 from '../components/DotRing/DotRing2'

export const Arts = () => {
    return (
        <div>
            <div className='maincontainer'>
                <div className="firstrow">
                    <div className="r1 c1"></div>
                    <div className="r1 c2">
                        <div className="homebtndiv"><a id='homebtn' href="/">home</a></div>
                    </div>
                    <div className="r1 c3">
                        <a id='linkedin' href="https://www.linkedin.com/in/nicolas-corbett/">linkedin</a>
                    </div>
                    <div className="r1 c4"></div>
                </div>
                <div className="scndrow">
                    <div className="r2 c1"></div>
                    <div className="r2 c2"></div>
                    <div className="r2 c3">
                        <div className="navwrap">
                            <nav>
                                <a href="/print" className="navlink">Print</a>
                                <a href="/digital" className="navlink">Digital</a>
                                <a href="/arts" className="navlink" style={{ color: '#399688' }}>Arts & Crafts</a>
                                <a href="/resume" className="navlink">Resume(CV)/ <br /> About</a>
                            </nav>
                            <p className='brood'>As part of the artistic Bachelors in graphic design at Sint-Lucas
                                a great emphasis is layed on artisitic form and the development of one's own creative practice
                                through figurative and abstract drawing.
                            </p>
                        </div>
                    </div>
                    <div className="r2 c4"></div>
                </div>
                <div className="thrdrow">
                    <div className="r3 c1"></div>
                    <div className="r3 c2"></div>
                    <div className="r3 c3">
                        <div className='r3bis1'>
                            <div className="listwrap">
                                <ul>
                                    <div className="lichaam">
                                        <li className='hvrlichaam'>- Modeldrawing (A5 to A0)</li>
                                        <div className='hiddenlichaam'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}></p>
                                            </div>
                                            <div className='lichaamgif'></div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="r4">
                            <h2>0032471385421</h2>
                            <a href="mailto:nicolas.corbett@student.kdg.be">nicolas.corbett@student.kdg.be</a>
                        </div>
                    </div>
                    <div className="r3 c4">
                        <div className='r3bis1'></div>
                        <div className="r4"></div>
                    </div>
                </div>
            </div >
            <div className='bg'>

            </div>
            <DotRing2 />
        </div >
    )
}