import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

const Card = () => {
  const history = useHistory()
  const firstName = localStorage.getItem("firstName")
  const lastName = localStorage.getItem("lastName")
  const yearOfBirth = localStorage.getItem("yearOfBirth")
  const portfolio = localStorage.getItem("portfolio")
  return (
    <div className="container">
      {firstName?.length > 0 ? (
        <>
          <h1>Карточка студента</h1>
          <p>Имя: {firstName}</p>
          <p>Фамилия: {lastName}</p>
          <p>Год рождения: {yearOfBirth}</p>
          <p>
            Портфолио: <a href={portfolio}>{portfolio}</a>
          </p>
          <button
            onClick={() => history.replace("/addCard")}
            className="btn btn-primary"
          >
            Редактировать
          </button>
        </>
      ) : (
        <>
          <h1>Карточка студента</h1>
          <p>Нет данных</p>
          <button
            className="btn btn-primary"
            onClick={() => history.push("/addCard")}
          >
            Добавить
          </button>
        </>
      )}
    </div>
  )
}

export default Card
