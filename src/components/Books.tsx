import BooksList from '@/components/BooksList';

export const Books = () => {
    return (
        <div>
            <h3>Favorite Books</h3>
            <p className='lead text-muted'>
                This odd mix of books make up my favorites.
            </p>
            <BooksList/>
        </div>
    );
};
