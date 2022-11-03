function Review() {
    return(
        <div>
        <div className="review">
            <div>
                <h1>Для вопросов/пожеланий заполните, пожалуйста, форму:</h1>
            </div>
        <form>
        <div className="form">
        <label className="">Ваше Имя</label>
        <input className="inputReview" type="text"></input>
        </div>
    
        <div className="form">
        <label>Номер телефона</label>
        <input className="inputReview" type="text"></input>
        </div>
    
        <div className="form">
        <label>Вопрос/Пожелание</label>
        <input className="inputReview" type="text"></input>
        </div>
    </form>


<div className="btn">
    <button class="send">Отправить</button>
</div>
</div>
    <div className="info">
        <p>Все данные использованы исключительно в учебных целях.</p>    
        <p>Логотип использован с сайта: Image by rawpixel.com</p>
        <p>Изображения, тексты и стиль оформления использованы с сайта: https://coffeemania.ru/</p>
    </div>
    </div>
    )
}

export default Review;