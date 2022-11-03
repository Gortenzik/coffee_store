import Link from './Link';
import LineSearch from './LineSearch';


function Home() {
    
return (
  <div>
      <div className='slides'>
        <Link/>
      </div>
        <LineSearch/>
  
        <div className="info">
          <p>Все данные использованы исключительно в учебных целях.</p>    
          <p>Логотип использован с сайта: Image by rawpixel.com</p>
          <p>Изображения, тексты и стиль оформления использованы с сайта: https://coffeemania.ru/</p>
        </div>
  </div>

);
}

export default Home;