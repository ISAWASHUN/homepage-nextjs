import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const heroContent = {
  text: {
    subtitle: 'ORIGIN ゼミナール',
    title: '一つ上を目指す',
    description: 'ようこそ、ORIGIN ゼミナールへ。私たちは、一つ上を目指す人たちのための学び舎です。ここでは、あなたの可能性を最大限に引き出すためのカリキュラムを提供しています。あなたの可能性を最大限に引き出すためのカリキュラムを提供しています。',
  },
  images: {
    img1: '/assets/hero-img-1.jpg',
    img2: '/assets/hero-img-2.jpg',
    img3: '/assets/hero-img-3.jpg',
    img4: '/assets/hero-img-4.jpg',
    img5: '/assets/hero-img-5.jpg',
  }
}

const Hero = () => {
  return (
    <section>
      <div>
        <div>
          {/* Left */}
          <div>
            <span>{heroContent.text.subtitle}</span>
            <h1>{heroContent.text.title}</h1>
            <p>{heroContent.text.description}</p>
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
                <Image src={heroContent.images.img1} alt='img1' width={397} height={406} />
              </div>
              <div>
                <div>
                  <div>
                    <Image src={heroContent.images.img2} alt='img2' width={437} height={437} />
                  </div>
                  <div></div>
                </div>
                <div>
                <Image src={heroContent.images.img3} alt='img3' width={374} height={437} />
                </div>
              </div>
            </div>
            {/* したの段 */}
            <div>
              <div>
                <div>
                  <div>
                  <Image src={heroContent.images.img4} alt='img4' width={394} height={394} />
                  </div>
                </div>
                <div>
                <Image src={heroContent.images.img5} alt='img5' width={446} height={495} />
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