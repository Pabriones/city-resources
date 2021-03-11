import React from 'react';

import '../../src/css/SearchDirectoryPage.css';
import Footer from './Footer';


let filterArray = [
    { filterName: 'Clothing Assistance' },
    { filterName: 'Day Centers' },
    { filterName: 'Dental and Vision Services' },
    { filterName: 'Drug and Alcohol Services' },
    { filterName: 'Emergency and Crisis' },
    { filterName: 'Employment and Training Services' },
    { filterName: 'Encampments' },
    { filterName: 'Family and Maternity Services' },
    { filterName: 'Financial Assistance' },
    { filterName: 'General Health Services' },
    { filterName: 'HIV/AIDS Services' },
    { filterName: 'Housing Services' },
    { filterName: 'Hygiene Services' },
    { filterName: 'Identification Services' },
    { filterName: 'Immigrant and Refugee Services' },
    { filterName: 'LGBTQIA + Services' },
    { filterName: 'Legal Services' },
    { filterName: 'Mail Services' },
    { filterName: 'Mental Health Setvices' },
    { filterName: 'Native and Indegious Services' },
    { filterName: 'Pets and Service Animal Services' },
    { filterName: 'Problem Gambling Services' },
    { filterName: 'Senior Services' },
    { filterName: 'Services for People of Color' },
    { filterName: 'Shelter Services' },
    { filterName: 'Storage Services' },
    { filterName: 'Survivor Support Services' },
    { filterName: 'Transportation Services' },
    { filterName: 'Veteran Services' },
]

const SearchDirectoryPage = () => {
	return (
		<div className="app">
			<p style={{color: '#b8b2b2'}}>Search Directory</p>      
			{/* Row 1 */}
			<div className="row hero">

				{/* Col 1 */}
				<div className="col-6 p-main white">
					<div className="search">
					<input placeholder="What are you looking for?" type="text" />
					</div>
					<h2 className="mb-0">FILTER BY</h2>
					<div className="input-section">
						{filterArray.map((filter, i) => {
							return(
								<div className="input-group mt-2 mb-2">
									<input type="checkbox"/>
									<label>{filter.filterName}</label>
								</div>
							)                
						})}
					</div>                 
				</div>

				{/* Col 2 */}
				<div className="col-6 p-main bg-orange scroll">
            		<div className="section">

						<a href="#"><h1>Bread For Life</h1></a>
						<p>Phone: 206-628-3579</p>
						<p>Address: 97 S. Main Street Seattle, WA 98104</p>
						<p>Email: info@breadoflifemission.org</p>

						<p>Monday - Friday</p>
						<p>9:30 AM - 3:00 PM</p>

						<p>Bread of Life Mission helps people experiencing homeless in the Seattle area. Bread of Life Mission is a<br />
						non-denominational, Christian, social services organization, which provides critically needed goods and<br />
						services to the homeless, poor, and needy of Washington State without regard to race, color, sexual<br />
						orientation, creed, national origin, or religion.
						</p>
            
            		</div>

					<div className="section">

						<a href="#"><h1>St . Martin de Porres</h1></a>
						<p>Phone: (206) 323-6341</p>
						<p>Address: 1561 Alaskan Way South Seattle, WA 98134</p>
						<p>Email: info@breadoflifemission.org</p>

						<p>St. Martin de Porres provides safe and dignified night shelter for homeless men age 50 and older.<br />
						The shelter opened in October 1984 in response to the growing need for an emergency shelter for this<br />
						special population of elderly men who are vulnerable to the weather, street predators, and illness. 
						</p>

						<p>
							We currently operate our full capacity of 212 men a night. The shelter is open 365 nights a year from 6:30<br />
							p.m to 7:30 a.m and during the day of medical convalescent care. During the winter months, we have arrangements<br />
							with eight local churches to provide space for an additional 34 men a night.
						</p>
					
					</div>

					<div className="section">

						<a href="#"><h1>St . Martin de Porres</h1></a>
						<p>Phone: (206) 323-6341</p>
						<p>Address: 1561 Alaskan Way South Seattle, WA 98134</p>
						<p>Email: info@breadoflifemission.org</p>

						<p>St. Martin de Porres provides safe and dignified night shelter for homeless men age 50 and older.<br />
						The shelter opened in October 1984 in response to the growing need for an emergency shelter for this<br />
						special population of elderly men who are vulnerable to the weather, street predators, and illness. 
						</p>

						<p>
							We currently operate our full capacity of 212 men a night. The shelter is open 365 nights a year from 6:30<br />
							p.m to 7:30 a.m and during the day of medical convalescent care. During the winter months, we have arrangements<br />
							with eight local churches to provide space for an additional 34 men a night.
						</p>
					
					</div>

					<div className="section">

						<a href="#"><h1>St . Martin de Porres</h1></a>
						<p>Phone: (206) 323-6341</p>
						<p>Address: 1561 Alaskan Way South Seattle, WA 98134</p>
						<p>Email: info@breadoflifemission.org</p>

						<p>St. Martin de Porres provides safe and dignified night shelter for homeless men age 50 and older.<br />
						The shelter opened in October 1984 in response to the growing need for an emergency shelter for this<br />
						special population of elderly men who are vulnerable to the weather, street predators, and illness. 
						</p>

						<p>
							We currently operate our full capacity of 212 men a night. The shelter is open 365 nights a year from 6:30<br />
							p.m to 7:30 a.m and during the day of medical convalescent care. During the winter months, we have arrangements<br />
							with eight local churches to provide space for an additional 34 men a night.
						</p>
					
					</div>

				<div style={{textAlign: 'end'}}>
					<button className="print-btn">PRINT PAGE</button>
				</div>
        	</div>

		</div>

		{/* Row 2 */}
		<Footer />
	</div>
	);
};

export default SearchDirectoryPage;
