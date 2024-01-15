"use client"

import { authenticate, googleAuthenticate } from "@/lib/actions"
import { useFormState } from "react-dom"

export default function Page() {
    const [errorMsg, dispatch] = useFormState(authenticate, undefined)
    const [errorMsgGoogle, dispatchGoogle] = useFormState(googleAuthenticate, undefined) //googleAuthenticate 관련 hook 추가
    return (
      <div>
        <h1>Log in Page</h1>
        <form className="flex flex-col" action={dispatch}>
            <input className="bg-blue-300 text-black" name="id"></input>
            <input className="bg-yellow-300 text-black" name="password" type="password"></input>
            <button>
                Log In
            </button>
            <p>{errorMsg}</p>
        </form>
        {/* Added google sign in button */}
        <br />
        <form className="flex flex-col" action={dispatchGoogle}>
            <button>
                Google Sign In
            </button>
            <p>{errorMsgGoogle}</p>
        </form>
        {/* Added google sign in button */}
      </div>
    )
  }