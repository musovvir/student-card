import React from "react"
import PropTypes from "prop-types"

const Card = ({ firstName, lastName, yearOfBirth, portfolio }) => {
  return (
    <div className="container">
      <h1>Карточка студента</h1>
      <p>Имя: </p>
      <p>Фамилия: </p>
      <p>Год рождения: </p>
      <p>Портфолио: </p>
      <button className="btn btn-primary">Редактировать</button>
    </div>
  )
}

Card.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  yearOfBirth: PropTypes.string,
  portfolio: PropTypes.string
}

export default Card
