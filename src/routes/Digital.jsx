import React from 'react'
import DotRing2 from '../components/DotRing/DotRing2'

export const Digital = () => {
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
                                <a href="/digital" className="navlink" style={{ color: '#399688' }}>Digital</a>
                                <a href="/arts" className="navlink">Arts & Crafts</a>
                                <a href="/resume" className="navlink">Resume(CV)/ <br /> About</a>
                            </nav>
                            <p className='brood'>During education at both Erasmus University college in Brussels and the
                                Sint-Lucas Acadamy of Arts in Antwerp I was taught in all aspects of digital design together with
                                the appropriate digital software packs to professional standards. These including the full Adobe Creative Suite, Touchdesigner,
                                DaVinci Resolve, MadMapper & Resolume Arena live visual software. The below mentioned works were made at
                                Sint-Lucas taking in regard a rigid digital workflow.
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
                                    <div className="type2print">
                                        <li className='hvrtype2'>- NC Fangs Bold (typeface)</li>
                                        <div className='hiddentype2'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>experimentally drawn typeface, digitally refined.</p>
                                            </div>
                                            <div className='type2gif'></div>
                                        </div>
                                    </div>
                                    <div className="type1print">
                                        <li className='hvrtype1'>- NotSoEckmannSchrift (typeface)</li>
                                        <div className='hiddentype1'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>Typeface designed from encrimenting sketches,
                                                    visually aligned to "Eckmann schrift" by Otto Eckmann.</p>
                                            </div>
                                            <div className='type1gif'></div>
                                        </div>
                                    </div>
                                    <div className="limitprint">
                                        <li className='hvrlimit'>- The limitation, composition (A1)</li>
                                        <div className='hiddenlimit'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>series of analog and digital graphic operations
                                                    on everyday objects placed into composition.</p>
                                            </div>
                                            <div className='limitgif'></div>
                                        </div>
                                    </div>
                                    <div className="OXOprint">
                                        <li className='hvrOXO'>- Creative brunnerstrip for OXO-brand (A1)</li>
                                        <div className='hiddenOXO'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>Adaptation of print testing strip or Brunnerstrip
                                                    on the OXO liebig companies visual identity.</p>
                                            </div>
                                            <div className='OXOgif'></div>
                                        </div>
                                    </div>
                                    <div className="gameprint">
                                        <li className='hvrgame'>- Cheese Rolling Association, gameposter (A1)</li>
                                        <div className='hiddengame'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>Eventposter for "Cheese Rolling Association's" upcoming cheese rolling competition.</p>
                                            </div>
                                            <div className='gamegif'></div>
                                        </div>
                                    </div>
                                    <div className="kaasgif">
                                        <li className='hvrkaasgif'>- Cheese Rolling Association, motiongraphic</li>
                                        <div className='hiddenkaasgif'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>2D motiongraphic for cheese rolling club</p>
                                            </div>
                                            <div className='kaasgifgif'></div>
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
