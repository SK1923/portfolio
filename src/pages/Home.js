import React from 'react';
import mv from '../img/home.jpg'
import '../css/layout/_home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({isShow: true});
    }, 1);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <section className={'home' + (this.state.isShow ? ' show' : '')}>
        <div className='home_box-text'>
          <h2 className='home_ttl'>WELCOME TO</h2>
          <p className='home_text'>I am Kei Sugiura</p>
          <p className='home_text'>I am still on the way...</p>
        </div>
        <div className='home_box-img'>
          <p className='home_img'><img src={mv} alt=""></img></p>
        </div>
      </section>
    );
  }
}
export default Home;
