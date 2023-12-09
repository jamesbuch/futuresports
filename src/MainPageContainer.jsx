import * as React from 'react'
import MainPageTopRow from './MainPageTopRow'
import ClubNews from './ClubNews'
import PageAccordian from './PageAccordian'
import ContactForm from './ContactForm'
import ClubStatsTable from './ClubStatsTable'
import WeatherWidget from './WeatherWidget'

const MainPageContainer = (props) => {
	
  return (
    <main>
		<MainPageTopRow />
      <div className="container">
        <div className="row">
				<ContactForm />
				<ClubStatsTable />
        </div>
		</div>
		<div className="container">
        <div className="row">
				<WeatherWidget />
        </div>
		</div>
		<ClubNews />
      <PageAccordian />
    </main>
  )
}

export default MainPageContainer
