import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../components";
import { getHerosByName } from "../helpers";
export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);
    const heroes = getHerosByName(q);

    const showSearch = q.length === 0;
    const showError = q.length !== 0 && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });
    const onSearchSumbit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };
    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSumbit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2 ">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {
                        (q === "") 
                        ? <div className="alert alert-primary">Search a hero</div>
                        : (heroes.length === 0)
                        ? <div className="alert alert-danger">There is no a hero with {q}</div>
                        : null
                    } */}
                    <div
                        className="alert alert-primary"
                        style={{ display: showSearch ? "block" : "none" }}
                    >
                        Search a hero
                    </div>
                    <div
                        className="alert alert-danger"
                        style={{ display: showError ? "block" : "none" }}
                    >
                        There is no a hero with {q}
                    </div>
                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};
