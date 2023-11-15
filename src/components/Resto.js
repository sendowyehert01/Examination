import './Restaurant.css';

function Resto({ myKeys, neew }) {
  return (
    <div className="MainContainer">
        { myKeys.map((name) => {
                const filtered = neew.filter((num) => { return num.state === name});
                return (
                    <div>
                        <ul>
                        <li>
                            <h1 className="Title"> { name } </h1>
                        </li>
                            { filtered.map((states) => {
                                return <li className="Child"> {states.restaurant_name} </li>
                            }) }
                        </ul>
                    </div>
                );
        })}
    </div>
)
}

export default Resto;