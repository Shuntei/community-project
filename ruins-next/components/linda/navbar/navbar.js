import { useState } from 'react'
import styles from './navbar.module.css'
import CartSvg from '@/public/icons/cart.svg'
import CartLine from '@/public/icons/cart-line.svg'
import CartLineB from '@/public/icons/cart-lineBlack.svg'
import CartLineBlack from '@/public/icons/CartLineBlack.svg'
import ProfileIcon from '@/public/icons/profile-icon.svg'
import ProfileIconBlack from '@/public/icons/profile-iconBlack.svg'
import Image from 'next/image'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import LogoutModal from '../modals/logout-modal'
import LoginModal from '../modals/login-modal'
import Login from '@/pages/member/account/login'
import ProfileModal from '../modals/profile-modal'
import NavbarPopup from './navbarPopup'
import NavbarMobile from './navbar-mobile'
import { useCart } from '@/hooks/use-cart'
import CartModal from '@/components/kevin/modal/cart-modal'
import { useAuth } from '@/contexts/auth-context'

export default function Navbar({ className, navColor = 'white' }) {
  const { auth, profile, logout } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { totalItems } = useCart()
  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={`${styles.navbar} ${isOpen ? '' : className} ${
          navColor === 'white' ? 'text-white' : 'text-black'
        } relative`}
      >
        <div className="flex justify-start md:items-start md:pt-0 pt-[5px] w-1/3">
          <div className="flex cursor-pointer md:justify-start gap-[15px]">
            <div onClick={toggleNav} className="pt-[2px]">
              <div
                id="nav-icon4"
                className="md:w-[30px] w-[23px] h-auto absolute"
              >
                <div
                  className={`w-full h-[2px] ${
                    navColor === 'white' ? 'bg-white' : 'bg-black'
                  } transform transition duration-500 ease-in-out ${
                    isOpen ? 'rotate-45 md:translate-y-1.5 translate-y-1.5' : ''
                  } `}
                ></div>
                <div
                  className={`w-full h-[2px] ${
                    navColor === 'white' ? 'bg-white' : 'bg-black'
                  }  md:mt-[10px] mt-[6px] transform  transition duration-500 ease-in-out ${
                    isOpen
                      ? '-rotate-45 md:-translate-y-1.5 -translate-y-[0.125rem]'
                      : ''
                  }`}
                ></div>
              </div>
            </div>
            <Link href="#" className="md:block hidden text-[15px] pl-[40px]">
              MAIN
            </Link>
          </div>
        </div>
        <Link
          href="/"
          className="md:text-[40px] text-[20px] font-medium justify-center flex w-1/3"
        >
          Ruins
        </Link>
        <div className={`${styles['navlink-container']} relative w-1/3`}>
          {auth.id ? (
            <div>
              <div className="relative cursor-pointer">
                <div
                  className="cursor-pointer select-none"
                  onClick={() => {
                    setShowModal(!showModal)
                  }}
                >
                  <div className="absolute top-[-10px] left-0 right-0 bottom-[-10px]"></div>
                  <a href="" className="absolute top-[-4px] left-[-35px]">
                    {profile.profileUrl ? (
                      <Image
                        width={25}
                        className="rounded-full"
                        height={25}
                        src={profile.profileUrl}
                        alt=""
                      />
                    ) : (
                      <CgProfile className="text-[25px]" />
                    )}
                  </a>
                  <div className="tracking-wide before:py-[10px]">
                    {auth.username}
                  </div>
                </div>
                <ProfileModal logout={logout} isVisible={showModal} />
              </div>
            </div>
          ) : (
            <div
              className={`${styles['navlink-container']} ${styles['navlinks']}`}
            >
              <Link href="/member/account/login">LOG IN</Link>
              <span>/</span>
              <Link href="/member/account/signup">SIGN UP</Link>
            </div>
          )}

          <div
            className={`${styles.cartLineContainer} ${
              navColor === 'white' ? 'text-white' : 'text-black'
            }  ${styles['navlinks']}`}
          >
            <CartModal />
            {/* <Link href="/shop/cart">CART</Link> */}

            <div className={`${styles['cart-number']}`}>
              {navColor === 'white' ? (
                <Image alt="" src={CartSvg} />
              ) : (
                <Image alt="" src={CartLineBlack} />
              )}

              <span>{totalItems}</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles['navlink-container-mobile']} w-1/3 justify-end`}
        >
          <div className={`${styles['nav-cart-mobile']}`}>
          <CartModal />

            {navColor === 'white' ? (
              <Image alt="" src={CartLine} />
            ) : (
              <Image alt="" src={CartLineB} />
            )}
            <div className={styles['cart-number']}>{totalItems}</div>
          </div>
          <button
            onClick={() => {
              setShowModal(!showModal)
            }}
            href=""
            className={styles['profile-icon']}
          >
            {profile.profileUrl ? (
              <Image
                width={20}
                className="rounded-full"
                height={20}
                src={profile.profileUrl}
                alt=""
              />
            ) : navColor === 'white' ? (
              <Image alt="" src={ProfileIcon} />
            ) : (
              <Image alt="" src={ProfileIconBlack} />
            )}
          </button>
        </div>
        {auth.id ? (
          <LogoutModal isVisible={showModal} />
        ) : (
          <LoginModal isVisible={showModal} />
        )}
      </nav>
      {isOpen ? <NavbarPopup /> : ''}
      {/* <NavbarMobile /> */}
    </>
  )
}
