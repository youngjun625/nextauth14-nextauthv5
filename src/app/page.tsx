import { auth, signOut, update } from "@/auth"
import UpdateButton from "@/ui/update_button";

export default async function Home() {
  console.log('Server Side Rendering')
  const session = await auth() // calling session
  const user = session!.user;
  console.log(session); // console log to read session
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
          <br /> 
          <UpdateButton newName={'Server-Man'} />
        </form>
      <br />
      <form
          action={async () => {
            'use server';
            await update({...user, name: 'Serverserver-man'});
          }}
        >
        <button>
          Server Side Update
        </button>
      </form>
    </div>
  )
}