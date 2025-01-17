import { currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  const user = await currentUser();
  let fullname = 'Guest';

  if (user) {
    const { firstName, lastName } = user;
    fullname = (firstName ? `${firstName} ` : '') + (lastName ? lastName : '');
    if (!fullname) fullname = 'User';
  }

  return (
    <main className='mx-auto max-w-6xl pt-8'>
      <h1 className='inline-flex gap-1 text-lg'>
        Welcome back,
        <span className='text-tertiary font-semibold'>{fullname}</span>
      </h1>
    </main>
  );
}
