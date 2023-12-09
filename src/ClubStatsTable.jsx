import * as React from 'react'

const ClubStatsTable = (props) => {

	const [teams, setTeams] = React.useState([['Panthers', 'Tigers'],
		['Bunnies', 'Aardvarks'], ['Frogs', 'Toads'], ['Ants', 'Bugs'],
		['Wildcats', 'Jaguars'], ['Bears', 'Pandas']])


	const randomInt = (min, max) => {
		// Random number between 1 and 7
		const _min = Math.ceil(min)
		const _max = Math.floor(max)

		return Math.floor(Math.random() * (_max - _min) + _min)
	}

	const teamScores = () => {
		const score1 = randomInt(1, 7)
		const score2 = randomInt(1, 7)

		return score1 + ' - ' + score2
	}

  return (
    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 mt-5">
      <a name="statistics"></a>
      <h1>FutureSports Team Statistics</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Team 1</th>
            <th scope="col">Team 2</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
			{teams.map((team, index) => {
				return (
					<tr key={index}>
						<td>{ team[0] }</td>
						<td>{ team[1] }</td>
						<td>{ teamScores() }</td>
					</tr>
				)
			})}
        </tbody>
      </table>
    </div>
  )
}

export default ClubStatsTable
