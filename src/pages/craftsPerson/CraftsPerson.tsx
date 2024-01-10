import React from 'react';
import { useLoaderData } from "react-router-dom";
import './styles.css'

type TProps = {};

export const CraftsPerson: React.FC<TProps> = (): JSX.Element => {
  // @ts-ignore
  const craftsPerson = useLoaderData();

  // @ts-ignore
  console.log(`[ <CraftsPerson> ] render() craftsPerson => `, craftsPerson)

  
  return (
    <div id="crafts_person_container">
      {/* Name */}
      {/* @ts-ignore */}
      <h2>{craftsPerson.fields.name}</h2>

      {/* Photo */}
      {/* @ts-ignore */}
      <img src={craftsPerson.fields.profilePhoto.fields.file.url} alt={`${craftsPerson.fields.name}`} />

      {/* Bio */}
      {/* @ts-ignore */}
      {craftsPerson.fields.bio.content.map((c: any, idx: number) => {
        return c.content.map((paragraph: any) => (
          <p key={idx}>{paragraph.value}</p>
        ))
      })}
    </div>
  )
}