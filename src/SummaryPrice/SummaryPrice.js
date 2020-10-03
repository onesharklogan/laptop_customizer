import React from 'react';
import ReactDOM from 'react-dom';

export default function SummaryPrice(props) {


    return (
        <ul>
            <li>Summary Price Total:12312</li>
        </ul>
    )
}

// import React from 'react'
// import USCurrencyFormat from '../USCurrencyFormat'

// function Summary({ selected }) {
// 	const summaryItems = Object.keys(selected).map((feature, idx) => {
// 		const featureHash = feature + '-' + idx
// 		const selectedOption = selected[feature]

// 		return (
// 			<div className="summary__option" key={featureHash}>
// 				<div className="summary__option__label">{feature} </div>
// 				<div className="summary__option__value">
// 					{selectedOption.name}
// 				</div>
// 				<div className="summary__option__cost">
// 					{USCurrencyFormat.format(selectedOption.cost)}
// 				</div>
// 			</div>
// 		)
// 	})
// 	return <>{summaryItems}</>
// }

// export default Summary