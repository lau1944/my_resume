import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

   
    render() {
        return (
            <div className="timeline">
              <p className="headline" style={{color:"#0984e3"}} >credentials</p>
              <div className="timeline-entry" >
                  <Card >
                      <CardHeader title="Ming Chuan University" subtitle="Bachelor degree  2016 - 2020"/>
                    
                  </Card>
                </div>
               


                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="University of California , Irving"  subtitle="Master degree 2020 - 2022"
                          />
                        
                    </Card>
                  </div>
              <p className="headline" style={{color:"#0984e3"}}>Working experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Microsoft" subtitle="part-time assistant"/>
                    
                  </Card>
                </div>
               


                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Zhili cloud information technology" subtitle="intern"
                          />
                        
                    </Card>
                  </div>
                 
                  <h1 style={{textAlign:"center",color:"black",paddingTop:"70px",fontSize:"25",fontFamily:"popins"}}> My App Here 👇</h1>
            </div>
        );
    }
}

export default TimelineComponent;
