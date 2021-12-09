import React, { useContext } from "react";
import "./UserCard.css";
import Footer from "./Footer/Footer";
import { viewContext } from "../../context/Contexts";
import { ViewCon } from "../../type.d";

const UserCard = () => {
  const {view, usersData} = useContext(viewContext) as ViewCon
  const {
    name: { first, last },
    city,
    country,
    employer,
    title,
    favoriteMovies,
  } = usersData[view-1];
  return (
    <>
      <section className="usercard">
        <h1 className="currView">
          {view}/{usersData.length}
        </h1>
        <h1 className="name">{`${first} ${last}`}</h1>
        <p>
          <strong>From:</strong> {city}, {country}
        </p>
        <p>
          <strong>Job title:</strong> {title}
        </p>
        <p>
          <strong>Employer:</strong> {employer}
        </p>
          <p className="movies"><strong>Favorite Movies:</strong></p>
        <ol>
          {favoriteMovies.map((movie,i) => (
            <li key={i}>{movie}</li>
          ))}
        </ol>
        <Footer />
      </section>
    </>
  );
};

export default UserCard;
