function Button({filteredDrink}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredDrink("coffee")}>Кофе</button>
            <button className="change" onClick={() => filteredDrink("tea")}>Чай</button>
            <button className="change" onClick={() => filteredDrink("notAtea")}>Цветочные/фруктовые чаи</button>
        </div>
    )
}

export default Button;