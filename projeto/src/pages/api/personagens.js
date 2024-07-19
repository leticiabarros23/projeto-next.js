import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  console.log("Aboutm API hit");
  res.status(200).json({ message: 'Data for About page'});
};