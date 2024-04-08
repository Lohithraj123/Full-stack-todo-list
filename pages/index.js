import MeetupList from '@/components/todo/TodoList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Todo Page</title>
        <meta name="description" content="A new Todo page app" />
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
