import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const statsContent = {
  stats: [
    {
      number : "99.9%",
      label: "現役合格率",
    },
    {
      number : "3912",
      label: "生徒数",
    },
    {
      number : "12.8",
      label: "偏差値上昇",
    },
  ],
  text: {
    title: "担当アドバイザーによる徹底したサポート",
    description: "担当アドバイザーによる徹底したサポートを受けることで、生徒の偏差値は平均12.8上昇しています。",
    img: "/assets/images/illustration.svg",
  }
}

const Stats = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            {statsContent.stats.map((stat, index) => (
              <div key={index}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div>
            <Image src={statsContent.text.img} alt="icon online" width={100} height={200} />
            <h3>{statsContent.text.title}</h3>
            <p>{statsContent.text.description}</p>
            <Link href="/"><BiChevronRight/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats