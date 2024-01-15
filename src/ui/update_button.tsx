"use client"
import { useSession } from "next-auth/react"

export default function UpdateButton({newName} : {newName: String}) {
    const { data: session, update } = useSession()
    return (
        <button onClick={() => {
            update({...session!.user, name: newName});
          }}>
            Client Component Update
          </button>
    )
}