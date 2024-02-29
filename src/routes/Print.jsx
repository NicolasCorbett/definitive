import React from 'react'
import DotRing2 from '../components/DotRing/DotRing2'

export const Print = () => {
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
                                <a href="/print" className="navlink" style={{ color: '#399688' }}>Print</a>
                                <a href="/digital" className="navlink">Digital</a>
                                <a href="/arts" className="navlink">Arts & Crafts</a>
                                <a href="/resume" className="navlink">Resume(CV)/ <br /> About</a>
                            </nav>
                            <p className='brood'>I believe printmaking, even in
                                an evergrowing digital landscape, is essential
                                to quality graphic design practice.
                                This is why I center my own design efforts around
                                materia- lity, printing methods and analog techniques.
                                It is through respecting these well established & historical principles,
                                through attention for the physicality of design objects that these objects are worth having.
                                printmaking experience; monotype, screenprinting, digital print and risography printing.
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
                                    <div className="dgtlprint">
                                        <li className='hvrdgtl'>- Digital prints</li>
                                        <div className='hiddendgtl'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>Printworks made with Adobe design
                                                    software, printed on digital</p>
                                            </div>
                                            <div className='dgtlgif'></div>
                                        </div>
                                    </div>
                                    <div className="scrnprint">
                                        <li className='hvrscreen'>- Screenprinting</li>
                                        <div className='hiddenscreen'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>My experience in screenprinting spans over
                                                    preparing and exposing of UV emulsion screens to printing <br /> <br />
                                                    - single color <br />
                                                    - mixing color <br />
                                                    - cmyk print <br />
                                                    - textile print</p>
                                            </div>
                                            <div className='screengif'></div>
                                        </div>
                                    </div>
                                    <div className="monoprint">
                                        <li className='hvrmono'>- Monotype prints & publication</li>
                                        <div className='hiddenmono'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>Prints made from analog prepared compositions
                                                    on a monotype press</p>
                                            </div>
                                            <div className='monogif'></div>
                                        </div>
                                    </div>
                                    <div className="actionprint">
                                        <li className='hvraction'>- "The Action", eight page booklet (Riso)</li>
                                        <div className='hiddenaction'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>"The Action" is an eight page
                                                    completely risoprinted publication explaining an action solely with
                                                    self-made imagery and graphic elements. <br /><br /> With the use of text being
                                                    ruled out it poses the question on how to design instructions
                                                    with elements floating along the scale between figuration and abstraction.</p>
                                            </div>
                                            <div className='actiongif'></div>
                                        </div>
                                    </div>
                                    <div className="eckprint">
                                        <li className='hvreck'>- "NotSoEckmannSchrift", typespecimen (Riso/Screen)</li>
                                        <div className='hiddeneck'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>Typespecimen of my own typeface "NotSoEckmannSchrift", <br /> <br /> guided by,
                                                    but counter to expectations, not based on renowned typographer Otto Eckmann's own schrift.</p>
                                            </div>
                                            <div className='eckgif'></div>
                                        </div>
                                    </div>
                                    <div className="CRAprint">
                                        <li className='hvrCRA'>- "Cheese Rolling Association", full identity print set</li>
                                        <div className='hiddenCRA'>
                                            <div className='side'>
                                                <p style={{ fontWeight: '400' }}>Full identity design made for a Cheeserolling club.
                                                    A violent and old sport found in Gloucester, England. Identity includes; <br /><br />
                                                    -Flag (100x150cm) <br />
                                                    -Slogan (copy) <br />
                                                    -Card (85x55mm) <br />
                                                    -3 inkstamps <br />
                                                    -Gameposter (A1) <br />
                                                    -Letterhead (A4) <br />
                                                    -2D animation (1:1)
                                                </p>
                                            </div>
                                            <div className='CRAgif'></div>
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
