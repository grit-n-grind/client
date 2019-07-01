import { useState } from "react"

export const useForm = (initalState, callback) => {
  const [values, setValue] = useState(initalState)

  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    setValue(initalState)
    callback()
  }

  const handleChange = e => {
    e.persist()

    if (e.target.type == "checkbox") {
      setValue(values => {
        return { ...values, [e.target.name]: e.target.checked }
      })

      return
    }

    setValue(values => {
      return { ...values, [e.target.name]: e.target.value }
    })
  }

  return [values, handleChange, handleSubmit]
}
