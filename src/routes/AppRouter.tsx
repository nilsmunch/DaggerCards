import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CardPage from '../pages/CardPage';
import type { Card } from '../types/card';
import DramaticReveal from "../pages/DramaticReveal.tsx";

interface AppRouterProps {
    cards: Card[];
    setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

const AppRouter: React.FC<AppRouterProps> = ({ cards, setCards }) => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home cards={cards} setCards={setCards} />} />
                <Route path="/pack/:packId" element={<Home cards={cards} setCards={setCards} />} />
                <Route path="/card/:cardId" element={<CardPage cards={cards} />} />
                <Route path="/pack/:packId/reveal" element={<DramaticReveal />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
