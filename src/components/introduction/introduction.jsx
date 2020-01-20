import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="coder.jpg" style={{width:200,height:150}}/>
            <p className="introduction-text">
               Two years experience on Android DEV,love making mobile apps. Familiar with both front-end & back-end development,
               System design, serverless (firebase & aws lambda), GCP dev
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
