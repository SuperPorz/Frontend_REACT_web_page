import DraggableImage from "./DraggableImage";

function BuildTable({ dataP }) {

    return (
        <>
        <section className="rowSection aaa">
            <div id="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataP && dataP.length > 0 ? (
                            dataP.map((person) => (
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.email}</td>
                                    <td>{person.first_name}</td>
                                    <td>{person.last_name}</td>
                                    <td>
                                        <DraggableImage
                                            src={person.avatar}
                                            alt={`${person.first_name} ${person.last_name}`}
                                            style={{ width: '200px', height: '200px', cursor: 'grab' }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center' }}>
                                    Nessun dato disponibile
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
        </>
    )
}

export default BuildTable;