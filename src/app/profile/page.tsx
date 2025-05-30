'use client';

import { useEffect, useState } from 'react';
import '../../css/layout/_profile.scss';

const profileLists = [
  {
    id: 'html',
    title: "HTM CSS",
    text: ['over 5 years'],
  },
  {
    id: 'css',
    title: "AI",
    text: ['Cursor, MCPServer, dify etc'],
  },
  {
    id: 'js',
    title: "JavaScript",
    text: [
      'over 5 years - native JS',
      'under 2 year - React/Typescript/Next',
      'I mainly use native JS.',
    ],
  },
  {
    id: 'design',
    title: "about Design",
    text: [
      'over 5 years - Photoshop/Illustrator',
      'I sometimes use XD, Figma.',
      'I am not good at making design by Photoshop and Illustrator.',
    ],
  },
  {
    id: 'others',
    title: "others",
    text: [
      'java/php/gulp/XD/Figma...',
      'I have touched ... When I made LP, I have used the dev of the service.',
    ],
  },
];

export default function ProfilePage() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    return () => setIsShow(false); // アンマウント時にfalseに戻す（任意）
  }, []);

  return (
    <section className={`profile${isShow ? ' show' : ''}`}>
      <div className="inner">
        <h2 className="profile_ttl">profile</h2>
        <div className="profile_skill-wrap">
          {profileLists.map((value) => (
            <div key={value.id} className={`profile_box ${value.id}`}>
              <h3>
                <span>{value.title}</span>
              </h3>
              {value.text.map((t, i) => (
                <p key={i} className="profile_text">
                  {t}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
