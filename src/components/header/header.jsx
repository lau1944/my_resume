import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
const scrollTo = require('scroll-to');
import FlatButton from 'material-ui/FlatButton';
import './header.css';
import { AvMicOff } from 'material-ui/svg-icons';
import { AppBar } from 'material-ui';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    ScrollToBottom(){
      scrollTo(0, 5000, {
      
        duration: 2000,
        behavior: "smooth"
    });
    }
    
  

    render() {
        return (
          <div>
          <div className="header-wrapper" style={{"height": this.state.height}}>
            <div className="header">
              <div style={{textAlign:"right",padding:"15"}}  >
            <FlatButton onClick={this.ScrollToBottom.bind(this)} label="Contact Me"  target="_blank"
                  labelStyle={{color:"grey",textAlign:"right"}}  />
                  </div>
              <div className="header-text">
              <img style={{width:50,height:50}} src="avatar.png" sizes="50" />
                <h3>Jimmy Leo</h3>
                <h4>dream job = Software Engineer</h4>
                 <FlatButton label="View My Github" href="https://github.com/lau1944" target="grey" backgroundColor="black"
                  labelStyle={{color:"white"}}/>
          </div>
            </div>
            <div className="scroll-down-btn">
              <FloatingActionButton mini={true} backgroundColor="#74b9ff" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
            </div>

          </div>
          </div>
        );
    }
}

export default HeaderComponent;
