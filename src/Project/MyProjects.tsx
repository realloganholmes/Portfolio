import { Project } from './Project';

export const PROJECTS = [
    new Project({
        id: 1,
        name: 'Logan Holmes Runs',
        description: 'Website and mobile app to visualize my running data. Built in Wordpress using a theme created from scratch. Interfaces with the Strava API. Uses multiple visualization techniques with Leafet and OpenMapBox. Also interfaces with GMail API in order to allow for livetracking from my watch when racing.',
        reason: 'personal',
        technologies: ['API', 'Wordpress', 'PHP', 'SQL', 'JS'],
        siteUrl: 'https://www.loganholmesruns.com',
        iosUrl: 'https://apps.apple.com/in/app/logan-holmes-runs/id6447003853',
        images: ['lhr_map.png', 'lhr_app.png'],
        ranking: 1,
    }),
    new Project({
        id: 12,
        name: 'SportsBull',
        description: 'Website which acts as a market where users can buy, hold, and sell sports players similar to stocks. Prices fluctuate based on demand. Individual user accounts and balances tracked.',
        reason: 'personal',
        technologies: ['PHP', 'SQL'],
        images: ['sb_home.png', 'sb_player.png', 'sb_portfolio.png', 'sb_topstocks.png'],
        ranking: 3,
    }),
    new Project({
        id: 4,
        name: 'Turf Wars Game',
        description: 'Multiplayer game where users can link their Strava accounts and compete online with friend. The city is broken into a grid and whichever team runs the most in each grid square owns that square. The team with the most squares wins! Built in ASP.NET Core and hosted on Azure. Makes use of ASP scaffolding and code first development as well as an Azure Function API endpoint.',
        reason: 'personal',
        siteUrl: 'https://stravawars.azurewebsites.net/',
        technologies: ['Azure', 'C#', 'SQL', 'JS'],
        images: ['tw_home.png', 'tw_map.png', 'tw_3d.png'],
        ranking: 2,
    }),







    new Project({
        id: 2,
        name: 'Gym Vision',
        description: 'Senior capstone project to give better data to gym owners. Uses computer vision (OpenCv in python) on an embedded device (rapsberry pi) to detect visible persons and gym equipment to give data insights based on collected information. Insights include: equipment usage statistics, crowd levels, heat maps, predicted crowd levels. Website and database hosted on Azure. Azure function is called by the pi to update the database.',
        reason: 'school',
        technologies: ['Azure', 'C#', 'SQL', 'Python', 'OpenCV'],
        images: ['gv_site.png', 'gv_mockup.png'],
        ranking: 1,
    }),
    new Project({
        id: 15,
        name: 'Playbook Tool',
        description: 'Python app using QT Creator allowing users to create football plays. The plays are stored and there is an option to study and test on the plays created. Playbooks can be saved and loaded to the file system.',
        reason: 'school',
        technologies: ['Python', 'QT Creator'],
        images: ['pb_home.png', 'pb_create.png', 'pb_study.png', 'pb_test.png'],
        ranking: 3,
    }),
    new Project({
        id: 5,
        name: 'Tank Wars',
        description: 'An online multiplayer tank shooting game with a custom programmed server and client system. Uses websockets to establish connections and send data between client and server.',
        reason: 'school',
        technologies: ['Windows Forms App', 'Web Sockets'],
        images: ['tanks_playing.png'],
        ranking: 2,
    }),







    new Project({
        id: 9,
        name: 'Statistics Dashboard',
        description: 'A new dashboard for live statistics and historical data to replace existing legacy dashboards. Using many types of graphs and data visualizations to display information. Makes use of advances SQL queries to get relevant data. Built in Java Springboot.',
        reason: 'work',
        technologies: ['Java', 'Springboot', 'SQL', 'JS'],
        images: ['no_image.jpg'],
        ranking: 1,
    }),
    new Project({
        id: 10,
        name: 'In Store Displays',
        description: 'Website which will act as an information display in stores. Communicates with database to update data in live time. Built for IceWeasel browser in order to work on store servers. Built in Java Springboot.',
        reason: 'work',
        technologies: ['Java', 'Springboot', 'SQL'],
        images: ['no_image.jpg'],
        ranking: 3,
    }),
    new Project({
        id: 11,
        name: 'Data Visualization Website',
        description: 'Website to visualize experiment results in an organized manner. Organizes the many images from experiements and allows for filtering, self comparison, and external comparison. Built in ASP.NET Core and offers an API endpoint to get existing experiment data and upload new data. Website and database are hosted on Azure.',
        reason: 'work',
        technologies: ['C#', 'SQL', 'Azure'],
        images: ['no_image.jpg'],
        ranking: 2,
    }),
];