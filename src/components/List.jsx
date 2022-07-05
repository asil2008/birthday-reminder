import React from "react";

const List = (props) => {
  const { people } = props;
  console.log("props", props);

  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} class="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
