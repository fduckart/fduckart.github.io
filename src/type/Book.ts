export type Book = {
    id: string,
    title: string,
    author: string
};

export const items = (data:{books:Book[]} | null): Book[] => {
    return data ? data['books']  : [];
};
