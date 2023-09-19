import {
    faAppleWhole,
    faBeer,
    faBridgeWater,
    faBriefcase,
    faCar,
    faCity,
    faEuroSign,
    faGem,
    faGraduationCap,
    faHiking,
    faHome,
    faHorse,
    faMotorcycle,
    faPlaceOfWorship,
    faShip,
    faTree,
    faUmbrellaBeach
} from "@fortawesome/free-solid-svg-icons";

import { Element } from "src/app/shared/services/element/element.service";

export interface TimelineElement extends Element {
    color: string | undefined;
}

export const timelineElements: TimelineElement[] = [
    {
        icon: faCity,
        title: "Family trip to Chicago, IL",
        startDate: new Date(2023, 6),
        endDate: new Date(2023, 6),
        color: undefined,
        imageDirectory: "chicago",
        description: `
            We drove to Chicago with my parents the week after returning from our trip to San Francisco (see below).
            We stayed for a few days downtown and our activities included visiting the Shedd Aquarium, Art Institute of Chicago, Millennium Park, and Willis Tower
            as well as attending a performance by <a href="https://en.wikipedia.org/wiki/The_Second_City" target="_blank">The Second City</a> and a Chicago FC game at Soldier Field.
        `
    },
    {
        icon: faBridgeWater,
        title: "Exploring San Francisco, CA",
        startDate: new Date(2023, 5),
        endDate: new Date(2023, 5),
        color: undefined,
        imageDirectory: "san-francisco",
        description: `
            Sarah and I traveled to California for the first time in the summer of 2023 and spent almost two weeks in San Francisco.
            We had a lot of fun exploring the city and nearby towns. Our activities included touring the Golden Gate Bridge and Alcatraz Island,
            hiking in Muir Woods, wine tasting in Napa Valley, and visiting the Ferry Building, Fisherman's Wharf, Coit Tower, and Palace of Fine Arts.
        `
    },
    {
        icon: faTree,
        title: "Off grid in Rockbridge, OH",
        startDate: new Date(2023, 3),
        endDate: new Date(2023, 3),
        color: undefined,
        imageDirectory: "rockbridge",
        description: `
            In the spring of 2023, we spent a few days in Rockbridge, a nature preserve south of Columbus, and enjoyed hiking, canoeing, and zip lining.
            We stayed in cabin that had water and power but no internet or cell service, and was only accessible by 4x4.
            It was a lot of fun to get away from the city and relax in the wilderness for a few days.
        `
    },
    {
        icon: faAppleWhole,
        title: "Family trip to New York, NY",
        startDate: new Date(2022, 8),
        endDate: new Date(2022, 8),
        color: undefined,
        imageDirectory: "new-york",
        description: `
            Our family traveled to the Big Apple in the summer of 2022.
            We stayed in Chinatown and our activities included enjoying lots of Chinese food, navigating the
            <a href="https://en.wikipedia.org/wiki/Feast_of_San_Gennaro" target="_blank">Feast of San Gennaro</a> food festival in Little Italy,
            a boat tour of the Statue of Liberty, several walking tours, and attending two Broadway shows: Beetlejuice and The Music Man.
        `
    },
    {
        icon: faBriefcase,
        title: "Sr. Data Engineer @ Kroger",
        startDate: new Date(2021, 7),
        endDate: undefined,
        color: undefined,
        imageDirectory: undefined,
        description: `
            In mid-2021 I decided to leave GE and began work as a data engineer for Kroger.
            I'm assisting in the engineering and development of the company's data platform as well as gaining knowledge and experience designing
            pragmatic enterprise data solutions.
        `
    },
    {
        icon: faHorse,
        title: "Relaxing in Columbia, KY",
        startDate: new Date(2021, 7),
        endDate: new Date(2021, 7),
        color: undefined,
        imageDirectory: "columbia",
        description: `
            Sarah and I went on a short trip to an <a href="https://www.airbnb.com/rooms/48522039" target="_blank">Airbnb</a>
            just north of Lake Cumberland.
            We spent our time fishing, reading, and hanging out with the farm's six horses, six cats, four dogs, and flock of chickens
            as well as visiting the nearby towns in the Kentucky countryside.
        `
    },
    {
        icon: faHome,
        title: "First House",
        startDate: new Date(2021, 4),
        endDate: new Date(2021, 4),
        color: undefined,
        imageDirectory: "house",
        description: `
            After a lot of searching, Sarah and I bought our first home in May of 2021.
            The house is in West Chester, just north of our previous apartment and equidistant to our families
            in Ohio and Kentucky.
            We officially moved into our new home in early June and are currently working to paint and remodel
            much of the house.
            We're very fortunate and excited to have found a home that we can grow into for years to come.
        `
    },
    {
        icon: faShip,
        title: "Michigan City",
        startDate: new Date(2020, 7),
        endDate: new Date(2020, 7),
        color: undefined,
        imageDirectory: "michigan",
        description: `
            Sarah and I took a weekend trip to Michigan City, IN.
            We stopped at Indianapolis along the way and went go-karting at the Motor Speedway.
            We stayed at an <a href="https://www.airbnb.com/rooms/26587175" target="_blank">Airbnb</a>
            near the coast of Lake Michigan and spent time on the water with a view of Chicago
            as well as explored the city's historic district.
        `
    },
    {
        icon: faHorse,
        title: "Honeymoon",
        startDate: new Date(2020, 9),
        endDate: new Date(2020, 9),
        color: undefined,
        imageDirectory: "honeymoon",
        description: `
            Sarah and I stayed at a small, remote farm in Springfield, KY, near the Bourbon Trail.
            Our <a href="https://www.airbnb.com/rooms/3166748" target="_blank">Airbnb</a>
            was in a renovated portion of the owner's barn that was situated above several stables with plenty of livestock below.
            We enjoyed sitting out, grilling, watching the horses, and exploring the property.
        `
    },
    {
        icon: faPlaceOfWorship,
        title: "Wedding",
        startDate: new Date(2020, 9),
        endDate: new Date(2020, 9),
        color: undefined,
        imageDirectory: "wedding",
        description: `
            Sarah and I were married at
            <a href="https://www.allsaintswalton.com/" target="_blank">All Saints Church</a> in Walton, KY
            on October 24th, 2020.
            We had a wonderful reception with close friends and family at
            <a href="https://binghammeadows.com/" target="_blank">Bingham Meadows</a>
            and, although our total guest count was a fraction of the original due to the pandemic, we were able to live-stream
            everything on
            <a href="https://www.youtube.com/watch?v=F36Ywpa7USI" target="_blank">YouTube</a>.
        `
    },
    {
        icon: faHiking,
        title: "Hiking in Berea, KY",
        startDate: new Date(2020, 8),
        endDate: new Date(2020, 8),
        color: undefined,
        imageDirectory: "berea",
        description: `
            Sarah and I took a trip to the Berea Pinnacles before our wedding to relieve some stress.
            We hiked over 12 miles of the trails at the Pinnacles and enjoyed local barbecue.
            We stayed at an <a href="https://www.airbnb.com/rooms/33905811" target="_blank">Airbnb</a>
            situated on a small farm that served an amazing breakfast and had very vocal cattle.
        `
    },
    {
        icon: faEuroSign,
        title: "Euro Trip",
        startDate: new Date(2019, 9),
        endDate: new Date(2019, 9),
        color: undefined,
        imageDirectory: "europe",
        description: `
            Sarah and I traveled to Europe with my parents after our engagement.
            We flew into Paris and went to the top of the Eiffel Tower, visited the historic
            <a href="https://en.wikipedia.org/wiki/3_Fonteinen" target="_blank">3 Fonteinen</a>
            brewery in Belgium, participated in
            <a href="https://en.wikipedia.org/wiki/Erntedankfest_D%C3%BCsseldorf-Urdenbach" target="_blank">Erntedankfest</a>
            in Urdenbach, traveled to Berlin, Munich, and the
            <a href="https://en.wikipedia.org/wiki/Zugspitze" target="_blank">Zugspitze</a>
            peak, as well as toured the
            <a href="https://en.wikipedia.org/wiki/Heidelberg" target="_blank">Heidelberg</a> and
            <a href="https://en.wikipedia.org/wiki/Neuschwanstein_Castle" target="_blank">Neuschwanstein</a> castles.
            It was a great adventure.
        `
    },
    {
        icon: faGem,
        title: "Engagement",
        startDate: new Date(2019, 9),
        endDate: new Date(2019, 9),
        color: undefined,
        imageDirectory: "engagement",
        description: `
            I proposed to Sarah on October 3rd at our favorite spot along a private trail near our home in Cincinnati.
            We had photos taken with our wedding photographer at the end of the month including some together on our motorcycle.
        `
    },
    {
        icon: faCar,
        title: "Driving in Charlotte, NC",
        startDate: new Date(2019, 5),
        endDate: new Date(2019, 5),
        color: undefined,
        imageDirectory: "charlotte",
        description: `
            Sarah surprised me with a trip to Charlotte, her childhood hometown, for my birthday in 2019.
            Our <a href="https://www.airbnb.com/rooms/33271724" target="_blank">Airbnb</a> was a tiny house near the city.
            We used
            <a href="https://turo.com/" target="_blank">Turo</a>
            for the first time and rented a manual transmission Mazda Miata convertible.
            Besides driving around and exploring the city, we visited the local aviation museum and several small breweries.
        `
    },
    {
        icon: faMotorcycle,
        title: "Motorcycling",
        startDate: new Date(2019, 4),
        endDate: new Date(2019, 4),
        color: undefined,
        imageDirectory: undefined,
        description: `
            Sarah and I enrolled in the
            <a href="https://motorcycle.ohio.gov/wps/portal/gov/motorcycle/" target="_blank">Motorcycle Ohio Rider Course</a>
            for fun in the spring of 2019.
            We enjoyed the training, after which we received our endorsements and purchased a 2015 Harley Street 750.
            It's been a great starter bike and we ride a few times per month from spring through the fall each year.
        `
    },
    {
        icon: faUmbrellaBeach,
        title: "Cabo Trip #2",
        startDate: new Date(2019, 0),
        endDate: new Date(2019, 0),
        color: undefined,
        imageDirectory: "cabo2",
        description: `
            Sarah and I were fortunate enough to travel to Cabo for the second time together at the beginning of 2019.
            We stayed at the same resort as our previous adventure and spent most of our time between the pool and the beach,
            as well as exploring downtown.
            We were also there for the whale watching season and got to see some amazing humpback whales.
        `
    },
    {
        icon: faBriefcase,
        title: "Data Engineer @ GE",
        startDate: new Date(2018, 4),
        endDate: new Date(2021, 7),
        color: undefined,
        imageDirectory: undefined,
        description: `
            I started my professional career as a Data Engineer for GE after graduating from UC.
            While at GE, I had the opportunity to build several enterprise applications and data automation projects to
            host/manage both physical and cloud infrastructure.
        `
    },
    {
        icon: faBeer,
        title: "St. Patty's Day in Columbus",
        startDate: new Date(2018, 2),
        endDate: new Date(2018, 2),
        color: undefined,
        imageDirectory: "columbus",
        description: `
            Sarah and I traveled to Columbus, OH during the St. Patrick's Day celebrations for our senior spring break.
            We stayed downtown, watched the parade from our hotel room, visited the Columbus Zoo, went axe throwing
            for the first time (with green beer), and saw the Blue Jackets play the Toronto Maple Leafs.
            It was a lot of fun.
        `
    },
    {
        icon: faUmbrellaBeach,
        title: "Cabo Trip #1",
        startDate: new Date(2017, 4),
        endDate: new Date(2017, 4),
        color: undefined,
        imageDirectory: "cabo1",
        description: `
            Sarah and I traveled to Cabo San Lucas, Mexico for the first time together with my parents in the summer of 2017.
            We stayed at the
            <a href="https://www.pueblobonito.com/resorts/sunset-beach" target="_blank">Pueblo Bonito Sunset Beach</a>
            resort with a great view of the Pacific Ocean.
            During our trip, we went horseback riding, ATVing, and snorkeling, as well as tried to limit
            our sunburns while hanging out at the pool and on the beach.
        `
    },
    {
        icon: faBriefcase,
        title: "Full Stack Developer @ UC",
        startDate: new Date(2016, 4),
        endDate: new Date(2017, 8),
        color: undefined,
        imageDirectory: undefined,
        description: `
            I worked for several small businesses as a developer at UC
            for my final three co-op rotations during my junior and senior years of college.
            It was my introduction to AWS and cloud hosting, as well as to enterprise web frameworks.
            I learned a lot and got to work on both large and small web application projects as well as built
            and deployed an Android puzzle game.
        `
    },
    {
        icon: faBriefcase,
        title: "R&D Intern @ AFRL",
        startDate: new Date(2015, 0),
        endDate: new Date(2015, 11),
        color: undefined,
        imageDirectory: undefined,
        description: `
            I worked for the Air Force Research Lab near Wright Patterson Air Force base in Dayton, OH for my first two
            co-op rotations during my freshman and sophomore years of college.
            It was a great learning experience and an important part of my life because it's where I met Sarah.
            After the operation was moved to Columbus, Sarah and I both chose to pursue jobs near our respective universities.
        `
    },
    {
        icon: faGraduationCap,
        title: "BS in CS @ UC",
        startDate: new Date(2014, 8),
        endDate: new Date(2018, 4),
        color: undefined,
        imageDirectory: undefined,
        description: `
            I graduated from the University of Cincinnati with a degree in Computer Science in May of 2018.
            While at UC, I was a member of the robotics and aerospace teams and spent the majority of my time on campus
            in the Engineering Library of Baldwin Hall.
            I lived just north of campus in the
            <a href="https://wandercincinnati.com/2019/09/17/gaslight-district-cincinnati/" target="_blank">Gaslight District</a>
            and enjoyed seeing movies at
            <a href="https://esquiretheatre.com/" target="_blank">Esquire Theater</a>
            as well as having some of the best food in Cincinnati around the corner on Ludlow Ave.
        `
    }
];
