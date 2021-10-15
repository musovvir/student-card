import React, { useState, useEffect } from "react"
import { validator } from "../utils/validator"
import TextField from "./TextField"
import { useHistory } from "react-router-dom"

const AddCard = () => {
  const history = useHistory()
  const [data, setData] = useState({
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    yearOfBirth: localStorage.getItem("yearOfBirth"),
    portfolio: localStorage.getItem("portfolio")
  })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    firstName: {
      isRequired: {
        message: "Поле обязательно для заполнения"
      }
    },
    lastName: {
      isRequired: {
        message: "Поле обязательно для заполнения"
      }
    },
    yearOfBirth: {
      isRequired: {
        message: "Поле обязательно для заполнения"
      },
      min: {
        message: "Год должен быть корректным",
        value: 4
      },
      isActual: {
        message: "Год должен быть корректным"
      },
      isDigit: {
        message: "Год должен быть в цифрах"
      }
    },
    portfolio: {
      isRequired: {
        message: "Поле обязательно для заполнения"
      },
      isURL: {
        message: "Поле обязательно для заполнения"
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

  // const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

  useEffect(() => {
    localStorage.setItem("firstName", data.firstName)
    localStorage.setItem("lastName", data.lastName)
    localStorage.setItem("yearOfBirth", data.yearOfBirth)
    localStorage.setItem("portfolio", data.portfolio)
  }, [data])

  return (
    <div className="container">
      <div className="row">
        <h1>Редактировать</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Имя"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <TextField
            label="Фамилия"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
          <TextField
            label="Год рождения"
            name="yearOfBirth"
            value={data.yearOfBirth}
            onChange={handleChange}
            error={errors.yearOfBirth}
          />
          <TextField
            label="Портфолио"
            name="portfolio"
            value={data.portfolio}
            onChange={handleChange}
            error={errors.portfolio}
          />
          <button
            className="btn btn-secondary"
            onClick={() => history.replace("/")}
          >
            Назад
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => history.push("/")}
          >
            Обновить
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCard
