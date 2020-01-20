import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';
import { Avatar } from 'material-ui';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <img src="duckpath.png" style={{width:135,height:135,float:"right"}}></img>
            <p className="intro">Duckpath</p>
            <p className="second_intro">We have so many apps can review places, restaurants, but how about reviewing a road ?</p>
            <a href="https://play.google.com/store/apps/details?id=com.pather.map" target="_blank" style={{float:"left"}}>
              <img src="googleplay.png" style={{width:200,height:80,float:"right"}}></img>
              </a>
          </div>
        );
    }
}

export default DesignComponent;
