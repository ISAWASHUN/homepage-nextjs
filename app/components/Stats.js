import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const Stats = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <strong>99.9%</strong>
            <span>現役合格率</span>
          </div>
        </div>

        <div>
          <div>
            <Image src="" alt="icon online" width={64} height={64} />
            <h3>タイトル</h3>
            <p>詳細</p>
            <Link href="/"><BiChevronRight/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats