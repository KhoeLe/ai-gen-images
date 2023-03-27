export async function GET(request: Request) {
    const response = await fetch(
        "https://uy6lfryirn3xwu3vhuagdummce0ayaxe.lambda-url.ap-southeast-1.on.aws"
    );

    const blob = await response.blob();

    const textData = await blob.text();

    const data = JSON.parse(textData);

    console.log("Fetching images from AWS Lambda")

    return new Response(JSON.stringify(data), {
        status: 200,
    });
}
