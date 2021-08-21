import React from 'react';
import {NavLink} from 'react-router-dom';




class Home extends React.PureComponent {
  constructor(props){
    super(props)
    this.state= {
        nameShop:'MasterCar'
    }
}
  render() {
    const {nameShop}=this.state;
     if ({nameShop}){
     return (
       <div className='HomePage'>
        <div className="Page">
           <p id="TEXT1">Мы позаботимся о вашей машине! </p>
           <p id="TEXT2" >В {nameShop} вы можете подобрать комплектующие для своего автомобиля!</p>
           <NavLink to="/catalog"  className="modalbox">В каталог</NavLink>
        </div>
      </div>
      )
    }
    else {
      return (
        <div className='HomePage'>
         <div className="Page">
            <p id="TEXT1">Мы позаботимся о вашей машине! </p>
            <p id="TEXT2" >В ??? вы можете подобрать комплектующие для своего автомобиля!</p>
            <NavLink to="/catalog"  className="modalbox">В каталог</NavLink>
         </div>
       </div>
      );
    }
   }
};

export default Home;
