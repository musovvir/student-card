import React, { useState, useEffect } from "react"
import { validator } from "../utils/validator"
import TextField from "./TextField"

const AddCard = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    yearOfBirth: "",
    portfolio: ""
  })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Email введен некорректно"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      },
      isCapitalSymbol: {
        message: "Падолжен содержать хотя бы одну заглавную букву"
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число"
      },
      min: {
        message: "Парольл должен состоять минимум из 8 символов",
        value: 8
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }
  return (
    <div className="container">
      <div className="row">
        <h1>Редактировать</h1>
        <form>
          <TextField
            label="Имя"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            error={errors.password}
          />
          <TextField
            label="Фамилия"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            error={errors.password}
          />
          <TextField
            label="Год рождения"
            name="yearOfBirth"
            value={data.yearOfBirth}
            onChange={handleChange}
            error={errors.password}
          />
          <TextField
            label="Портфолио"
            name="portfolio"
            value={data.portfolio}
            onChange={handleChange}
            error={errors.password}
          />
          <button className="btn btn-secondary">Назад</button>
          <button className="btn btn-primary m-1">Обновить</button>
        </form>
      </div>
    </div>
  )
}

export default AddCard
