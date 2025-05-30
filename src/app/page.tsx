'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../css/layout/_home.scss'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`home home_box${isShow ? ' show' : ''}`}>
      <div className="home_box-text">
        <h2 className="home_ttl">WELCOME TO</h2>
        <p className="home_text">I am Kei Sugiura</p>
        <p className="home_text">I am still on the way...</p>
      </div>
      <div className="home_box-img">
        <p className="home_img">
          <Image src={`${basePath}/home.jpg`} alt="ホーム画像" width={580} height={367} />
        </p>
      </div>
    </section>
  );
}