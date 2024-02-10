import React, { useState, useEffect } from 'react'
import { Logo, Container, LogoutBtn, WriteSvg } from "../"
import { Link } from 'react-router-dom'
import { Login } from '../'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import GuestAccountMenu from './GuestAccountMenu'


function Header() {
  const authStatus = useSelector((state) => state.status);
  const [loginbtn, setLoginbtn] = useState(false)
  const postPageRegex = /\/post\/.*$/

  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location.pathname);
  // console.log(location);

  const navItems = [

    {
      name: "Our story",
      path: "/about",
      active: !authStatus
    },
    {
      name: "Membership",
      path: "/membership",
      active: !authStatus
    },
    {
      name: "Write",
      path: "/",
      active: !authStatus
    },
    {
      name: "Sign in",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "Get started",
      path: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      path: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus,
    },
  ]

  //TODO: Implement floating singin and register
  // const toggleLoginbtn = ()=>{

  // }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsNavScrolled(offset > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!authStatus && location.pathname == '/') { // for "/" route
    return (
      <>
        <header className={`shadow ${authStatus ? "bg-white" : isNavScrolled ? "bg-white" : "bg-[#ffc017]"} border-b border-black transition-all  fixed w-full z-10`}>
          <Container >
            <nav className="flex align-middle items-center">
              <div className="mr-4">
                <Link to='/'>
                  <Logo props='w-[10rem]' />
                </Link>
              </div>
              <ul className="flex ml-auto gap-x-6 items-center">
                {navItems.map((item) => (
                  item.active ? (
                    <li key={item.name} className={`${['Get started', 'Add Post', 'All Posts'].includes(item.name) ? "block" : `${item.name === 'Sign in' ? 'hidden xs:block' : 'hidden md:block '}`}`}>
                      <button
                        className={`tracking-tight text-[13px] font-medium md:inline-block 
                      ${item.name === 'Get started' ?
                            `px-4 py-2 rounded-full text-white 
                        ${isNavScrolled ?
                              "bg-[#1A8917]  hover:bg-[#156D12]"
                              : "bg-[#191919] hover:bg-black duration-100"}`
                            : ''}`}
                        onClick={() => navigate(item.path)}>
                        {item.name}
                      </button>
                    </li>
                  ) : null
                ))}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </nav>

          </Container>
        </header>
        <div className='w-full h-[75px]'>
          {/* Not Just an empty div */}
        </div>
      </>
    )
  }

  else if (location.pathname == '/about' || location.pathname == '/membership') { // for "/about" route
    return (
      <>
        <header className={`shadow ${location.pathname == '/about' ? 'bg-[#242424] border-[rgba(255,255,255,0.5)]' : ''} ${location.pathname == '/membership' ? 'bg-white sticky top-0 border-black z-10' : ''} box-border border-b-[1.5px]   transition-all w-full `}>
          <div className='flex '>
            <div className='p-6 w-full '>
              <nav className="flex align-middle items-center justify-between">
                <div className="">
                  <Link to='/'>
                    <Logo props='w-[9rem] xs:w-[8rem]' fill={`${location.pathname == '/about' ? "white" : "black"}`} />
                  </Link>
                </div>
                {/* <ul className = "flex ml-auto gap-x-6 items-center">
                {navItems.map((item) => (
                  item.active ? (
                    <li key={item.name} className={`${['Get started', 'Add Post', 'All Posts'].includes(item.name)? "block": `${item.name ==='Sign in'? 'hidden xs:block': 'hidden md:block '}`}`}>
                      <button 
                      className = {`tracking-tight text-[13px] font-medium md:inline-block 
                      ${item.name === 'Get started'? 
                        `px-4 py-2 rounded-full text-white 
                        ${isNavScrolled?
                          "bg-[#1A8917]  hover:bg-[#156D12]"
                          : "bg-[#191919] hover:bg-black duration-100"}`
                      : ''}`}
                      onClick={()=> navigate(item.path)}>
                        {item.name}
                      </button>
                    </li>
                  ) : null
                ))}
              </ul> */}
                {!authStatus &&
                  <div className='flex tracking-tighter gap-x-2 xs:gap-x-3 text-xs font-medium'>
                    <Link to="/login"><div className={`flex justify-center ${location.pathname == '/about' ? "text-[#e9e9e9] border-[#e9e9e9]" : "border-black"}  px-3 py-1 xs:px-4 xs:py-2 rounded-full border cursor-pointer`}>Sign in</div></Link>
                    <Link to="/signup"><div className={`flex justify-center ${location.pathname == '/about' ? " bg-slate-100 hover:bg-white " : "text-[#e9e9e9] border-[#e9e9e9] bg-[#191919] hover:bg-black duration-100"} px-3 py-1 xs:px-4 xs:py-2 text-xs rounded-full border cursor-pointer`}>Sign up</div></Link>
                  </div>
                }
              </nav>
            </div>
          </div>
        </header>
      </>
    )
  }

  else if (postPageRegex.test(location.pathname)) { // for "/post/(anything)" route
    return (
      <header className={`shadow box-border border-b-[1.5px] transition-all w-full `}>
        <div className='flex items-center px-6 py-3'>
          <div className=' w-full '>
            <nav className="flex align-middle items-center justify-between">
              <Link to='/'>
                <Logo props='w-[9rem] xs:w-[9rem]' />
              </Link>
              <div className='hidden items-center sm:flex'>
                <Link to={authStatus ? "/add-post" : "/login"}>
                  <div className='group flex text-slate-500 items-center gap-1 pr-8 hover:text-black hover:stroke-black stroke-slate-400'>
                    <WriteSvg />
                    <div className='text-sm tracking-tighter items-center align-middle font-medium'>Write</div>
                  </div>
                </Link>
                {
                  !authStatus && 
                  <div className='hidden md:flex tracking-tighter text-sm font-medium'>
                    <Link to="/signup">
                      <div className={`flex justify-center text-white border-[#e9e9e9] bg-[#1A8917]  hover:bg-[#156D12] duration-100 font-medium px-3 py-[0.30rem] text-sm rounded-full border cursor-pointer tracking-tighter`}>
                        Sign up
                      </div>
                    </Link>
                    <Link to="/login">
                      <div className={`flex justify-center pl-3 py-[0.30rem] cursor-pointer`}>Sign in</div>
                    </Link>
                  </div>
                }
              </div>
            </nav>
          </div>
          <div className='block md:ml-8'>
            {<GuestAccountMenu />}
          </div>
        </div>
      </header>
    )
  }
  return (
    <>
      <header className={`shadow box-border border-b-[1.5px]   transition-all w-full `}>
        <div className='flex items-center px-6 py-3'>
          <div className=' w-full '>
            <nav className="flex align-middle items-center justify-between">
              <Link to='/'>
                <Logo props='w-[9rem] xs:w-[9rem]' />
              </Link>
              <div className='hidden items-center sm:flex'>
                <Link to={authStatus ? "/add-post" : "/login"}>
                  <div className='group flex text-slate-500 items-center gap-1 pr-8 hover:text-black hover:stroke-black stroke-slate-400'>
                    <WriteSvg />
                    <div className='text-sm tracking-tighter items-center align-middle font-medium'>Write</div>
                  </div>
                </Link>
                {
                  !authStatus && <div className='hidden md:flex tracking-tighter text-sm font-medium'>
                    <Link to="/signup"><div className={`flex justify-center text-[#e9e9e9] border-[#e9e9e9] bg-[#1A8917]  hover:bg-[#156D12] duration-100 px-3 py-1 text-sm rounded-full border cursor-pointer`}>Sign up</div></Link>
                    <Link to="/login"><div className={`flex justify-center pl-3 py-1 cursor-pointer`}>Sign in</div></Link>
                  </div>
                }
              </div>
            </nav>
          </div>
          <div className='block md:ml-8'>
            {<GuestAccountMenu />}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header