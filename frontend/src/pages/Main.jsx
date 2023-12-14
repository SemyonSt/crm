import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DealBoard from './DealBoard'
import Error from './Error';


const Main = () => {

    return (
        <section>
            <Routes>
                <Route path='/' element={<DealBoard />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </section>
    );

}

export default Main;