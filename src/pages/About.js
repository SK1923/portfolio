import React from 'react';
import '../css/layout/_about.scss';

const aboutLists = [
  {
    id: 0,
    title: "myself",
    text: 'I started to learn HTML, CSS by myself. After that, I have worked in social media department or the entertaiment office to edit videos. These days, I work in the Web company as coding with HTML, CSS, Java Script.',
  },
  {
    id: 1,
    title: "policy",
    text: 'I want to make a web site as close the design created by the designer as possible. I like to listning to or imagining thinking of the designer.I want to do interesting things.',
  },
  {
    id: 2,
    title: "feature",
    text: 'When I make a web site, I tend to adjust from what planning designer and backend developer propose. I want to be Frontend that gets best of everything.',
  },
];

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }


  typefuc() {
    const typeElm = document.getElementsByClassName('about_text');
    let textAry = [];
    let durationTimeArr = [];

    for (let i = 0; i < aboutLists.length; ++i) {
      textAry.push(aboutLists[i].text);
      typeElm[i].innerHTML = "";
      durationTimeArr.push(aboutLists[i].text.length);
    }

    let durationTime = Math.max(...durationTimeArr);

    function typing(element, sentence, i) {
      return new Promise((resolve, reject) => {
        [...sentence].forEach((character, index) => {
          if (character != '.') {
            setTimeout(() => {
              try {
                document.getElementsByClassName(element)[i].innerHTML += character;
              } catch (err) {
                reject(err);
              }
            }, 15 * ++index);
          } else {
            setTimeout(() => {
              try {
                let str = document.getElementsByClassName(element)[i].innerHTML += character;
                let new_str = str.replace(/(.*)\./, "$1.<br />");
                document.getElementsByClassName(element)[i].innerHTML = new_str;

                resolve();
              } catch (err) {
                reject(err);
              }
            }, 15 * ++index);
          }
        });
      })
    }

    async function sample() {
      const elm = document.getElementsByClassName('about_text');
      for (let i = 0; i < elm.length; ++i) {
        elm[i].innerHTML = '';
        elm[i].style.display = 'block';
      }
      try {
        for (let i = 0; i < typeElm.length; ++i) {
        const result = await typing('about_text', textAry[i], i);
      }
      } catch (err) {
        throw err;
      }
    }
    console.log((durationTime * 20) - 2000)

    setTimeout(() => {
      this.setState({ isShow: true });
    }, 1000);
    setTimeout(() => {
      sample().catch(() => {
      });
    }, (durationTime * 20) - 2000);

  }


  componentDidMount() {
    const elm = document.getElementsByClassName('about_text');
    for (let i = 0; i < elm.length; ++i) {
      elm[i].innerHTML = '';
    }
    this.typefuc();
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <section className={'about' + (this.state.isShow ? ' show' : '')}>
        <div className='inner'>
          <h2 className='about_ttl'>About</h2>
          {aboutLists.map((value) => {
            return (
              <div key={value.id} className={'about_box ' + value.title}>
                <h3><span>{value.title}</span></h3>
                <p className='about_text'>{value.text}</p>
              </div>
            );

          })}
        </div>
      </section>
    );
  }
}
export default About;
