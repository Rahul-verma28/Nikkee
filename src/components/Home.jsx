import React from 'react'
import Hero from './Hero'
import PopularProducts from "./PopularProducts";
import Servies from "./Servies";
import SpecialOffers from "./SpecialOffers";
import SuperQuality from "./SuperQuality";
import CustomerReviews from "./CustomerReviews";


const Home = () => {
    return (
        <>
            <Hero />
            <PopularProducts />
            <SuperQuality />
            <Servies />
            <SpecialOffers />
            <CustomerReviews />
        </>
    )
}

export default Home
