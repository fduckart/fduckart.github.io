const SongsTable = ({songs}) => {
    return (
        <table className='table lead'>
            <tbody>
                {songs.map(s => (
                    <tr key={s.id}>
                        <td>{s.title}</td><td>{s.artist}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SongsTable;
