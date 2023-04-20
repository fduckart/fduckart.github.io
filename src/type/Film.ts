export type Film = {
    id: string,
    title: string,
    director: string
};

export const items = (data:{films:Film[]} | null): Film[] => {
    return data ? data['films']  : [];
};
