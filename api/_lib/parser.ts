import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

export function parseRequest(req: IncomingMessage) {
  const { pathname, query } = parse(req.url || "/", true);
  const { username, title, optionsLength } = query || {};

  if (Array.isArray(username) || !username) throw new Error("username is required");
  if (Array.isArray(title) || !title) throw new Error("title is required");
  if (Array.isArray(optionsLength) || !optionsLength) throw new Error("optionsLength is required");

  const arr = (pathname || "/").slice(1).split(".");
  let extension = arr.pop() as string;

  const parsedRequest: ParsedRequest = {
    fileType: extension === "jpeg" ? extension : "png",
    title: decodeURIComponent(title),
    username: decodeURIComponent(username),
    optionsLength: +decodeURIComponent(optionsLength),
  };
  return parsedRequest;
}
