// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import { API_SERVER, Method } from "@/configs";
import Cookies from "cookies";

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== Method.POST)
    return res.status(404).json({ message: "Not found!" });

  const cookies = new Cookies(req, res);

  cookies.set("access_token");

  res.status(200).json({ message: "Logout successfully!" });
}
