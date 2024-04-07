// /api/new-meetup
import { MongoClient } from 'mongodb';
import React from 'react';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(
      'mongodb+srv://mlohithraj5:nJWeEdXDix5J4O96@cluster0.vkj3gpn.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0',
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find().toArray();

    console.log(result);

    client.close();

    res.status(201).json({ message: { result } });
  }
};

export default handler;
