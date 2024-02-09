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
                  src={solutionsContent.images.img1}
                  alt="grow together"
                  width={626}
                  height={640}
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
                    <Image src={solutionsContent.images.img3} width={626} height={640} alt='img3'/>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <div/>
                    </div>
                    <div>
                      <Image src={solutionsContent.images.img2} width={547} height={573} alt='img2'/>
                    </div>
                    <div>
                      <div>
                        <strong>{solutionsContent.experience.year}</strong>
                        <span>{solutionsContent.experience.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 右 */}
        <div>
          <span>{solutionsContent.text.subTitle}</span>
          <h2>{solutionsContent.text.Title}</h2>
          <p>{solutionsContent.text.description}</p>
          <ul>
            {solutionsContent.text.features.map((feature, index) => (
              <li key={index}>
                <span><FaCheck/></span>
                <span>{feature.title}</span>
              </li>
            ))}
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