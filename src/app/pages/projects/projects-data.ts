import { faCode } from "@fortawesome/free-solid-svg-icons";

import { Element } from "src/app/shared/services/element/element.service";

export interface Technology {
    name: string;
    color: string;
}

export const technologies: Technology[] = [
    { name: "Kubernetes", color: "#3069de" },
    { name: "C++", color: "#6295cb" },
    { name: "Java", color: "#205568" },
    { name: "JavaScript", color: "#efd81d" },
    { name: "Python", color: "#568bb9" },
    { name: "PHP", color: "#7377ad" },
    { name: "AWS", color: "#ff9900" },
    { name: "Azure", color: "#0085cf" },
    { name: "Serverless", color: "#f6544e" },
    { name: "Database", color: "#0e256d" },
    { name: "Data Lake", color: "#0e256d" },
    { name: "Data Engineering", color: "#627db3" },
    { name: "Data Science", color: "#92252e" },
    { name: "Image Processing", color: "#27aa4b" },
    { name: "Embedded System", color: "#385f46" }
];

export interface ProjectElement extends Element {
    fileName: string | undefined;
    githubRepo: string | undefined;
    technologies: Technology[];
}

const getTechnology = (name: string) => {
    const technology = technologies.find((t) => t.name === name);

    if (technology) {
        return technology;
    } else {
        throw Error(`Technology not found: ${name}`);
    }
};

export const projectElements: ProjectElement[] = [
    {
        icon: faCode,
        title: "Freehold Forecast",
        fileName: undefined,
        imageDirectory: "freehold-forecast",
        githubRepo: "freehold-forecast",
        startDate: new Date(2021, 3),
        endDate: new Date(2023, 8),
        technologies: [
            getTechnology("Azure"),
            getTechnology("Data Engineering"),
            getTechnology("Data Science"),
            getTechnology("Data Lake"),
            getTechnology("Python")
        ],
        description: `<a href="" target="_blank"></a>
            This project analyzes property transfers and predicts future sales and prices.
            I became interested in real estate market forecasting when Sarah and I were looking into purchasing our first home.
            I developed an <a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank">ETL</a> process to collect historical sales
            data from southwest Ohio and a <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank">ML</a> process to
            train the classification and regression models used to generate predictions.
            The processes are configured to be executed using
            <a href="https://learn.microsoft.com/en-us/azure/databricks/workflows/" target="_blank">Databricks workflows</a>,
            with the historical and prediction data stored in the <a href="https://learn.microsoft.com/en-us/azure/databricks/delta/" target="_blank">delta lake</a> format
            and then visualized using Microsoft <a href="https://powerbi.microsoft.com/en-us/getting-started-with-power-bi/" target="_blank">Power BI</a>.
        `
    },
    {
        icon: faCode,
        title: "Practical Tuples",
        fileName: undefined,
        imageDirectory: "practical-tuples",
        githubRepo: "practical-tuples",
        startDate: new Date(2021, 3),
        endDate: new Date(2023, 1),
        technologies: [
            getTechnology("AWS"),
            getTechnology("Serverless"),
            getTechnology("JavaScript"),
            getTechnology("Database")
        ],
        description: `
            This project is a real-time and cross-platform "to-do list" application built on serverless architecture.
            Users can create and share lists as well as manage access without requiring traditional account info (i.e. username and password).
            The frontend is built with the <a href="https://ionicframework.com/" target="_blank">Ionic Framework</a> and can be compiled
            as a web, Android, and/or iOS application.
            The backend is built with <a href="https://nestjs.com/" target="_blank">NestJS</a>,
            and uses an <a href="https://aws.amazon.com/rds/aurora/serverless/" target="_blank">AWS Aurora Serverless</a> relational database.
            The app can be hosted in AWS and managed by the <a href="https://www.serverless.com/" target="_blank">Serverless Framework</a>.
            Real-time communication between the frontend and backend is performed by persistent websocket connection that is maintained by
            <a href="https://aws.amazon.com/api-gateway/" target="_blank">API Gateway</a>.
        `
    },
    {
        icon: faCode,
        title: "Sports App @ UC",
        fileName: undefined,
        imageDirectory: "sdd",
        githubRepo: undefined,
        startDate: new Date(2016, 4),
        endDate: new Date(2017, 7),
        technologies: [
            getTechnology("AWS"),
            getTechnology("Database"),
            getTechnology("JavaScript"),
            getTechnology("PHP")
        ],
        description: `
            One of my first projects while on co-op was a social networking and management web application for sports
            professionals named Sports Digital Dashboard (SDD).
            It was hosted using AWS's
            <a href="https://aws.amazon.com/elasticbeanstalk/" target="_blank">Elastic Beanstalk</a>
            service and was my introduction to building scalable applications.
            It implemented a
            <a href="https://vuejs.org/" target="_blank">Vue.js</a>
            frontend and
            <a href="https://phalcon.io/" target="_blank">Phalcon</a> backend with a
            <a href="https://www.mysql.com/" target="_blank">MySQL</a>
            database.
        `
    },
    {
        icon: faCode,
        title: "Broadband App @ UC",
        fileName: undefined,
        imageDirectory: undefined,
        githubRepo: undefined,
        startDate: new Date(2017, 4),
        endDate: new Date(2017, 8),
        technologies: [
            getTechnology("AWS"),
            getTechnology("Kubernetes"),
            getTechnology("Database"),
            getTechnology("Data Engineering"),
            getTechnology("JavaScript"),
            getTechnology("PHP"),
            getTechnology("Python")
        ],
        description: `
            My last project while on co-op was assisting in the development of a web and embedded application
            to manage enterprise broadband routers.
            The service's web app was built with an
            <a href="https://angular.io/" target="_blank">Angular</a>
            frontend,
            <a href="https://symfony.com/" target="_blank">Symfony</a>
            backend, and
            <a href="https://www.mysql.com/" target="_blank">MySQL</a>
            database.
            The embedded application, which ran on enterprise broadband routers, was written in Python and utilized their SDK
            to send/receive information to our database, including data transfer, CPU/memory usage, temperature, and location.
        `
    },
    {
        icon: faCode,
        title: "This Website",
        fileName: undefined,
        imageDirectory: undefined,
        githubRepo: "daneisburgh.com",
        startDate: new Date(2021, 2),
        endDate: undefined,
        technologies: [getTechnology("AWS"), getTechnology("JavaScript")],
        description: `
            This is my latest website, created using some of what I've learned over the last few years.
            It's built with
            <a href="https://angular.io/" target="_blank">Angular</a> and
            <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, and hosted using AWS
            <a href="https://aws.amazon.com/s3/" target="_blank">S3</a> with <a href="https://aws.amazon.com/cloudfront/" target="_blank">CloudFront</a>.
            I plan to continue to update the site with future projects and events in the coming years.
        `
    },
    {
        icon: faCode,
        title: "Investment as a Service",
        fileName: undefined,
        imageDirectory: undefined,
        githubRepo: "invaas",
        startDate: new Date(2022, 1),
        endDate: undefined,
        technologies: [
            getTechnology("Azure"),
            getTechnology("Data Engineering"),
            getTechnology("Data Science"),
            getTechnology("Python")
        ],
        description: `
            This is an investing application designed to auto-trade ETFs, options, and crypto.
            The application uses <a href="https://learn.microsoft.com/en-us/azure/databricks/workflows/" target="_blank">Databricks workflows</a>
            to consume real-time trade data with <a href="https://spark.apache.org/" target="_blank">Spark</a> as well as create buy/sell orders using
            standard indicators and <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank">ML</a> models.
            The application can trade on several platforms including Robinhood, Schwab, and Coinbase.
            My goal is to ultimately build the app into a reliable source of supplemental income.
        `
    },
    {
        icon: faCode,
        title: "Wedding Website",
        githubRepo: "daneandsarahwedding.com",
        fileName: undefined,
        imageDirectory: undefined,
        startDate: new Date(2020, 0),
        endDate: new Date(2020, 7),
        technologies: [
            getTechnology("AWS"),
            getTechnology("Serverless"),
            getTechnology("Database"),
            getTechnology("Kubernetes"),
            getTechnology("JavaScript")
        ],
        description: `
            Sarah and I created a dynamic web application for our wedding guests, hosted at our own domain.
            The site is no longer active but the static content can be seen
            <a href="assets/websites/daneandsarahwedding.com/index.html" target="_blank">here</a>.
            It included important wedding info and allowed guests to RSVP, manage their invitees, and set food preferences.
            The app was completely serverless and included an
            <a href="https://angular.io/" target="_blank">Angular</a>
            frontend with a JavaScript backend that used AWS's
            <a href="https://aws.amazon.com/rds/aurora/serverless/" target="_blank">Aurora</a>
            service to host a serverless
            <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>
            database.
        `
    },
    {
        icon: faCode,
        title: "NASA Competition @ UC",
        fileName: "Galacticats PDR",
        imageDirectory: "nasa",
        githubRepo: undefined,
        startDate: new Date(2017, 8),
        endDate: new Date(2018, 3),
        technologies: [
            getTechnology("Data Engineering"),
            getTechnology("Data Science"),
            getTechnology("Embedded System"),
            getTechnology("Image Processing"),
            getTechnology("C++"),
            getTechnology("Python")
        ],
        description: `
            During my senior year at UC, I assisted the university's aerospace team in the development of a payload for the
            <a href="https://www.nasa.gov/stem/studentlaunch/home/index.html" target="_blank">NASA Student Launch</a>
            competition that could identify objects on the ground by shape and color.
            To accomplish this, I used <a href="https://opencv.org/" target="_blank">OpenCV</a> with the
            <a href="https://en.wikipedia.org/wiki/Nvidia_Jetson" target="_blank">Jetson TK1</a>.
            We developed the rocket and payload over the course of the year, presented our project at local high schools,
            and traveled to Huntsville, AL to compete against schools across the county.
        `
    },
    {
        icon: faCode,
        title: "First Personal Website",
        githubRepo: undefined,
        fileName: undefined,
        imageDirectory: undefined,
        startDate: new Date(2018, 1),
        endDate: new Date(2018, 1),
        technologies: [getTechnology("AWS"), getTechnology("JavaScript")],
        description: `
            I created my first personal website during my senior year to showcase some of my projects when
            applying to jobs.
            It was hosted in AWS's
            <a href="https://aws.amazon.com/s3/" target="_blank">Simple Storage Service</a>
            and was also my first experience purchasing and routing a domain as well as setting up SMTP to send/receive emails.
            The original static content can be seen
            <a href="assets/websites/daneisburgh.com/index.html" target="_blank">here</a>.
        `
    },
    {
        icon: faCode,
        title: "Robotics App @ UC",
        fileName: "Botsyn Design Report",
        imageDirectory: "botsyn",
        githubRepo: undefined,
        startDate: new Date(2017, 0),
        endDate: new Date(2018, 3),
        technologies: [
            getTechnology("AWS"),
            getTechnology("Data Engineering"),
            getTechnology("Database"),
            getTechnology("Embedded System"),
            getTechnology("Image Processing"),
            getTechnology("JavaScript")
        ],
        description: `
            I worked on a robotics web and embedded app, codenamed Botsyn, with three of my classmates for our senior design capstone.
            It started as one of my side projects in early 2017 and ultimately became a web app and open-source
            embedded robotics module that allowed users to build and operate other users' robots over the internet.
            The web app included an <a href="https://angular.io/" target="_blank">Angular</a> frontend and
            <a href="https://feathersjs.com/" target="_blank">Feathers</a>
            backend, hosted in AWS's <a href="https://aws.amazon.com/ec2/" target="_blank">Elastic Compute Cloud</a> service.
            Robots were controlled with embedded software written using the <a href="http://johnny-five.io/" target="_blank">Johnny-Five</a>
            JavaScript robotics framework and could stream and process captured video using <a href="https://opencv.org/" target="_blank">OpenCV</a>.
        `
    },
    {
        icon: faCode,
        title: "Augmented Reality Binoculars",
        fileName: undefined,
        imageDirectory: undefined,
        githubRepo: undefined,
        startDate: new Date(2015, 11),
        endDate: new Date(2016, 1),
        technologies: [
            getTechnology("Embedded System"),
            getTechnology("Image Processing"),
            getTechnology("Java")
        ],
        description: `
            I created an augmented reality Android app that could be used with the Samsung <a href="https://en.wikipedia.org/wiki/Samsung_Gear_VR/" target="_blank">GearVR</a>.
            The app used the camera's pass-through ability to process frame data in real-time with <a href="https://opencv.org/" target="_blank">OpenCV</a>,
            and display it to the user. The app was controlled using the GearVR's input to zoom, take pictures, track people/objects,
            and switch between several different displays, including a custom HUD.
        `
    },
    {
        icon: faCode,
        title: "Statistics Calculator @ UC",
        fileName: undefined,
        imageDirectory: "statcalc",
        githubRepo: undefined,
        startDate: new Date(2015, 5),
        endDate: new Date(2015, 7),
        technologies: [getTechnology("Java")],
        description: `
            I developed and deployed a
            <a href="https://www.appbrain.com/app/statistics-calculator/com.daneisburgh.statcalc" target="_blank">Statistics Calculator</a>
            Android app to the Google Play Store as a final project for an Engineering Statistics course during my
            sophomore year of college.
            It could perform a large number of different calculations that I had learned throughout the course.
            The app is no longer available but attained over 12K downloads with a rating of 4.4 stars.
        `
    },
    {
        icon: faCode,
        title: "Puzzle Game @ UC",
        fileName: undefined,
        imageDirectory: "boxoff",
        githubRepo: undefined,
        startDate: new Date(2016, 4),
        endDate: new Date(2016, 8),
        technologies: [getTechnology("Java")],
        description: `
            My second major project while on co-op was an Android puzzle game called
            <a href="https://play.google.com/store/apps/details?id=com.cyningstan.boxoff" target="_blank">BoxOff</a>.
            I was responsible for developing the UI components, completing the procedural puzzle generation,
            incorporating in-app purchasing, and deploying the application to the Play Store.
        `
    },
    {
        icon: faCode,
        title: "Telepresence Robot @ AFRL",
        fileName: "Rosie Tech Paper",
        imageDirectory: "rosie",
        githubRepo: undefined,
        startDate: new Date(2015, 2),
        endDate: new Date(2015, 11),
        technologies: [
            getTechnology("Embedded System"),
            getTechnology("Image Processing"),
            getTechnology("C++"),
            getTechnology("Java")
        ],
        description: `
            My biggest project at the AFRL was a custom telepresence robot named Rosie.
            We used several commercial robots in the lab and designed Rosie to be a way to connect with local schools for STEM education.
            Rosie's chassis was aluminum with a 3D printed outer shell and her brain was a
            <a href="https://en.wikipedia.org/wiki/Nvidia_Jetson" target="_blank">Jetson TK1</a>
            single-board computer developed by Nvidia that allowed for video streaming and image processing with <a href="https://opencv.org/" target="_blank">OpenCV</a>
            as well as control of the robot's omnidirectional movement in real-time.
            Rosie could be remotely controlled by an Android application that communicated over a simple peer-to-peer network.
            We had the opportunity to showcase Rosie at several expos including the
            <a href="https://oetc.ohio.gov/" target="_blank">Ohio Educational Technology Conference</a>.
        `
    },
    {
        icon: faCode,
        title: "Personnel App @ AFRL",
        fileName: "VICC Tech Paper",
        imageDirectory: "vicc",
        githubRepo: undefined,
        startDate: new Date(2015, 7),
        endDate: new Date(2015, 11),
        technologies: [
            getTechnology("Database"),
            getTechnology("Embedded System"),
            getTechnology("Java")
        ],
        description: `
            My last major project at the AFRL was a personnel management and logistics application named
            Virtual Incident Command Center (VICC).
            The project used the
            <a href="https://internetofthings.ibmcloud.com/" target="_blank">IBM Watson IoT Platform</a>
            to send/receive basic messages and GPS coordinate info to connected devices that
            could then be viewed and managed from a single external source.
        `
    }
];
