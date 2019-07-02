import React from "react"
import { useForm } from "../hooks/useForm"

export default function AddJournal() {
  const [values, handleChange, handleSubmit] = useForm(
    { weight: 0, bodyFat: 0, duration: 0, progressPic: "" },
    handleAddJournal,
  )

  function handleAddJournal() {
    console.log(values)
  }

  return (
    <form className={handleSubmit}>
      <input
        type="number"
        name="weight"
        onChange={handleChange}
        value={values.weight}
      />
      <input
        type="number"
        name="bodyFat"
        onChange={handleChange}
        value={values.bodyFat}
      />
      {/* <input type="number" name="duration" onChange={handleChange} value={values.date} /> */}
      <input
        type="number"
        name="duration"
        onChange={handleChange}
        value={values.duration}
      />
      {/* <input
        type="file"
        name="progressPic"
        onChange={handleChange}
        value={values.progressPic}
      /> */}
    </form>
  )
}
