import { api } from '~/trpc/server';

export default async function Home() {
  const hello = await api.budget.hello({ text: 'from tRPC' });

  return <main>{hello ? hello.greeting : 'Loading tRPC query...'}</main>;
}
