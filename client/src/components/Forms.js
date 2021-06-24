import React, { useEffect, useState, useRef } from 'react';
import '../../src/css/SearchDirectoryPage.css';
import Footer from './Footer';
import Axios from 'axios';
import TopNav2 from './TopNav2';

let filterArray = [ { filterName: 'Parking' } ];

const Forms = () => {
	const [ state, setState ] = useState([]);
	const [ resource, setResource ] = useState([]);

	const getAllData = () => {
		Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		Axios.post('http://localhost:8080/api/getforms', {
			category: []
		}).then((res) => {
			if (res.data.success) {
				let temp = [];
				let filteredArr = res.data.data.reduce((acc, current) => {
					const x = acc.find((item) => item.category === current.category);
					if (!x) {
						return acc.concat([ current ]);
					} else {
						return acc;
					}
				}, []);
				let sortArray = filteredArr.sort(dynamicSort('category'));
				sortArray.map((each) => {
					temp.push({ filterName: each.category, checked: false });
				});
				setState(temp);
			}
		});
	};
	function dynamicSort(property) {
		let sortOrder = 1;
		if (property[0] === '-') {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function(a, b) {
			const result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
			return result * sortOrder;
		};
	}
	const handleRequest = (data) => {
		Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		Axios.post('http://localhost:8080/api/getforms', {
			category: data
		}).then((res) => {
			if (res.data.success) {
				let filteredArr = res.data.data.reduce((acc, current) => {
					const x = acc.find((item) => item.category === current.category);
					if (!x) {
						return acc.concat([ current ]);
					} else {
						return acc;
					}
				}, []);
				let sortArray = res.data.data.sort(dynamicSort('category'));
				setResource(sortArray);
			}
		});
	};
	useEffect(() => {
		getAllData();
		handleRequest([]);
	}, []);

	const handleCheckBox = (e, i) => {
		let toFetch = [];
		{
			state.map((filter, index) => {
				if (index === i) {
					filter.checked = !filter.checked;
				}
				if (filter.checked === true) {
					toFetch.push(filter.filterName);
				}
			});
		}
		setState([ ...state ]);
		handleRequest(toFetch);
	};
	const handleSearch = (e) => {
		if (e.target.value !== '') {
			const filteredItems = state.filter((item) => {
				return item.filterName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
			});
			setState(filteredItems);
		} else {
			getAllData();
		}
	};
	let sortArray;
	return (
		<body>
			<TopNav2 />
			<div className="sd-container">
				{/* Row 1 */}
				<div className="row hero">
					{/* Col 1 */}
					<div className="col-6 p main sd-filterContainer">
						<div className="sd-searchBar">
							<input
								placeholder="What are you looking for?"
								type="text"
								onChange={(e) => handleSearch(e)}
							/>
						</div>
						<h2 className="mb-0">FILTER BY SERVICES:</h2>
						<div style={{ 'column-count': 1 }}>
							{state.map((filter, i) => {
								let temp = [];
								temp.push(
									<div className="sd-services">
										<input
											type="checkbox"
											className="checkbox"
											onChange={(e) => handleCheckBox(e, i)}
											checked={filter.checked}
										/>
										<label> {filter.filterName}</label>
									</div>
								);
								return temp;
							})}
						</div>
					</div>

					{/* Col 2 */}
					<div className="col-6 p-main sd-results-container scroll">
						<div className="sd-search-results">
							{resource.map((data) => {
								let toRender = [];
								toRender.push(
									<div className="sd-search-results">
										<a href={data.link} className="sd-link" target="_blank">
											<h1>{data.organisation_name}</h1>
										</a>
										<p>{data.form_name}</p>
										<a href={data.link} className="sd-link" target="_blank">
											<p>{data.link}</p>
										</a>
									</div>
								);
								return toRender;
							})}
						</div>
					</div>
				</div>
				<div>
					{' '}
					<Footer />
				</div>
			</div>
		</body>
	);
};

export default Forms;
