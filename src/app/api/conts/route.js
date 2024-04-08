export async function POST(req) {
    console.log(req);
     const res = await req.json()
     return Response.json({res})
}