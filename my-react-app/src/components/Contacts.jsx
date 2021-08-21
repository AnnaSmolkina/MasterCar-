import React from 'react';
import PostForm from '../containers/Form';


class Page_Contacts extends React.PureComponent {
          
  render() {

    return (
      <div className="Contacts">
       <div className="Contact_form">
          <h3> Вы можете оставить заявку.<br/>
           Мы обязатьельно с Вами свяжемся!</h3><br/>
          <PostForm/>
        </div>
        <div className="Contacts_free"></div>
        <div className="Contats_map">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.6584014458053!2d30.014530315789834!3d52.90057397988805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d6b7d210e74123%3A0x3d793294ac46dd7f!2zWmF2b2Rza29pIDEgNCwg0JbQu9C-0LHQuNC9!5e0!3m2!1sru!2sby!4v1609077954916!5m2!1sru!2sby" 
          width="570" 
          height="350" 
          frameBorder="0" 
          style={{border:0, borderRadius:20}}  
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0" 
          title='map'
          id="MAP"></iframe>
        </div>
      
      </div>
    );
    
  }

}
    
export default Page_Contacts;
    