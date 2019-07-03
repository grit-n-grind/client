import React from "react"
import { useForm } from "../../hooks/useForm"

import FileUploader from "react-firebase-file-uploader"

import firebase, { store } from "../../config/firebase"

import { useSession } from "../../hooks/useAuth"
import slugify from "slugify"

const CreateGym = () => {
  const {
    auth: { uid },
  } = useSession()
  const [gym, handleChanges, handleSubmit, setValues] = useForm(
    { name: "", state: "", city: "", zip: "", address: "", logo: "" },
    addGym,
  )

  function addGym() {
    const slug = slugify(`${gym.name} ${gym.city}`, {
      replacement: "-",
      lower: true,
    })
    store
      .collection("gyms")
      .doc(slug)
      .set({
        owner: uid,
        slug: slug,
        ...gym,
      })
  }

  function handleUpload(fileName) {
    firebase
      .storage()
      .ref(`gymLogo/`)
      .child(fileName)
      .getDownloadURL()
      .then(url => {
        setValues({ ...gym, logo: url })
      })
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="Gym Information">
        GYM INFORMATION
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
        <input
          type="name"
          name="city"
          placeholder="City"
          onChange={handleChanges}
          value={gym.city}
        />
        <input
          type="name"
          name="state"
          placeholder="State"
          onChange={handleChanges}
          value={gym.state}
        />
        <input
          type="number"
          name="zip"
          placeholder="Zip"
          onChange={handleChanges}
          value={gym.zip}
        />
      </label>

      <label htmlFor="Gym Logo">
        UPLOAD YOUR LOGO
        <FileUploader
          accept="image/*"
          name="gymLogo"
          randomizeFilename
          storageRef={firebase.storage().ref(`gymLogo/`)}
          // onUploadStart={this.handleUploadStart}
          // onUploadError={this.handleUploadError}
          onUploadSuccess={handleUpload}
          // onProgress={this.handleProgress}
        />
      </label>
      <button>Create Gym</button>
    </form>
  )
}

export default CreateGym
