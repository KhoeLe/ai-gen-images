import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const res = await request.json();
  const prompt = res.prompt;

  console.log(prompt)

  const response = await fetch("https://4pp4plrgk734cpdoccah55kowi0clufl.lambda-url.ap-southeast-1.on.aws",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ prompt }),
  })

  const textData = await response.text();

  console.log(textData)

  return NextResponse.json(textData)
}
