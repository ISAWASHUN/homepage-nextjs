import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'
import {IoClose} from 'react-icons/io5'
import {BiChevronRight} from 'react-icons/bi'


const navigationMenu = [
  {
    href: "#home",
    label: "ホーム"
  },
  {
    href: "#services",
    label: "サービス"
  },
  {
    href: "#solution",
    label: "解決策"
  },
  {
    href: "#testimonials",
    label: "お客様の声"
  },
  {
    href: "#blog",
    label: "ブログ"
  },
]

const Navigation = () => {
  return (
    <>
      {/* webメニュー */}
      <header className='py-7'>
        <div className='container px-4 mx-auto'>
          <div className='flex justify-between items-center'>
            {/* ロゴ */}
            <div>
              <Link href={"/"}>
                <Image
                src={'/assets/logo.png'}
                alt="logo"
                width={128}
                height={128} />
              </Link>
            </div>

            {/* メニュー */}
            <div className='hidden lg:block text-center'>
              <ul className='flex space-x-7'>
                {navigationMenu.map((item, index) => (
                  <li className='text-body' key={index}>
                    <Link href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={"/"}>
                  </Link>
                </li>
              </ul>
            </div>
            {/* ボタン */}
            <div>
            <Link
                href={'#'}
                className="btnBlue inline-flex lg:inline-block max-lg:hidden"
              >
                申し込み
              </Link>

              {/* モバイル */}
              <button className='block lg:hidden'>
                <HiOutlineBars3 className='text-4xl'/>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div>
        <div>
          <div>
            <div>
              <button>
                <IoClose />
                <span>閉じる</span>
              </button>
            </div>
            <div>
              <ul>
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <span>{item.label}</span>
                      <span>
                      <BiChevronRight/>
                    </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation