// /api/new-meetup
import { MongoClient } from 'mongodb';
import React from 'react';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://mlohithraj5:nJWeEdXDix5J4O96@cluster0.vkj3gpn.mongodb.net/title?retryWrites=true&w=majority&appName=Cluster0',
    );
    const db = client.db();

    const meetupsCollection = db.collection('todo');
    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Succesfully added' });
  }
};

export default handler;
