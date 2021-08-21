// eslint-disable-next-line
import React from 'react';

class Header extends React.PureComponent {
  
  render() {
    
    return (
      <div className="App-header">
        <div id='app-header_1'> 
           MasterCar<span>.</span>
        </div>
        <div id='app-header_2'></div>
        <div id='app-header_3'>
            <img id="Foto1" src="/logo.png" alt='Logo'/>
            <span>График работы: </span><br/> 
            9.00-19.30<br/> 
            Без обеда, без выходных
        </div>
        <div id='app-header_4'>
            <img id="Foto1" src="/logo.png" alt='Logo'/> 
            <span>Наш адрес:</span> г.Жлобин <br/>
            1-й Заводской пер., д. 4 
        </div>
        <div  id='app-header_5'>
            <img id="Foto1" src="/logo.png" alt='Logo'/> 
            <span>Позвоните нам:</span> <br/>
             +375293515152
        </div>
      </div>
      
     
    );

  }

}

export default Header;
