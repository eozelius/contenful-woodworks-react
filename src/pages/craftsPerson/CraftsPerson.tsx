import React from "react";
import { useLoaderData } from "react-router-dom";
import { TCraftsPerson } from "../../types/craftsperson";
import "./styles.css";

type TProps = {};

export const CraftsPerson: React.FC<TProps> = (): JSX.Element => {
  const craftsPerson = useLoaderData() as TCraftsPerson;

  return (
    <div id="crafts_person_container">
      {/* Name */}
      <h2>{craftsPerson.name}</h2>

      {/* Photo */}
      <img
        src={craftsPerson.profilePhoto.fields.file.url}
        alt={`${craftsPerson.name}`}
      />

      {/* Bio */}
      {craftsPerson.bio.content.map((c: any, idx: number) => {
        return c.content.map((paragraph: any) => (
          <p key={idx}>{paragraph.value}</p>
        ));
      })}
    </div>
  );
};
