import ayla from '/public/image/ayla.jpg';
import devBook from '/public/image/devBookLogo.png';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'DevBooks',
        description: "Me and my team built a programming book's app. We had to creat client and admin profiles. It is posible to search by name or filter all the books, add to favourites or to the cart. You can also buy the same book multiple times and see the history of buys. Once you already bought one, you are gonna recive an email with the buy confirmation. To make that we worked on javascript with the help of Google Books API. For the design part we used MaterialUI and Bulma; and for the backend we used NodeJS.",
        tools: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'React', 'Vite JS', 'Material UI', 'Google Books API', 'ANTD', 'JWT'],
        role: 'Full Stack Developer',
        code: 'https://github.com/Francisco-Villanueva/eccomerce-book',
        demo: '',
        image: devBook,
    },
    {
        id: 2,
        name: 'Bloom Studio',
        description: 'This project is a website for a professional makeup studio. Users can view information about available courses, book their place in a face-to-face or virtual course, and pay for it. The website offers information on different types of makeup, application techniques, and skincare tips. Users can also view a portfolio of images from the studio and the work done. I was responsible for developing the user interface of the website, using the following technologies: HTML5 for content structure, CSS3 and Tailwind for website design and aesthetics, Next.js for website interactivity and functionality, etc.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Sun-Editor", "Gmail Passkey"],
        role: 'Front End Developer',
        code: '',
        demo: '',
        image: travel,
    }
//    {
//        id: 3,
//        name: 'AI Powered Real Estate',
//        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
//        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
//        code: '',
//        role: 'Full Stack Developer',
//        demo: '',
//        image: realEstate,
//    },
//    {
//        id: 4,
//        name: 'Newsroom Management',
//        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
//        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
//        code: '',
//        demo: '',
//        image: ayla,
//        role: 'Full Stack Developer',
//    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },