import React, { useState } from 'react';

function MigrationsPage(){

    // const [migrations, setMigrations] = useState([{migration:{title:"",type:""}}]);

    // const handleChange = (event) => {
    //     const migrations = { ...migrations, title: event.target.value };
    //     setMigrations({ migrations: migrations });
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(event.target.value);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Migrations</h2>
                <input
                    type="text"
                />
                <input type="submit" value="Save" />
            </form>
        </>
    );
}

export default MigrationsPage;