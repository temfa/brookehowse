import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Container from "../../components/styles/Container.styled";
import "./properties.css";
import Location from "../../assets/Group.png";
import Swimming from "../../assets/Group 431.png";
import Game from "../../assets/Group 432.png";
import Network from "../../assets/Vector(9).png";
// import ArrowLeft from "../../assets/Vector(10).png";
// import ArrowRight from "../../assets/Vector(11).png";
import Cinema from "../../assets/Vector(7).png";
import Camera from "../../assets/Vector(6).png";
import Power from "../../assets/Vector(8).png";
import House from "../../assets/HN 2 1.png";
import House1 from "../../assets/HN 3 1.png";
import House2 from "../../assets/HN 7 1.png";
import House3 from "../../assets/HN 4 1.png";
import PropertiesContainer from "../../components/styles/Propeties.styled";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";
import Loader from "../../components/loader/loader";

const Properties = () => {
  window.scrollTo(0, 0);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setIsLoaded(false);
      } else {
        setIsLoaded(false);
      }
    });
  });
  return (
    <>
      {isLoaded ? (
        <Loader />
      ) : (
        <div className="properties">
          <div className="properties-container">
            <Container>
              <Header color="white" />
              <div className="properties-header">
                <div className="properties-header-text">
                  <div className="location">
                    <img src={Location} alt="location" />
                    <p>Osoroko, Lagos</p>
                  </div>
                  <h2>Helen’s Nest</h2>
                  {/* <p>Brookehowse Real Estate Limited was established in 2011 and is based in Lagos State, Nigeria.</p> */}
                </div>
                <div className="properties-header-img">
                  <img src={House} alt="house" />
                </div>
              </div>
            </Container>
          </div>
          <PropertiesContainer>
            <div className="properties-text">
              <p>
                Helen’s Nest is conceived as a top-notch residence for premier staff of the several blue-chip companies that are setting up shop at the Free Trade Zone. Dangote
                Refinery and Petrochemical Plants, and the Idasho Deep Sea Port. All of these entities and associated businesses, are at various levels of operational readiness,
                and are scheduled to have commenced full operations before the completion of the project.
              </p>
              <p>
                The Free Trade Zone was conceived and has been executed with a major planning failure embedded into it, perhaps a function of its provenance, or a consequence of
                same. There is a failure to plan for the upsurge in housing demand, and the consequence is that, those that are working in the FT, and in the several companies
                springing up in the neighborhood, are compelled to live several miles away.
              </p>
              <p>
                The sheer size of the Dangote undertakings and the resultant staff accommodation challenges, should offer a panoramic view of the objective realities of the housing
                market at the project location. Construction workers are the primary focus of the Dangote project at the moment, and these are largely housed in the several slums
                that have sprung up within the immediate vicinity of the project. But where do the engineering staff and expatriates involved with the construction live at the
                moment?
              </p>
            </div>
            <div className="properties-img">
              <img src={House1} alt="House" />
            </div>
          </PropertiesContainer>
          <div className="properties-complex">
            <div className="complex-img">
              <img src={House3} alt="House" />
            </div>
            <div className="complex-text">
              <p>
                They are to be found as far afield as VGC, Manor Gardens, Fara Park, Lakowe Lakes, Beechwood Estates, and Amen Estate, which are the closest locations to any of the
                entities in the FTZ. I warrant that hitherto empty estates along the Lekki-Epe corridor, have become filled to capacity because of the incessant demand for housing
                stock in the corridor. The situation is tailor made for this project.
              </p>
              <p>
                Helen’s Nest project was birthed out of the realization of an acute shortage of suitable accommodation for the expatriate and senior Nigerian staff of the multiple
                companies that are either coming or are already in the Free Trade Zone and its environs. Helen’s Nest is conceived as a purpose built, niche targeting product. It
                comprises of 44 generously proportioned two bedroom serviced apartments (all rooms en-suite).
              </p>
            </div>
          </div>
          <PropertiesContainer>
            <div className="properties-text">
              <p>Helen's Nest is being offered off plan, for a limited period, on a 1st come first serve basis, subject to contract at the prices below:</p>
              <p>• Two bedroom luxury apartment (all rooms en-suite) - N50,000,000.00 (fifty million Naira)</p>
              <p>• Two bedroom luxury apartment (all rooms en-suite), with a good sized servant quarter N55,000,000.00 (fifty five million Naira).</p>
              <p>
                Please note that both prices are exclusive of documentation fees and subject to availability. It is our firm belief that you may expect nothing less than
                N3,000,000.00 per annum in rental income, and we say this in the knowledge that we are deliberately depressing your expectations. We expect that you would get more
                than your very best expectations, and confidently say that we shall surpass your expectations. At the commencement of the newly completed project - Tyndale Mews,
                the off plan offer for a one bedroom flat was N24,000,000.00 (twenty four million Naira). Same flat is currently valued and has been resold at N35,000.000.00
                (thirty five milion Naira). In the same vein, we are confident that Helens Nest apartments will be valued at N65,000,000.00 (sixty five million Naira) upon
                completion of the project.
              </p>
              <p>
                <span>Payment Terms</span>
              </p>
              <p>
                Given the Naira volatility, we are compelled to require an initial 50% payment of the purchase price in order to avert price variations during the course of the
                project.
              </p>
              <p>- 50% upon acceptance of the offer letter.</p>
              <p>- 25% after 6 months of 1st payment</p>
              <p>- 25% after 4 months of 2nd payment</p>
            </div>
            <div className="properties-img">
              <img src={House2} alt="House" />
            </div>
          </PropertiesContainer>
          <div className="appointment">
            <div className="appointment-form">
              <Form title="Schedule an Appointment" size="45px" />
            </div>
            <div className="amenities">
              <h2>Amenities</h2>
              <div className="amenities-body">
                <div>
                  <div className="amenities-img">
                    <img src={Swimming} alt="swimming" />
                  </div>
                  <p>Swimming pool</p>
                </div>
                <div>
                  <div className="amenities-img">
                    <img src={Network} alt="Network" />
                  </div>
                  <p>Good road network</p>
                </div>
                <div>
                  <div className="amenities-img">
                    <img src={Power} alt="Power" />
                  </div>
                  <p className="power">24/7 Power supply</p>
                </div>
              </div>
              <div className="amenities-body">
                <div>
                  <div className="amenities-img">
                    <img src={Game} alt="swimming" />
                  </div>
                  <p>Game room</p>
                </div>
                <div>
                  <div className="amenities-img">
                    <img src={Cinema} alt="Network" />
                  </div>
                  <p>Cinema room</p>
                </div>
                <div>
                  <div className="amenities-img">
                    <img src={Camera} alt="Power" />
                  </div>
                  <p>Surveillance camera</p>
                </div>
              </div>
            </div>
          </div>

          {/* <Container>
					<div className='explore-header'>
						<h2>Explore Gallery</h2>
						<div className='explore-header-img'>
							<img src={ArrowLeft} alt='Arrow' />
							<img src={ArrowRight} alt='Arrow' />
						</div>
					</div>
				</Container> */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Properties;
