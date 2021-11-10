import type { NextApiRequest, NextApiResponse } from 'next';
import analyze, { AnalyzeProps } from '../../utils/analyze';

export default function handler(req: NextApiRequest, res: NextApiResponse<AnalyzeProps>) {
  const text = req.query.text.toString();
  const analyzed = analyze(text);

  res.status(200).json(analyzed);
}
