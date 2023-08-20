import axios from "../../../../node_modules/axios/index";

export async function GET(req: Request) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLlKv8eAdUcmlwMupc7dY-SRDCe6WUC0Lh&part=snippet&key=${process.env.YOUTUBE_API_KEY}&maxResults=2`;
    const headers = {
        "Access-Control-Allow-Origin": "*",

    };
    // "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&part=snippet&maxResults=${maxResults}&key=${apiKey}`";
    // const url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6x5Q-Sj_BlaWrtjQZqOuzL6IcI1uRK9_&part=snippet&key=AIzaSyA-P6dREq2OHxDVZDKfvPcz8V34cSAaJVg&&maxResults=10`;
    const response = await axios.get(url, { headers });
    // const response = await axios.get(url, { headers });

    if (response.status === 200) {
        return new Response(JSON.stringify(response.data));
    }

    return new Response(JSON.stringify({ message: 'Something went wrong' }));
}