import React, { useState } from "react"
import { useForm } from "../hooks/useForm"

import FileUploader from "react-firebase-file-uploader"

import firebase, { store } from "../config/firebase"

import { useSession } from "../hooks/useAuth"

export default function AddJournal() {
  const { auth } = useSession()
  const [values, handleChange, handleSubmit, setValues] = useForm(
    { weight: "", bodyFat: "", duration: "", progressPic: "" },
    handleAddJournal,
  )

  const [exercise, handleExerciseChange, handleExerciseSubmit] = useForm(
    {
      name: "",
      sets: 0,
      weight: 0,
      reps: 0,
      miles: 0,
      time: 0,
      description: "",
      difficulty: "",
    },
    handleExercises,
  )

  const [exercises, addExercise] = useState([])

  function handleAddJournal() {
    const journal = { ...values, exercises }
    console.log(journal)
    store
      .collection("users")
      .doc(auth.uid)
      .collection("journals")
      .add(journal)
      .then(res => {
        console.log(res)
      })
  }

  function handleExercises(e) {
    e.preventDefault()
    addExercise([...exercises, exercise])
  }

  function handleUpload(fileName) {
    firebase
      .storage()
      .ref(`progressImages/${auth.uid}`)
      .child(fileName)
      .getDownloadURL()
      .then(url => {
        setValues({ ...values, progressPic: url })
      })
  }

  return (
    <>
      <form className={handleSubmit}>
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          onChange={handleChange}
          value={values.weight}
        />
        <input
          type="number"
          name="bodyFat"
          placeholder="Body Fat Percentage"
          onChange={handleChange}
          value={values.bodyFat}
        />
        {/* DATE PICKER HERE */}
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
          value={values.duration}
        />
        {/* IMAGE UPLOADING FOR PROGRESS PICS GOES HERE */}
        <FileUploader
          accept="image/*"
          name="avatar"
          randomizeFilename
          storageRef={firebase.storage().ref(`progressImages/${auth.uid}`)}
          // onUploadStart={this.handleUploadStart}
          // onUploadError={this.handleUploadError}
          onUploadSuccess={handleUpload}
          // onProgress={this.handleProgress}
        />
      </form>

      {exercises.map(exercise => (
        <div>
          <p>{exercise.name}</p>
          <p>{exercise.description}</p>
          <p>{exercise.weight}</p>
          <p>{exercise.sets}</p>
          <p>{exercise.reps}</p>
          <p>{exercise.time}</p>
          <p>{exercise.difficulty}</p>
        </div>
      ))}

      <div>
        <h1>Add a exercise</h1>
        <form onSubmit={handleExercises}>
          <input
            type="text"
            name="name"
            placeholder="Exercise"
            onChange={handleExerciseChange}
            value={exercises.name}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleExerciseChange}
            value={exercises.description}
          />
          <input
            type="number"
            name="sets"
            placeholder="Miles"
            onChange={handleExerciseChange}
            value={exercises.miles}
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            onChange={handleExerciseChange}
            value={exercises.weight}
          />
          <input
            type="number"
            name="sets"
            placeholder="Sets"
            onChange={handleExerciseChange}
            value={exercises.sets}
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            onChange={handleExerciseChange}
            value={exercises.reps}
          />
          <select
            name="difficulty"
            onChange={handleExerciseChange}
            value={exercises.difficulty}>
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
          </select>
          <button onClick={e => handleExercises(e)}>Add exercise</button>
        </form>
      </div>
      <button onClick={handleAddJournal}>Add Journal</button>
    </>
  )
}
