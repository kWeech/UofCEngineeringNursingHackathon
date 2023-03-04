import Page from "../components/Page";
import classes from "./PatientList.module.css";
import Button from "../components/Button";
import Modal from "../components/Modal";

import { useState } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
let patient = null;
export default function PatientList() {
  const patientList = [
    {
      id: 1,
      name: "Jim",
      lastName: "Henry",
      medication: [{ name: "A", dosage: "dosageA" }],
      careTeam: [{ id: "NurseAId", name: "NurseA" }],
      flowSheet: [],
      nurseNotes: [{ date: new Date(1995, 11, 17), note: "sampleNoteA" }],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 2,
      name: "Molly",
      lastName: "Ann",
      medication: [{ name: "B", dosage: "dosageB" }],
      careTeam: [{ id: "NurseBId", name: "NurseB" }],
      flowSheet: [],
      nurseNotes: [
        { date: "2023-12-09", note: "Some notes about Molly" },
        { date: "2023-12-19", note: "Molly is great she is healing wahoo" },
      ],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 3,
      name: "Henry",
      lastName: "Jim",
      medication: [{ name: "C", dosage: "dosageC" }],
      careTeam: [{ id: "NurseCId", name: "NurseC" }],
      flowSheet: [],
      nurseNotes: [
        <Note date={"2023-02-09"} note="Henry is pretty sick dude" />,
        <Note
          date={"2023-102-19"}
          note="Henry is still sick gave him some advil"
        />,
      ],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 4,
      name: "Sally",
      lastName: "Sang",
      medication: [{ name: "D", dosage: "dosageD" }],
      careTeam: [{ id: "NurseDId", name: "NurseD" }],
      flowSheet: [],
      nurseNotes: [
        <Note date={"2023-03-03"} note="Gave Sally some meds" />,
        <Note date={"2023-03-07"} note="Sally is going home today" />,
      ],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
    {
      id: 5,
      name: "Hector",
      lastName: "Lasee",
      medication: [{ name: "E", dosage: "dosageE" }],
      careTeam: [{ id: "NurseEId", name: "NurseE" }],
      flowSheet: [],
      nurseNotes: [
        <Note date={"2022-03-03"} note="Gave Hector some meds" />,
        <Note date={"2022-03-07"} note="Hector is sick" />,
      ],
      communityAppointments: [{ date: new Date(1995, 11, 17, 3, 24, 0) }],
    },
  ];

  return (
    <Page>
      <h1>Patients</h1>
      <div className={classes.patientListContainer}>
        {patientList.map((patient) => {
          return (
            <Link key={patient.id} to="/patient" state={{ patient: patient }}>
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
