import React from 'react'
import DotRing from '../components/DotRing/DotRing'

const Main = () => {

    return (
        <div>
            <div className="mobile">
                <p>Uh oh! this is a desktop website, <br /> please use a computer.</p>
            </div>
            <div id='main' className='maincontainerr'>
                <div className="firstrow">
                    <div className="r1 c1"></div>
                    <div className="r1 c2"></div>
                    <div className="r1 c3">
                        <a id='linkedin' href="https://www.linkedin.com/in/nicolas-corbett/">linkedin</a>
                    </div>
                    <div className="r1 c4"></div>
                </div>
                <div className="scndrow">
                    <div className="r2 c1"></div>
                    <div className="r2 c2"></div>
                    <div className="r2 c3">
                        <nav>
                            <a href="/print" className="navlink">Print</a>
                            <a href="/digital" className="navlink">Digital</a>
                            <a href="/arts" className="navlink">Arts & Crafts</a>
                            <a href="/resume" className="navlink">Resume(CV)/ <br /> About</a>
                        </nav>
                    </div>
                    <div className="r2 c4"></div>
                </div>
                <div className="thrdrow">
                    <div className="r3 c1"></div>
                    <div className="r3 c2">
                        <h1>Nicolas</h1>

                        <h1 className='diss'>Nicolas</h1>

                        <h1 className='diss'>Corbett</h1>
                    </div>
                    <div className="r3 c3">
                        <div className='r3bis1'>
                            <h1 id='corbett'>Corbett</h1>
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
            </div>
            <div className='bg'>

            </div>
            <DotRing />
        </div >
    )
}

export default Main