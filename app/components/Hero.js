import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section>
      <div>
        <div>
          {/* Left */}
          <div>
            <span>サブタイトル</span>
            <h1>タイトル</h1>
            <p>詳細</p>
            <div>
              <Link href={''}>資料ダウンロード</Link>
              <Link href={''}>申し込み</Link>
            </div>
          </div>

          {/* right */}
          <div>
            {/* 上の段 */}
            <div>
              <div>
                <Image src={''} alt={''} width={''} height={''} />
              </div>
              <div>
                <div>
                  <div>
                    <Image src={''} alt={''} width={''} height={''} />
                  </div>
                  <div></div>
                </div>
                <div>
                  <Image src={''} alt={''} width={''} height={''} />
                </div>
              </div>
            </div>
            {/* したの段 */}
            <div>
              <div>
                <div>
                  <div>
                    <Image src={''} alt={''} width={''} height={''} />
                  </div>
                </div>
                <div>
                  <Image src={''} alt={''} width={''} height={''} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero