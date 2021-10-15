export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === ""
        break

      case "isDigit": {
        const digitRegExp = /^\d+$/g
        statusValidate = !digitRegExp.test(data)
        break
      }

      case "isActual": {
        statusValidate = data > new Date().getFullYear()
        break
      }

      case "min": {
        statusValidate = data.length < config.value
        break
      }

      case "isURL": {
        const urlRegExp =
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g
        statusValidate = !urlRegExp.test(data)
        break
      }

      default:
        break
    }
    if (statusValidate) return config.message
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
