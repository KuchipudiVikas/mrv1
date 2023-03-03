import { Component } from "react";
import './cardlist.styles.css';
class CardList extends Component {
    render() {
        const { monsterslist } = this.props;
        return (
            <div className="card-list">
                {
                    monsterslist.map((mons) => {
                        return (
                            <div key={mons.id} className="card-container">
                                <img
                                    alt={`monster: ${mons.name}`}
                                    src={`https://robohash.org/${mons.id}?set=set2&size=180x180`}

                                />
                                <h1>{mons.name}</h1>
                                <h2>{mons.email}</h2>

                            </div>


                        )
                    })
                }

            </div>
        )

    }

}

export default CardList;