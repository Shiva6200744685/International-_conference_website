import React from "react";
import "./this.css";
import Gallery from "./gallery"

const AboutGwalior = () => {
  return (
    <>
      <div
        className="py-20 bg-cover bg-no-repeat bg-fixed"
        id="head"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1637476412322-7e6cfdc63506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)",
        }}
      >
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-4xl font-bold mb-2 text-white">Greater Noida</h2>
          <h3 className="text-2xl mb-8 text-gray-200">The City Of Music</h3>
          <a href="#about">
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800">
              Explore
            </button>
          </a>
        </div>
      </div>

      <section id="about">
        <div className="about-wrapper container flex items-center flex-wrap mb-20">
          <div className="about-text w-full md:w-1/2 pr-10">
            <p className="small">About Greater Noida</p>
            <h2>Legecy History of Greater Noida</h2>
            <p>
            Greater Noida is a planned city located in the Gautam Buddha Nagar district of the Indian state of Uttar Pradesh.The city was created as an extension of the area under the UP Industrial Area Development Act, of 1976.Situated 40.2 km (25.0 mi) southeast of the Center of capital city of New Delhi, it takes around 30 minutes to travel between the cities via the Noida-Greater Noida Expressway. The city is administered by the Greater Noida Industrial Development Authority (GNIDA).
            </p>
          </div>
          <div className="w-full md:w-1/2 about-img">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1611640844364-5d6e046b2359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              alt="food"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about-wrapper container flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 about-img">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1608181017892-cc4a542570d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="food"
            />
          </div>
          <div className="about-text w-full md:w-1/2 pr-10">
            <p className="small">About Gwalior</p>
            <h2>Legecy History of Gwalior</h2>
            <p>
            Greater Noida is a planned city located in the Gautam Buddha Nagar district of the Indian state of Uttar Pradesh.The city was created as an extension of the area under the UP Industrial Area Development Act, of 1976.Situated 40.2 km (25.0 mi) southeast of the Center of capital city of New Delhi, it takes around 30 minutes to travel between the cities via the Noida-Greater Noida Expressway. The city is administered by the Greater Noida Industrial Development Authority (GNIDA).
            </p>
          </div>
        </div>
      </section>

      <section id="food">
        <h2>Places To Visit</h2>
        <div className="food-container container">
          <div className="food-type fruite">
            <div className="img-container">
              <img
                src="https://gtcholiday.files.wordpress.com/2017/08/gwalior-sun-temple.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>Sun Temple</h3>
                <a
                  href="https://www.google.com/search?q=sun+temple+gwalior&rlz=1C1AVFC_enIN970IN970&oq=sun+temple+gwalior&aqs=chrome..69i57.4257j0j1&sourceid=chrome&ie=UTF-8"
                  className="btn btn-primary"
                  target="blank"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="food-type vegetable">
            <div className="img-container">
              <img
                src="https://st.depositphotos.com/1905483/1744/i/450/depositphotos_17445001-stock-photo-gwalior-fort-india.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>Gwalior Fort</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Gwalior_Fort"
                  className="btn btn-primary"
                  target="blank"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
          <div className="food-type grin">
            <div className="img-container">
              <img
                src="https://static.toiimg.com/thumb/59125101.cms?resizemode=75&width=1200&height=900"
                alt="error"
              />
              <div className="img-content">
                <h3>Jai Vilas Mahal</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Jai_Vilas_Mahal"
                  className="btn btn-primary"
                  target="blank"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="food-menu">
        <h2 className="food-menu-heading">Transportation</h2>
        <div className="food-menu-container container">
          <div className="food-menu-item">
            <div className="food-img w-full">
              <img
                src="https://images.unsplash.com/photo-1531642765602-5cae8bbbf285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=359&q=80"
                alt=""
              />
            </div>
            <div className="food-description">
              <h2 className="food-titile font-bold">By Air</h2>
              <p>
                The Gwalior Airport is situated at 2 km from the Institute. It
                is connected by Indian Airlines to important cities like Mumbai,
                Indore, Bhopal, and Delhi. The services are operational thrice a
                week.
              </p>
              {/* <p className="food-price">Price: &#8377; 250</p> */}
            </div>
          </div>

          <div className="food-menu-item">
            <div className="food-img w-full">
              <img
                src="https://images.unsplash.com/photo-1532105956626-9569c03602f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <div className="food-description">
              <h2 className="food-titile font-bold">By Rail</h2>
              <p>
                The Gwalior rail-head is situated within the city area. It is on
                the main Delhi-Mumbai and Delhi-Chennai rail route. Among the
                important trains, the Taj and Shatabdi Express link Gwalior with
                Delhi and Agra.
              </p>
              {/* <p className="food-price">Price: &#8377; 250</p> */}
            </div>
          </div>
          <div className="food-menu-item">
            <div className="food-img w-full">
              <img
                src="https://images.unsplash.com/photo-1480859634854-2acf7a955d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </div>
            <div className="food-description">
              <h2 className="food-titile font-bold">By Road</h2>
              <p>
                Gwalior is extremely well linked by a good network of roadways
                and road transport to all the important towns of Madhya Pradesh
                and adjacent areas. It is well linked with Agra (118 km), Delhi
                (321 km), Jaipur (350 km), Bhopal (423 km), Lucknow, Chanderi
                (239 km), Khajuraho (275 km), Jhansi (101 km), Indore (486 km),
                Ujjain (455 km), and Shivpuri (114 km).
              </p>
              {/* <p className="food-price">Price: &#8377; 250</p> */}
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <h2 className="testimonial-title">See Where We are?</h2>
      </section>
      <div className="max-w-2xl mx-auto mb-10 mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-16xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <iframe
              className="h-48 w-full md:h-full md:w-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.80185929636!2d78.19089894999999!3d26.21415585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1654759708722!5m2!1sen!2sin"
              // width="800"
              // height="750"
              frameBorder="0"
              style={{ border: "0" }}
              title="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-8 ">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Geographic projection
            </div>
            <a
              href="https://www.timeanddate.com/weather/india/gwalior"
              target="blank"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Season and Climate
            </a>
            <p className="mt-2 text-slate-500">
              Gwalior is located at 26°13'N 8°11'E / 26.22°N 78.18°E. Gwalior
              can be visited from late October to early March without much
              discomfort. The day temperature of the city ranges between 15 to
              25 degree Celsius, and in the nights it can be below 5 degree
              Celsius during January.
            </p>
          </div>
        </div>
      </div>
      <section id="testimonials">
        <h2 className="testimonial-title">See the Beauty of this</h2>
      </section>
      <Gallery />
    </>
  );
};

export default AboutGwalior;
