import React from "react";

export default function CartDetail({
  name,
  address,
  latitude,
  longitude,
  favorite,
  description,
  grill,
  beatch,
  camping,
  shore,
  boat,
}) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h4>address: {address}</h4>
      <p>latitude: {latitude}</p>
      <p>longitude: {longitude}</p>
      <p>favorite: {favorite}</p>
      <p>{description}</p>
      <p>grill: {grill}</p>
      <p>beatch: {beatch}</p>
      <p>camping: {camping}</p>
      <p>shore: {shore}</p>
      <p>boat: {boat}</p>
    </div>
  );
}
