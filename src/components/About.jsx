import React from 'react';
import '../css2/About.css';

class About extends React.Component {
  render() {
    return (
        <div className="backgroundAbout">
          <div id="about">
            <h1> About me <span className="line-divider2" /></h1>
          Fico tão cansada às vezes, e digo para mim mesma que está errado, que não é assim, que não é este o tempo, que não é este o lugar, que não é esta a vida. 
          (…) então eu não sentia nada, podia fazer as coisas mais audaciosas sem sentir nada, bastava estar atenta como estes gerânios, você acha que um gerânio sente alguma coisa? Quero dizer, um gerânio está sempre tão ocupado em ser um gerânio e deve ter tanta certeza de ser um gerânio que não lhe sobra tempo para nenhuma outra dúvida…
          </div>
          <div className="cardimgs">
          <div className="mb-img img-2" />
          <div className="mb-img img-4" />
          <div className="mb-img img-5" />
          <div className="mb-img img-7" />
          <div className="tape" />
          <div className="tape-2" />
          </div>
          </div>
    );
  }
}

export default About;