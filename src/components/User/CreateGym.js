import React from "react"
import { useForm } from "../../hooks/useForm"

import FileUploader from "react-firebase-file-uploader"

import firebase, { store } from "../../config/firebase"

const CreateGym = () => {
  const [gym, handleChanges, handleSubmit, setValues] = useForm(
    { name: "", address: "", logo: "" },
    addGym,
  )

  function addGym() {
    console.log(gym)
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

      <button>Create Gym</button>
    </form>
  )
}

export default CreateGym
