import MeetupList from '@/components/todo/TodoList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.YUI2W_3AYOxsG_STV-PJpAHaFj&pid=Api&P=0&h=180',
    address: 'Some Address 1',
    description: 'THis is the first meet up',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.YUI2W_3AYOxsG_STV-PJpAHaFj&pid=Api&P=0&h=180',
    address: 'Some Address 2',
    description: 'THis is the second meet up',
  },
];

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Meet Up Page</title>
        <meta name="description" content="A new meetup page app" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://mlohithraj5:nJWeEdXDix5J4O96@cluster0.vkj3gpn.mongodb.net/title?retryWrites=true&w=majority&appName=Cluster0',
  );
  const db = client.db();

  const meetupsCollection = db.collection('todo');

  const meetups =  await meetupsCollection.find().toArray();

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title || 'Untitled Meetup',
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
