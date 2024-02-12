import axios from 'axios';

export default async (): Promise<{props:Record<string, never>}> => {

    const getResp =  await axios.get(`http://localhost:3000/api/hello`);

    console.log(getResp.data);

    const postResp = await axios.post(`http://localhost:3000/api/hello`, {foo: `bar`});

    console.log(postResp.data)

    return {props: {}}
}