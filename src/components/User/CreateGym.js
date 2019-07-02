import React from "react"
import { useForm } from "../../hooks/useForm"

const CreateGym = () => {
  const [gym, handleChanges, handleSubmit] = useForm(
    { name: "", address: "", logo: "" },
    addGym,
  )

  function addGym() {
    console.log(gym)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        name="name"
        placeholder="Name"
        onChange={handleChanges}
        value={gym.name}
      />

      <input
        type="name"
        name="address"
        placeholder="Address"
        onChange={handleChanges}
        value={gym.address}
      />

      {/* Image uploading here */}

      <button>Create Gym</button>
    </form>
  )
}

export default CreateGym
