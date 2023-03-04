import Page from "../components/Page";
import classes from "./PatientList.module.css";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Patient from "./Patient";
import { useState } from "react";
import { Link } from "react-router-dom";
let patient = null;
export default function PatientList() {
  const patientList = [
    {
      id: 1,
      name: "FirstNameA",
      lastName: "LastNameA",
      medication: [{ name: "A", dosage: "dosageA" }],
      careTeam: [{ id: "NurseAId", name: "NurseA" }],
      flowSheet: [],
      nurseNotes: [{ date: new Date(1995, 11, 17), note: "sampleNoteA" }],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 2,
      name: "FirstNameB",
      lastName: "LastNameB",
      medication: [{ name: "B", dosage: "dosageB" }],
      careTeam: [{ id: "NurseBId", name: "NurseB" }],
      flowSheet: [],
      nurseNotes: [{ date: new Date(1995, 11, 17), note: "sampleNoteB" }],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 3,
      name: "FirstNameC",
      lastName: "LastNameC",
      medication: [{ name: "C", dosage: "dosageC" }],
      careTeam: [{ id: "NurseCId", name: "NurseC" }],
      flowSheet: [],
      nurseNotes: [{ date: new Date(1995, 11, 17), note: "sampleNoteC" }],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 4,
      name: "FirstNameD",
      lastName: "LastNameD",
      medication: [{ name: "D", dosage: "dosageD" }],
      careTeam: [{ id: "NurseDId", name: "NurseD" }],
      flowSheet: [],
      nurseNotes: [{ date: new Date(1995, 11, 17), note: "sampleNoteD" }],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 5,
      name: "FirstNameE",
      lastName: "LastNameE",
      medication: [{ name: "E", dosage: "dosageE" }],
      careTeam: [{ id: "NurseEId", name: "NurseE" }],
      flowSheet: [],
      nurseNotes: [{ date: new Date(1995, 11, 17), note: "sampleNoteE" }],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
  ];

  return (
    <Page>
      <h1>THIS IS PATIENTLIST</h1>
      <div className={classes.patientListContainer}>
        {patientList.map((patient) => {
          return (
            <Link
              key={patient.id}
              to="/patient"
              state={{ patient: "New State" }}
            >
              <Button
                key={patient.id}
                id={patient.id}
                className={classes.Button}
              >{`${patient.id}: ${patient.name} ${patient.lastName}`}</Button>
            </Link>
          );
        })}
      </div>
    </Page>
  );
}
{
  /* <Link
  to={{ pathname: "/abc/testing/results", state: { results: resultsArray } }}
>
  {" "}
  Click{" "}
</Link>; */
}
