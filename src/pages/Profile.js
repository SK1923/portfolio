import React from 'react';
import '../css/layout/_profile.scss';

const profileLists = [
  {
    id: 'html',
    title: "HTML",
    text: ['over 3 years']
  },
  {
    id: 'css',
    title: "CSS",
    text: ['over 3 years', 'I use also sass.']
  },
  {
    id: 'js',
    title: "Java script",
    text: ['over 3 years - jQuery/Webpack', 'under 1 years - React/Typescript/Vue', 'I mainly use native JS.']
  },
  {
    id: 'design',
    title: "about Design",
    text: ['over 3 years - Photoshop/illastrator/XD', 'I am not good at maiking design by Photoshop, illastrator, XD and figma.']
  },
  {
    id: 'others',
    title: "others",
    text: ['java/php/Linux/gulp...', 'I have touched ... When I made LP, I have used the dev of the service.']
  },
];

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }


  componentDidMount() {
    this.setState({ isShow: true });
  }

  componentWillUnmount() {
    this.setState({ isShow: false });
  }

  render() {
    return (
      <section className={'profile' + (this.state.isShow ? ' show' : '')}>
        <div className='inner'>
          <h2 className='profile_ttl'>profile</h2>
          <div className='profile_skill-wrap'>
            {profileLists.map((value) => {
              return (
                <div key={value.id} className={'profile_box ' + value.id}>
                  <h3><span>{value.title}</span></h3>
                  {value.text.map((text, i) => {
                    return (<p key={i} className='profile_text'>{text}</p>)
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
