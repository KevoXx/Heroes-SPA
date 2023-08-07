import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
    const heroesFiltered = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {heroesFiltered.map((hero) => (
                <HeroCard key={hero.id} {...hero}/>
            ))}
        </div>
    );
};
