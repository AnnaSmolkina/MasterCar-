import React from 'react';
import { NavLink } from 'react-router-dom';



class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className="forLinks">
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/catalog" className="PageLink" activeClassName="ActivePageLink">Каталог товаров</NavLink>
        <NavLink to="/contacts" className="PageLink" activeClassName="ActivePageLink">Контакты</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    