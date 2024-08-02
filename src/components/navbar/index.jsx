import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";


function Navbar() {

    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  return (
    <nav className="header">
      <h2 className="logo">
        <NavLink
            to={"/"}
            className=""
        >
            FoodRecipe
        </NavLink></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="input bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg"
        />
        </form>
        <ul className="links">
          <li className="link-item">
            <NavLink
              to={"/"}
              className="link"
            >
              Home
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              to={"/favorites"}
              className="link"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      
    </nav>
  );
}

export default Navbar;
