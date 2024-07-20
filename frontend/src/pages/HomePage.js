import React, {Component} from "react";
import HeroComponent from "../components/HeroComponent";
import Footer from "../components/Footer";
import FeatureComponent from '../components/FeatureComponent'
import LoadingComponent from '../components/LoadingComponent';
import {MyContext} from '../Context';

export default class HomePage extends Component {
  static contextType = MyContext;
  render () {
    if(this.context.loading) {
      return <LoadingComponent />
    }
    else{
      return (
        <>
          <HeroComponent data={this.context.rooms.slice(0, 4)} />
          <FeatureComponent />
          <Footer />
        </> 
      );
    }
    
  }
}
