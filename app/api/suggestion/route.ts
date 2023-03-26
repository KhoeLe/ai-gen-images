
export async function GET(request: Request) {
    const response = await fetch(
      'https://lqd2b46un43lycs7xmrhntldoi0fsyhs.lambda-url.us-east-1.on.aws',
     {
        cache: 'no-store',
      }
    )

    const prompt = await response.json()

    return new Response(JSON.stringify(prompt), {
      status: 200,
  })

}

// const jsonDirectory = path.join(process.cwd(), "lib");

//     //Read the json data file data.json

//     const data = await fs.readFile(jsonDirectory + "/data.json", "utf8");

//     const parsedData = JSON.parse(data);

//     const prompts = parsedData.prompts;
//     const promptRandomIndex = Math.floor(Math.random() * prompts.length);
//     const prompt = prompts[promptRandomIndex].prompt;
