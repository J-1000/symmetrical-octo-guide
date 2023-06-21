import { Inter } from "next/font/google";
/* import styles from "@/styles/Home.module.css"; */
import { useSession, signIn, signOut } from "next-auth/react";
import useSWR from "swr";

import NavBar from "../../component/NavBar/NavBar";
import CartDetail from "component/CartDetail/CartDetail";
import MyMap from "../../component/MyMap/MyMap";

const inter = Inter({ subsets: ["latin"] });

export default function Component() {
  const { data: session } = useSession();
  const { data } = useSWR("/api/places", { fallbackData: [] });
  console.log("data:", data);

  console.log(session);
  if (session) {
    return (
      <>
        <NavBar onClick={() => signOut()} />
        <div className="d-flex flex-column align-items-center">
          <div>
            <MyMap />
          </div>
          <div>
            <CartDetail />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="d-flex flex-column card mx-auto mt-5 p-2"
        style={{ width: "30%" }}
      >
        <h4 className="text-center"> Not signed in </h4>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
}
