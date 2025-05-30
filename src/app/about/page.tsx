'use client';

import { useEffect, useState } from 'react';
import '../../css/layout/_about.scss';

const aboutLists = [
  {
    id: 0,
    title: 'myself',
    text: 'I started to learn HTML, CSS by myself. After that, I have worked in social media department or the entertaiment office to edit videos. These days, I work in the Web company as coding with HTML, CSS, Java Script.',
  },
  {
    id: 1,
    title: 'policy',
    text: 'I want to make a web site as close the design created by the designer as possible. I like to listning to or imagining thinking of the designer.I want to do interesting things.',
  },
  {
    id: 2,
    title: 'feature',
    text: 'When I make a web site, I tend to adjust from what planning designer and backend developer propose. I want to be Frontend that gets best of everything.',
  },
];

export default function AboutPage() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const typeElm = document.getElementsByClassName('about_text') as HTMLCollectionOf<HTMLElement>;

    const textAry = aboutLists.map((item) => item.text);
    const durationTimeArr = textAry.map((text) => text.length);
    const durationTime = Math.max(...durationTimeArr);

    const typing = (element: string, sentence: string, i: number): Promise<void> => {
      return new Promise((resolve, reject) => {
        [...sentence].forEach((character, index) => {
          setTimeout(() => {
            try {
              const el = document.getElementsByClassName(element)[i];
              if (!el) return;
              if (character !== '.') {
                el.innerHTML += character;
              } else {
                el.innerHTML += '.';
                el.innerHTML = el.innerHTML.replace(/(.*)\./, '$1.<br />');
              }
              if (index === sentence.length - 1) resolve();
            } catch (err) {
              reject(err);
            }
          }, 15 * (index + 1));
        });
      });
    };

    const sample = async () => {
      for (let i = 0; i < typeElm.length; ++i) {
        typeElm[i].innerHTML = '';
        typeElm[i].style.display = 'block';
      }
      try {
        for (let i = 0; i < typeElm.length; ++i) {
          await typing('about_text', textAry[i], i);
        }
      } catch (err) {
        console.error(err);
      }
    };

    setTimeout(() => setIsShow(true), 1000);
    setTimeout(() => {
      sample();
    }, durationTime * 20 - 2000);

    return () => {};
  }, []);

  return (
    <section className={`about${isShow ? ' show' : ''}`}>
      <div className="inner">
        <h2 className="about_ttl">About</h2>
        {aboutLists.map((value) => (
          <div key={value.id} className={`about_box ${value.title}`}>
            <h3>
              <span>{value.title}</span>
            </h3>
            <p className="about_text">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}