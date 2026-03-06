import "./construction.scss"
import Bild from "../../assets/imgs/bild.png"
import Cal from "../../assets/icons/calendar.svg"
import Strelka from "../../assets/icons/strelkawniz.svg"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper/modules"
import { useState, useRef, useEffect } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"

function Construction() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState("Октябрь 2024")
  const calendarRef = useRef(null)

  const months = [
    "Январь 2024", "Февраль 2024", "Март 2024", "Апрель 2024",
    "Май 2024", "Июнь 2024", "Июль 2024", "Август 2024",
    "Сентябрь 2024", "Октябрь 2024", "Ноябрь 2024", "Декабрь 2024"
  ]

  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen)
  const selectMonth = (month) => {
    setSelectedMonth(month)
    setIsCalendarOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <section className="construction">
      <div className="container">
        <h2 className="construction__title">
          Динамика строительства
        </h2>
        <p className="construction__text">
          Представляем ход строительства всех текущих объектов строительной компании «Авангард Стиль»
        </p>

        <div className="construction__tabs">
          <button className="active">Европа</button>
          <button>Panorama Park</button>
          <button>Москва Сити</button>
          <button>Москва</button>
          <button>Салкын-Тор</button>
          <button>Елисейские Поля</button>
        </div>

        <div className="construction__calendar-wrapper" ref={calendarRef}>
          <div 
            className={`contruction__calendar ${isCalendarOpen ? "open" : ""}`} 
            onClick={toggleCalendar}
          >
            <img src={Cal} alt="Календарь" className="construction__calendar-img" />
            <p className="contruction__calendar-date">{selectedMonth}</p>
            <img 
              src={Strelka} 
              alt="Стрелка" 
              className={`construction__calendar-img construction__calendar-arrow ${isCalendarOpen ? "rotate" : ""}`} 
            />
          </div>

          {isCalendarOpen && (
            <div className="construction__calendar-dropdown">
              {months.map((month) => (
                <p 
                  key={month} 
                  className="construction__calendar-dropdown-item" 
                  onClick={() => selectMonth(month)}
                >
                  {month}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="construction__slider">
          <Swiper
            modules={[Navigation, Thumbs]}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            className="construction__main"
          >
            {[...Array(6)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <img src={Bild} alt={`Slide ${idx + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            className="construction__thumbs"
          >
            {[...Array(12)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <img src={Bild} alt={`Thumb ${idx + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Construction