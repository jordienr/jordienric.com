import { NextRequest, NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";

export default async function handler(req: NextRequest, res: NextResponse) {
  const { body } = req;
  const { url } = body;

  const { base64 } = getPlaiceholder(url);

  res.status(200).send(base64);
}
