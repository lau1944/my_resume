import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MicrophoneIcon from 'material-ui/svg-icons/av/mic';
import './dark-voice.css';
import { black } from 'material-ui/styles/colors';
import { LARGE } from 'material-ui/utils/withWidth';
import { colors } from 'material-ui/styles';



class DarkVoiceComponent extends Component {
   

    render() {
      const imageClick = () => {
        
      } 
        return (

          <div>
            <div className="dark-voice">
            <img src="password_app.png" style={{width:80,height:80,float:"left",padding:"60px"}}></img>
            <div style={{overflow:"auto"}}>
              <p className="intro_text">KeyGuard</p>
              <p className="second_text">A simple offline note taker & 
              password manager & secure your photos</p>
              <a href="https://play.google.com/store/apps/details?id=com.easystudio.password_helper" target="_blank" style={{float:"right"}}>
              <img src="googleplay.png" style={{width:200,height:80,float:"right"}}></img>
              </a>
              </div>
            </div>
         
            </div>
        );
    }
}

export default DarkVoiceComponent;
