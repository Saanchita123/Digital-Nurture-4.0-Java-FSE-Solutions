import React, { Component } from "react";
import { useParams } from "react-router-dom";


export function TrainerDetailWrapper({trainers}) {
  const { id } = useParams();
  return <TrainerDetail id={id} trainers={trainers} />;
}

export class TrainerDetail extends Component {
  render() {
     const { id, trainers } = this.props;
    const trainer = trainers.find(t => t.trainerId.toString() === id);
    if (!trainer) {
      return <div>Trainer not found</div>;
    }
    return (
      <div>
        <h2>Trainer Details</h2>
        <p>name: {trainer.name}</p>
        <p>Email: {trainer.email}</p>
        <p>technology: {trainer.technology}</p>
        <p>skills: {trainer.skills.join(", ")}</p>
      </div>
    );
  }
}
