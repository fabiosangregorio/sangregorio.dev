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
    birthYear: 1989,
    birthMonth: 5,
    birthDay: 8,
    location: "Dublin, Ireland"
  },
  {
    url: "https://fabio.sangregorio.dev",
    urlText: "fabio.sangregorio.dev",
    image: "/images/fabio.png",
    name: "Fabio Sangregorio",
    role: "Android Engineer at Bending Spoons",
    birthYear: 1997,
    birthMonth: 9,
    birthDay: 14,
    location: "Milan, Italy"
  }
];

export async function getStaticProps() {
  const now = new Date();
  
  // Calculate ages at build time
  const peopleWithAge = people.map(person => {
    const birthday = new Date(person.birthYear, person.birthMonth, person.birthDay);
    return {
      ...person,
      age: dateDiffInYears(birthday, now)
    };
  });

  return {
    props: {
      people: peopleWithAge
    }
  };
}

export default function Home({ people }) {
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
                  Age {person.age}
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