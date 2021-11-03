//ranked data of 15 tallest buildings as of 2021
//source: https://www.arch2o.com/top-30-tallest-building-in-the-world-in-2021-arch2o-2/

const data = [
{id: 1, name: "Burj Khalifa", location: "Dubai, UAE", yearCompleted: 2000, floors: 163, altitude: 2717, content: " "},
{id: 2, name: "Shanghai Tower",  location: "Shanghai, China", yearCompleted: 2015, floors: 128, altitude: 2073, content: " " },
{id: 3, name: "Makkah Royal Clock Tower", location: "Mecca, Saudi Arabia", yearCompleted: 2012, floors: 120, altitude: 1972, content: "" },
{id: 4, name: "Ping An Finance Center", location: "Shenzhen, China", yearCompleted: 2017, floors: 115, altitude: 1965, content: "" },
{id: 5, name: "Lotte World Tower", location: "Seoul, South Korea", yearCompleted: 2017, floors: 123, altitude: 1819, content: "" },
{id: 6, name: "One World Trade Center", location: "New York City, US", yearCompleted: 2014, floors: 94, altitude: 1776, content: "" },
{id: 7, name: "Guangzhou CTF Finance Centre", location: "Guangzhou, China", yearCompleted: 2016, floors: 111, altitude: 1739, content: "" },
{id: 8, name: "Tianjin CTF Finance Centre", location: "Tianjin, China", yearCompleted: 2019, floors: 2019, altitude: 1739, content: "" },
{id: 9, name: "CITIC Tower", location: "Beijing, China", yearCompleted: 2018, floors: 109, altitude: 1731, content: "" },
{id: 10, name: "TAIPEI 101", location: "Taipei, Taiwan", yearCompleted: 2004, floors: 101, altitude: 1667, content: "" },
{id: 11, name: "Shanghai World Financial Center", location: "Shanghai, China", yearCompleted: 2008, floors: 101, altitude: 1614, content: "" },
{id: 12, name: "International Commerce Centre", location: "Hong Kong, China", yearCompleted: 2010, floors: 108, altitude: 1588, content: "" },
{id: 13, name: "Central Park Tower", location: "New York City, US", yearCompleted: 2020, floors: 98, altitude: 1550, content: "" },
{id: 14, name: "Lakhta Center", location: "St. Petersburg, Russia", yearCompleted: 2019, floors: 87, altitude: 1516, content: "" },
{id: 15, name: "Vincom Landmark 81", location: "Vincom Landmark 81", yearCompleted: 2018, floors: 81, altitude: 1513, content: "" },
];


const list = () => {
    return [...data]
};

const find = (id) => {
   const post = data.find(post => post.id === +id);
   return {...post};
}

module.exports = {list: list, find: find};

