export type Record = {
    id: string,
    title: string,
    artist: string
};

export const items = (data:{records:Record[]} | null): Record[] => {
    return <Record[]>itemArray(data);
};

/* Todo: Figure out how to generisize the 'records' part. */
const itemArray = <T>(data:{records:T} | null) => {
    console.info('testing');
    return data ? data['records']  : [];
};

