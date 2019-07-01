import React from "react"
import { useForm } from "../hooks/useForm"

export default function OnBoarding() {
  const [values, handleChange, handleSubmit] = useForm(
    {
      firstName: "",
      lastName: "",
      state: "",
      city: "",
      currentBodyFat: "",
      goalBodyFat: "",
      currentWeight: "",
      goalWeight: "",
      gymOwner: false,
    },
    handleOnboard,
  )

  function handleOnboard() {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={values.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={values.lastName}
      />
      <input
        type="text"
        name="state"
        placeholder="state"
        onChange={handleChange}
        value={values.state}
      />
      <input
        type="text"
        name="city"
        placeholder="city"
        onChange={handleChange}
        value={values.city}
      />
      <input
        type="number"
        name="currentBodyFat"
        placeholder="Current %"
        onChange={handleChange}
        value={values.currentBodyFat}
      />
      <input
        type="number"
        name="goalBodyFat"
        placeholder="Goal %"
        onChange={handleChange}
        onChange={handleChange}
        value={values.goalBodyFat}
      />
      <input
        type="number"
        name="currentWeight"
        placeholder="Current lb"
        onChange={handleChange}
        value={values.currentWeight}
      />
      <input
        type="number"
        name="goalWeight"
        placeholder="Goal lb"
        onChange={handleChange}
        value={values.goalWeight}
      />
      <input
        type="checkbox"
        name="gymOwner"
        onChange={handleChange}
        value={!values.gymOwner}
      />

      <button>Create Profile</button>
    </form>
  )
}
