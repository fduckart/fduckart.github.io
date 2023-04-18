export type Song = {
    id: string,
    title: string,
    artist: string
};

export const items = (data:{songs:Song[]} | null): Song[] => {
    return data ? data["songs"]  : [];
};
