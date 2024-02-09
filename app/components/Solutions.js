import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaCheck } from 'react-icons/fa';

const solutionsContent = {
  text: {
    subTitle: '絶対合格を可能にする',
    Title: '良質な教材・添削',
    description:
      '各大学の出題傾向を分析して作成した、ハイグレードな教室オリジナル教材を使用。選び抜かれた良問に取り組むことで、難関大で求められる「思考力」「表現力」を伸ばします',
    features: [
      {
        title: '少人数制だからこそ可能な丁寧な指導',
      },
      {
        title: '選べる学習スタイル',
      },
      {
        title: '講師との距離が近く、質問しやすい',
      },
      {
        title: '静かで集中できる自習室も完備',
      },
    ],
  },
  images: {
    img1: '/assets/solution-img-1.jpg',
    img2: '/assets/solution-img-2.jpg',
    img3: '/assets/solution-img-3.jpg',
  },
  experience: {
    year: '20年',
    label: '支援されています',
  },
};

const Solutions = () => {
  return (
    <section>
      <div>
        <div>
          {/* 左 */}
          <div>
            <div>
              <div>
                <Image
                  src="/images/illustration-grow-together.svg"
                  alt="grow together"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                {/* 下の段 */}
                <div>
                  <div>
                    <div/>
                  </div>
                </div>
                <div>
                  <div>
                    <Image/>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div/>
                    </div>
                    <div>
                      <Image/>
                    </div>
                    <div>
                      <div>
                        <strong></strong>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 右 */}
        <div>
          <span><FaCheck/></span>
          <h2></h2>
          <p></p>
          <ul>
            <li>
              <span><FaCheck/></span>
              <span></span>
            </li>
          </ul>
          <div>
            <Link href="/pricing"/>
            <Link href="/pricing"/>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions