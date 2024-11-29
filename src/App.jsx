import React from 'react';

function dateDiffInYears(dateold, datenew) {
  var mnew = datenew.getMonth();
  var mold = dateold.getMonth();
  var diff = datenew.getFullYear() - dateold.getFullYear();
  if (mold > mnew) diff--;
  else if (mold == mnew && dateold.getDate() > datenew.getDate())
    diff--;
  return diff;
}

const people = [
  {
    url: "https://paolo.sangregorio.dev",
    urlText: "paolo.sangregorio.dev",
    image: "/images/paolo.png",
    name: "Paolo Sangregorio",
    role: "Software Engineer III at Google",
    birthday: new Date(1989, 5, 8),
    location: "Dublin, Republic of Ireland"
  },
  {
    url: "https://fabio.sangregorio.dev",
    urlText: "fabio.sangregorio.dev",
    image: "/images/fabio.png",
    name: "Fabio Sangregorio",
    role: "Android Engineer at Bending Spoons",
    birthday: new Date(1997, 9, 14),
    location: "Milan, Italy"
  }
];

function App() {
  return (
    <main className="page-main">
      <header><h1 className="header">Which Sangregorio are you looking for?</h1></header>

      <div className="cards-container">
        {people.map(person => (
          <article key={person.name} className="card">
            <div className="overlay">
              <a className="link-text" href={person.url}>{person.urlText}</a>
              <a className="link-arrow" href={person.url}>
                <img src="/images/arrow.svg" alt="Go to website" />
              </a>
            </div>
            <div className="card-content">
              <div 
                className="profile-img" 
                style={{ backgroundImage: `url(${person.image})` }}
              />
              <div className="card-info">
                <header>
                  <h2 className="person-name">{person.name}</h2>
                  <div className="person-role">{person.role}</div>
                </header>
                <div className="person-info">
                  Age {dateDiffInYears(person.birthday, new Date())}
                  <span className="separator">-</span>
                  {person.location}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="footer">(yeah, I know, we're both software engineers...)</footer>
    </main>
  );
}

export default App; 