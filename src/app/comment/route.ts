import { comment } from "postcss";
import { comments } from "./data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filterComment = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filterComment);
}

export async function POST(req: Request) {
  const comment = await req.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
  });
}

// export async function POST(req: Request) {
//   const body = await req.json();

//   const newComment = {
//     id: comments.length + 1,
//     text: body.text,
//   };

//   comments.push(newComment);
//   return new Response(JSON.stringify(newComment), {
//     status: 201,
//     headers: { "Content-Type": "application/json" },
//   });
// }
