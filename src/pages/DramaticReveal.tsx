import React, { useEffect, useState } from "react";
import type { Card } from "../types/card";
import {useParams} from "react-router-dom";
import "./dramaticreveal.css"
import '../components/CardGrid.css';

function getRandomCards(cards: Card[], count: number): Card[] {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, cards.length));
}

const DramaticReveal: React.FC = () => {
    const { packId } = useParams<{ packId: string }>();
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        if (!packId) return;

        const cached = sessionStorage.getItem(`cards_${packId}`);
        if (cached) {
            setCards(JSON.parse(cached));
        }
    }, [packId]);
    
    const [selected, setSelected] = useState<Card[]>([]);
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (cards.length === 0) return;
        
        const eligibleCards = cards.filter((card) => card.domain !== "Classes" && card.domain !== "Community");

        const picks = getRandomCards(eligibleCards, 3);
        setSelected(picks);
        setVisibleCount(0);

        // Sequential reveal
        picks.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, 1000 * (index + 1));
        });
    }, [cards]);

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-5 display-4">Your Fate Is Revealed</h1>

            <div className="card-grid dramatic-grid row justify-content-center">
                {selected.map((card, index) => (
                    <div
                        key={card.id}
                        className={`col-md-3 one-third card-item mx-3 transition-card ${
                            index < visibleCount ? "show-card" : "hide-card"
                        }`}
                    >
                        <div className="card shadow-lg">
                            <img
                                src={card.thumbnail}
                                className="card-img-top"
                                alt={card.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DramaticReveal;
