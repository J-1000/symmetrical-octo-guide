import React from "react";
import { useRouter } from "next/router";

import NavBar from "../../component/NavBar/NavBar";
import AddForm from "../../component/AddForm/AddForm";

export default function Create() {
  const router = useRouter();
  const { push } = router;
  /* const places = useSWR("pages/api/places/index.js"); */
  async function addPlace(place) {
    const response = await fetch("/api/places", {
      method: "POST",
      body: JSON.stringify(place),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      /*  await response.json(); */
      /*  places.mutate(); */

      push("/");
    } else {
      console.error(response.status);
    }
  }
  return (
    <>
      <NavBar />
      <AddForm onSubmit={addPlace} />
    </>
  );
}
