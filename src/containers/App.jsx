import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CorouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header/>
            <Search/>
            {initialState.mylist.length > 0 && 
                <Categories title='Mi lista'>
                    <Carousel>
                        <CorouselItem/>
                    </Carousel>
                </Categories>
            }

            <Categories title='Tendencias'>
                <Carousel>
                    {initialState.trends.map(item => 
                        <CorouselItem key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>

            <Categories title='Originales de Platzi'>
                <Carousel>
                    <CorouselItem/>
                </Carousel>
            </Categories>

            <Footer/>
        </div>
    );
}
export default App;