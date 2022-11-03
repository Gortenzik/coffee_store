import imageFive from './contacts.png'

function Contact() {
    return(
        <div>
            <div className='contacts'>
                <img src={imageFive} alt='' width="80%"/>
            </div>
        <div className="info">
            <p>Все данные использованы исключительно в учебных целях.</p>    
            <p>Логотип использован с сайта: Image by rawpixel.com</p>
            <p>Изображения, тексты и стиль оформления использованы с сайта: https://coffeemania.ru/</p>
        </div>
      </div>
    )
}

export default Contact;