import React from 'react'
import {Logo,Container,LogoutBtn} from "../"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();

  const navItems = [
    
    {
      name: "Our story",
      path:"/",
      active: !authStatus
    },
    {
      name: "Membership",
      path:"/",
      active: !authStatus
    },
    
    {
      name: "Write",
      path:"/",
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
  return (
    <>
      <header className = {`shadow ${authStatus? "bg-white" : "bg-[#ffc017]"} border-b border-black fixed w-full z-10`}>
        <div className='py-[20px]'>
          <Container >
            <nav className="flex align-middle items-center">
              <div className="mr-4">
                <Link to='/'>
                  <Logo props='w-[10rem]'/>
                </Link>
              </div>
              <ul className = "flex ml-auto items-center">
                {navItems.map((item) => (
                  item.active ? (
                    <li key={item.name}>
                      <button 
                      className = {`tracking-tight text-[13px] font-semibold inline-block mx-3 ${item.name === 'Get started'? " px-4 py-2 rounded-full  text-white bg-[#191919] hover:bg-black duration-100": ''}`}
                      onClick={()=> navigate(item.path)}>
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
        </div>
      </header>
      <div className='w-full h-[75px]'></div>
    </>
  )
}

export default Header