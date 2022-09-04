import "./MainSliderItem.scss";

const MainSliderItem = ({name, manufacturer, img, prices}) => {
  
  const durationPrices = prices.map(({label, price}, i) => {
    return (
      <div key={i} className="goods-duration">
        <p className="goods-price">{price}</p>
        <p className="goods-day">{label}</p>
      </div>
    )
  })

  return (
    <div className="goods-item">
      <img src={img} alt={name} className="goods-item__img" />
      <h3 className="goods__name">{name}</h3>
      <p className="goods__manufacturer">{manufacturer}</p>
      <div className="goods-durations">
        {durationPrices}
      </div>
      <div className="goods-btns">
        <button className="goods-more white-btn">Подробнее</button>
        <button className="goods-card green-btn">В корзину</button>
      </div>
    </div>
  )
}

export default MainSliderItem;