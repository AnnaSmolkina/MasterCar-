// eslint-disable-next-line
import React from "react";

class Footer extends React.PureComponent {
 
  render() {
    
    return (
      <footer className='App-footer'>
        <div id='footer_1'>
           MasterCar<span>.</span><br/><br/>
           Всегда с заботой о клиентах!
        </div>
        <div id='footer_2'>
          <span> У нас можно приобрести:</span>
          <ul>
            <li>автомобильные шины и диски</li>
            <li>технические жидкости для авто</li>
            <li>масла для двигателей разных марок</li>
          </ul>
        </div>
        <div id='footer_3'>
          <span>Рабочее время: </span><br/><br/>
          9.00-19.30<br/> 
          Без обеда, без выходных
        </div>
        <div id="footer_4">
          <span>Контактная информация:</span> <br/><br/>
          г.Жлобин, 1-й Заводской пер., д. 4  <br/><br/>
          тел.: +37529 351-51-52 <br/><br/>
          e-mail: automag_drive@mail.ru
        </div>
        <div id='footer_5'>
          &copy; 2021 Анна Смолкина
        </div>
      </footer>
     
    );

  }

}

export default Footer;