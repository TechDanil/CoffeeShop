import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from '../../pages/home/home';
import Coffee from "../../pages/coffee/coffee";
import Goods from "../../pages/goods/goods";

import SolimoCoffee from '../../resources/img/goods/solimo-coffee-beans-2-kg.svg';
import PrestoCoffee from '../../resources/img/goods/presto-coffee-beans-1-kg.svg';
import AromisticoCoffee from '../../resources/img/goods/aromistico-coffee-1-kg.svg';
import Girl from '../../resources/img/coffee-page/girl.svg';
import CoffeeCup from '../../resources/img/goods/coffee-cup.svg';

class App extends Component{

    constructor(props) {
        super(props);

        this.data = [
            {
                id: 0,
                src: SolimoCoffee,
                name: 'Solimo Coffee Beans 2 kg',
                alt: 'Solimo Coffee Beans 2 kg',
                price: '10.73',
                isRecommended: true,
            },

            {
                id: 1,
                src: PrestoCoffee,
                name: 'Presto Coffee Beans 1 kg',
                alt: 'Presto Coffee Beans 1 kg',
                price: '15.99',
                isRecommended: true,
            },

            {
                id: 2,
                src: AromisticoCoffee,
                name: 'AROMISTICO Coffee 1 kg',
                alt: 'AROMISTICO Coffee 1 kg',
                price: '6.99',
                isRecommended: true,
            },
        ];

        this.imgData = [
            {
                backgroundImgs: [
                    {
                        src: require('../../resources/img/bg/second-main-bg.jpg'),
                    },

                    {
                        src: require('../../resources/img/bg/third-main-bg.jpg'),
                    },
                ],
            }
        ];

        this.contentData = [
            {
                title: 'About our beans',
                src: Girl,
                alt: 'girl',
                description: `Extremity sweetness difficult behaviour he of. On
                disposal of as landlord horrible.\n
                Afraid at highly months do things on at. Situation
                recommend objection do intention \n so questions
                As greatly removed calling pleased improve an.
                Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.`,
            },

            {
                title: 'About our goods',
                src: CoffeeCup,
                alt: 'coffee cup',
                description: `Extremity sweetness difficult behaviour he of. On
                disposal of as landlord horrible.\n
                Afraid at highly months do things on at. Situation
                recommend objection do intention \n so questions
                As greatly removed calling pleased improve an.
                Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.`,
            },
        ];

        this.state = {
            articles: [
                {
                    id: 0,
                    src: AromisticoCoffee,
                    name: 'Solimo Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },

                {
                    id: 1,
                    src: AromisticoCoffee,
                    name: 'Asolimo Coffee 2 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Kenya',
                    price: '6.99',
                },

                {
                    id: 2,
                    src: AromisticoCoffee,
                    name: 'Asolimo Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Columbia',
                    price: '6.99',
                },

                {
                    id: 3,
                    src: AromisticoCoffee,
                    name: 'Presto Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },

                {
                    id: 4,
                    src: AromisticoCoffee,
                    name: 'AROMISTICO Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },

                {
                    id: 5,
                    src: AromisticoCoffee,
                    name: 'AROMISTICO Coffee 1 kg',
                    alt: 'AROMISTICO Coffee 1 kg',
                    country: 'Brazil',
                    price: '6.99',
                },
            ],
            term: '',
            filter: 'all',
        };

        this.filterData = {
            'brazil': function (items) {
                return items.filter(item => item.country === 'Brazil');
            },

            'kenya': function (items) {
                return items.filter(item => item.country === 'Kenya');
            },

            'columbia': function (items) {
                return items.filter(item => item.country === 'Columbia');
            },

            'all': function (items) {
                return items;
            }
        }
    }


    searchItem = (items, term) => {
        if (!items.length)
            return items;

        return items.filter(item => item.name.startsWith(term.toUpperCase()));
    }

    onUpdateSearch = (term) => {
        this.setState({
           term,
        });
    }

    filterItems = (items, filter) => {
        return this.filterData[filter](items);
    }

    onFilterSelect = (filter) => {
        this.setState({
           filter,
        });
    }

    render() {
       const {articles, term, filter} = this.state;
       const visibleData = this.filterItems(this.searchItem(articles, term), filter);
       return (
           <BrowserRouter>
               {/*<Home data={this.data}/>*/}
               <Coffee data={visibleData}
                       onUpdateSearch={this.onUpdateSearch}
                       filter={filter}
                       onFilterSelect={this.onFilterSelect}
                       imgData={this.imgData}
                       contentData={this.contentData}/>
               {/*<Goods articles={articles} imgData={this.imgData} contentData={this.contentData}/>*/}
           </BrowserRouter>
       );
    }
}

export default App;