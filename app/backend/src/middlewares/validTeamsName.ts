import { RequestHandler } from 'express';

const validTeamsName: RequestHandler = (req, res, next) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    res.status(422).json({ message: 'It is not possible to create a match with two equal teams' });
  }
  next();
};

export default validTeamsName;
