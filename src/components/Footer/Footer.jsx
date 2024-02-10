import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer({ outerDivStyle = 'bg-white p-6 gap-1', logoStyleProps = 'w-[8rem]', innerDivStyle = 'text-[10px] py-2 gap-2' }) {
    return (
        <div className={`flex flex-col sm:flex-row flex-wrap items-center justify-center xs:justify-between ${outerDivStyle}`}>
            <span>
                <Link to='/'>
                    <Logo props={`${logoStyleProps}`} fill='black' />
                </Link>
            </span>
            <div className={`flex items-center ${innerDivStyle}`}>
                <Link to='https://github.com/JatinThakur-12/medium-clone' target='_blank'><u className=''>GitHub</u></Link>
                <Link to='/about'><span className=''><u className=''>About</u></span></Link>
                <Link to='/'><span className=''><u className=''>Terms</u></span></Link>
                <Link to='/'><span className=''><u className=''>Privacy</u></span></Link>
                <Link to='/'><span className=''><u className=''>Help</u></span></Link>
                <Link to='/'><span className=''><u className=''>Teams</u></span></Link>
                <Link to='/'><span className=''><u className=''>Press</u></span></Link>
            </div>
        </div>
    )
}

export default Footer