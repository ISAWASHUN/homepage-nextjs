import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineBars3 } from 'react-icons/hi2'

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
                <li>
                  <Link href={"/"}>
                    Home
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