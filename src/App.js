import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';
import Overview from './components/Overview'
import CollectionArea from './components/CollectionArea';
import Order from './components/Order';
import Statistics from './components/Statistics';
import QuickSearch from './components/QuickSearch';
import PopularLocations from './components/PopularLocations';
import FooterList from './components/FooterList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections : {
        mainHead: 'Collections',
        subHead: 'Explore curated list of top restaurant, cafes, pubs in your city',
        items: [
          {
            imgLink: 'https://via.placeholder.com/180x180.png',
            cardTitle: 'Trending This Week',
            cardPara: 'Most popular restaurants in town this week'
          },
          {
            imgLink: 'https://via.placeholder.com/180x180.png',
            cardTitle: "Bengaluru's Finest",
            cardPara: 'The hunt for highest rated restaurants in your city'
          },
          {
            imgLink: 'https://via.placeholder.com/180x180.png',
            cardTitle: 'Newly Opened',
            cardPara: 'The best new places in town'
          },
          {
            imgLink: 'https://via.placeholder.com/180x180.png',
            cardTitle: 'October Fest',
            cardPara: 'Beer, food and cheer all around'
          },
        ]
      },
      statistics: [
        {
          numbers: 24,
          category: 'COUNTRIES'
        },
        {
          numbers: '1.2M',
          category: 'RESTAURANTS'
        },
        {
          numbers: '120M',
          category: 'FOODIES EVERY MONTH'
        },
        {
          numbers: '30M',
          category: 'PHOTOS'
        },
        {
          numbers: '10M',
          category: 'REVIEWS'
        },
        {
          numbers: '18M',
          category: 'BOOKMARKS'
        },
      ],
      quicksearch: [
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?output-format=webp',
          text: 'Delivery'
        },
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_13.png?output-format=webp',
          text: 'Pocket-Friendly Delivery'
        },
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?output-format=webp',
          text: 'Breakfast'
        },
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?output-format=webp',
          text: 'Lunch'
        },
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?output-format=webp',
          text: 'Dinner'
        },
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?output-format=webp',
          text: 'Drinks & Nightlife'
        },
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?output-format=webp',
          text: 'Cafes'
        },
        {
          imgSrc: 'https://b.zmtcdn.com/images/search_tokens/app_icons/special_14.png?output-format=webp',
          text: 'Buffet Places'
        },
      ],
      popularLocations : [ 'Indiranagar (665 places)',
      'Marathahalli (969 places)',
      'Whitefield (1208 places)',
      'Koramangala 5th Block (266 places)',
      'HSR (839 places)',
      'Jayanagar (475 places)',
      'JP Nagar (612 places)',
      'Sarjapur Road (477 places)',
      'Lavelle Road (59 places)',
      'Malleshwaram (318 places)',
      'BTM (941 places)',
      'MG Road (101 places)',
      'Koramangala 4th Block (142 places)',
      'Kalyan Nagar (297 places)',
      'Electronic City (994 places)',
      'Bannerghatta Road (617 places)',
      'Bellandur (505 places)',
      'Koramangala 7th Block (180 places)',
      'New BEL Road (414 places)',
      'Residency Road (93 places)',
      'Koramangala 6th Block (158 places)',
      'Church Street (63 places)',
      'Brigade Road (163 places)',
      'Old Airport Road (170 places)',
      'Banashankari (383 places)',
      'Basavanagudi (263 places)',
      'Rajajinagar (356 places)',
      'Brookefield (237 places)',
      'Kammanahalli (230 places)',
      'Frazer Town (254 places)'
      ],
      aboutUs : [
        'About Us',
        'Culture',
        'Blog',
        'Careers',
        'Contact'
      ],
      forFoodies : [
        'Code of Conduct',
        'Community',
        'Verified Users',
        'Bloggers Help',
        'Developers',
        'Mobile Apps'
      ],
      forRestaurantsOne : [ 'Add a Restaurant',
      'Claim your Listing',
      'Business App',
      'Business Owner Guidelines',
      'Business Blog',
      'Restaurant Widgets',
      'Products for Businesses' 
      ],
      forRestaurantsTwo : [ 'Advertise', 'Order', 'Book', 'Trace', 'Hyperpure' ],
      countriesOne : [ 'Australia', 'Brasil', 'Canada', 'Chile', 'Czech Republic' ],
      countriesTwo : [ 'India', 'Indonesia', 'Ireland', 'Italy', 'Lebanon' ],
      countriesThree : [ 'Malaysia', 'New Zealand', 'Philippines', 'Poland', 'Portugal' ],
      countriesFour : [ 'Qatar', 'Singapore', 'Slovakia', 'South Africa', 'Sri Lanka' ],
      countriesFive : [ 'Turkey', 'UAE', 'United Kingdom', 'United States' ]
    }
  }

  render() {
    return(
      <div>
        <Navbar />
        <Overview />
        <div className = "container mt-5">
          <div className = "row">
            <div className = "col-md-8">
              <CollectionArea details={this.state.collections} />
            </div>
            <div className = "col-md-4">
              <Order />
            </div>
          </div>

          <QuickSearch details={this.state.quicksearch}/>
          <PopularLocations details={this.state.popularLocations}/>

          <div className = "row mb-5 my-5">
            <Statistics 
              details={this.state.statistics}
            />
          </div>
        </div>

        <div style = {{backgroundColor: '#282c35'}} className = "text-white-50">
          <div className = "container">
            
            <hr></hr>
            <div className = "row">
              <div className = "col-md-3">
                <h5>About Komato</h5>
                <FooterList details={this.state.aboutUs}/>
              </div>

              <div className = "col-md-3">
                <h5>For Foodies</h5>
                <FooterList details={this.state.forFoodies}/>
              </div>

              <div className = "col-md-6">
                <h5>For Restaurants</h5>
                <div className = "row">
                  <div className = "col"> 
                    <FooterList details={this.state.forRestaurantsOne} />
                  </div>

                  <div className = "col">
                    <h5></h5>
                    <FooterList details={this.state.forRestaurantsTwo} />
                  </div>
                </div> 
              </div>

            </div>

            <div>
              <h5>COUNTRIES</h5>
              <div className = "row">
                <div className = "col">
                  <FooterList details={this.state.countriesOne} />
                </div>
                <div className = "col">
                  <FooterList details={this.state.countriesTwo} />
                </div>
                <div className = "col">
                  <FooterList details={this.state.countriesThree} />
                </div>
                <div className = "col">
                  <FooterList details={this.state.countriesFour} />
                </div>
                <div className = "col">
                  <FooterList details={this.state.countriesFive} />
                </div>
              </div>
            </div>

            <hr></hr>
            <p className = "text-secondary mb-0 text-center"><small>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. © 2019 - Komato Media Pvt Ltd. All rights reserved.</small></p>
          </div>
        </div>

      </div>
    )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
