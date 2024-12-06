import Head from 'next/head';
import { model } from '../data/model.en';

function dateDiffInYears(dateold, datenew) {
  var mnew = datenew.getMonth();
  var mold = dateold.getMonth();
  var diff = datenew.getFullYear() - dateold.getFullYear();
  if (mold > mnew) diff--;
  else if (mold == mnew && dateold.getDate() > datenew.getDate())
    diff--;
  return diff;
}

export async function getStaticProps() {
  const now = new Date();
  
  // Calculate ages at build time
  const peopleWithAge = model.people.map(person => {
    const birthday = new Date(person.birthYear, person.birthMonth, person.birthDay);
    return {
      ...person,
      age: dateDiffInYears(birthday, now)
    };
  });

  return {
    props: {
      model: {
        ...model,
        people: peopleWithAge
      }
    }
  };
}

export default function Home({ model }) {
  return (
    <>
      <Head>
        <link rel="icon" href="data:," />
      </Head>
      <div className="page-main">
        <header><h1 className="header">{model.header}</h1></header>

        <div className="cards-container">
          {model.people.map(person => (
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

        <footer className="footer">{model.footer}</footer>
      </div>
    </>
  );
} 