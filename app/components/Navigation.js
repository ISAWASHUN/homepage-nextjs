import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'

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
      <header>
        <div>
          <div>
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
            <div>
              <ul>
                {navigationMenu.map((item, index) => (
                  <li key={index}>
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
              <Link href={"/"}>
                申し込み
              </Link>

              {/* モバイル */}
              <button>
                <HiOutlineBars3/>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/*  */}
    </>
  )
}

export default Navigation