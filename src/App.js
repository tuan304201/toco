import { Fragment, useEffect } from 'react';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { publicRoutes } from './routes/index';
import Loading from './components/Loading/Loading';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <Loading />
            ) : (
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const NullLayout = route.layout === null ? Fragment : Layout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <NullLayout>
                                        <Page />
                                    </NullLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            )}
        </div>
    );
}

export default App;
