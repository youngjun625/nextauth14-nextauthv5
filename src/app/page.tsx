import { signOut } from "../auth"

export default async function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Unavailable without auth</h2>
      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button>
             Log Out
          </button>
        </form>
    </div>
  )
}