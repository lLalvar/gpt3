import './navbar.css'
import { RiMenu3Line, RiCloseLine, RiArrowUpSLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { useState, useEffect } from 'react'

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#wgpt3'>What is GPT3</a>
    </p>
    <p>
      <a href='#possibility'>Open AI</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [active, setActive] = useState(false)
  const [screenTop, setScreenTop] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='max-width'>
      <div className='gpt3__navbar'>
        <div
          className={`${
            scrollPosition > 400
              ? 'gpt3__return-btn'
              : 'gpt3__return-btn hidden'
          }`}
        >
          <button
            className='return-btn hidden'
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <a
              className={`${active ? 'return-btn1 active' : 'return-btn1'}`}
              href='#'
            >
              <RiArrowUpSLine />
            </a>
            <a
              className={`${active ? 'return-btn2 active' : 'return-btn2'}`}
              href='#'
            >
              <RiArrowUpSLine />
            </a>
          </button>
        </div>
        <div className='gpt3__navbar-links'>
          <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='gpt3__navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu ? (
            <button className='hamburger-menu'>
              <RiCloseLine color='#fff' onClick={() => setToggleMenu(false)} />
            </button>
          ) : (
            <button className='hamburger-menu'>
              <RiMenu3Line color='#fff' onClick={() => setToggleMenu(true)} />
            </button>
          )}
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu />
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
