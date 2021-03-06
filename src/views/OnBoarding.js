import React from "react"
import { useForm } from "../hooks/useForm"
import { store } from "../config/firebase"

import { useSession } from "../hooks/useAuth"

export default function OnBoarding() {
  const {
    auth: { uid },
  } = useSession()

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
    store
      .collection("users")
      .doc(uid)
      .set(values)
  }

  return (
    <div className="onboarding">
      <p>Create A Profile</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="User Information">
          User Information
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
        </label>

        <label htmlFor="Goals">
          Goals <br />
          <label htmlFor="Body Fat">
            <span className="sublabel">BODY FAT</span>
            <br />
            <div>
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
            </div>
          </label>
          <label htmlFor="Weight">
            <span className="sublabel">WEIGHT</span>
            <br />
            <div>
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
            </div>
          </label>
          <label htmlFor="Gym Owner">
            {" "}
            <input
              type="checkbox"
              name="gymOwner"
              onChange={handleChange}
              value={!values.gymOwner}
            />
            Gym owner?
          </label>
        </label>

        <button>Create Profile</button>
      </form>
    </div>
  )
}
