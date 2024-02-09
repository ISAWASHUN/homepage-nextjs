import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaCheck } from 'react-icons/fa';



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