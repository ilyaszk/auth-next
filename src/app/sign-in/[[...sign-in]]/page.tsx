import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className='grid grid-cols-2 place-items-center'>
      <div className='flex h-full w-full items-center justify-center'>
        <SignIn />
      </div>
      <div className='flex h-full w-full flex-col items-center justify-center gap-8 bg-slate-500 lg:gap-16'>
        <h2 className='text-center font-sans text-4xl font-black text-gray-50'>
          <span className='lg:text-6xl'> Salut ! </span> <br />
        </h2>
        <p className='max-w-2xl px-6 text-center text-lg font-semibold text-gray-200'>
          Nous sommes heureux de vous aider à créer un compte. Nous vous
          souhaitons une bonne journée. Si vous avez déjà un compte, vous pouvez
          vous connecter en cliquant sur le bouton ci-dessous.
        </p>
      </div>
    </main>
  );
}
