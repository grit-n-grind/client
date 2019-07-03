import React, { useState } from "react"
import { useForm } from "../hooks/useForm"
import { FiZap } from "react-icons/fi"
import moment from "moment"

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
      difficulty: 1,
    },
    handleExercises,
  )

  const [exercises, addExercise] = useState([])

  function handleAddJournal() {
    const journal = { ...values, exercises }
    store
      .collection("users")
      .doc(auth.uid)
      .collection("journals")
      .add({ createdAt: moment().unix(), ...journal })
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
    <div className="add_journal">
      <div className="add_journal_form_group">
        <div className="add_journal_form">
          <p>Log a workout</p>
          <form className={handleSubmit}>
            <input
              type="number"
              name="weight"
              placeholder="Body Weight"
              onChange={handleChange}
              value={values.weight}
              required
            />
            <input
              type="number"
              name="bodyFat"
              placeholder="Body Fat %"
              onChange={handleChange}
              value={values.bodyFat}
              required
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
        </div>

        <div className="add_journal_form">
          <p>Add an exercise</p>
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
            <button onClick={e => handleExercises(e)}>
              Add to today's workout
            </button>
          </form>
        </div>
      </div>

      <div className="exercises_to_submit">
        {exercises.map(exercise => (
          <div className="exercise_card">
            <div style={{ display: "flex" }}>
              <FiZap />
              <div className="exercise_title">
                <p>{exercise.name}</p>
                <p>{exercise.description}</p>
              </div>
            </div>
            <div className="exercise_details">
              <p>
                Weight <br />
                <span>{exercise.weight}</span>
              </p>
              <p>
                Sets <br />
                <span>{exercise.sets}</span>
              </p>
              <p>
                Reps <br />
                <span>{exercise.reps}</span>
              </p>
              <p>
                Time <br />
                <span>{exercise.time}</span>
              </p>
              <p>
                Difficulty <br />
                <span>{exercise.difficulty}</span>
              </p>
            </div>
          </div>
        ))}
        {exercises.length < 1 ? (
          <>
            <h2>What did you work out today?</h2>
            <h3>Use the form to add exercises.</h3>
          </>
        ) : (
          <button onClick={handleAddJournal}>{`Add ${
            exercises.length
          } workouts to Journal`}</button>
        )}
      </div>
    </div>
  )
}
