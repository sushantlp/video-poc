import React, {  useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';

import List from './components/List';
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';

function App() {

 
  const [data,setData] = useState({
    "kind": "youtube#searchListResponse",
    "etag": "vM2DvaqEa5zXZqc7SFsQbbDBqD4",
    "nextPageToken": "CAUQAA",
    "regionCode": "IN",
    "pageInfo": {
      "totalResults": 13,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "UeSnuyK-EpNNyvkA0x2GbEpbaGg",
        "id": {
          "kind": "youtube#video",
          "videoId": "SM1HwOjeRGE"
        },
        "snippet": {
          "publishedAt": "2015-11-17T09:53:57Z",
          "channelId": "UC_PgzxVA2pGzbW9muWIsVnw",
          "title": "Data structures  Array implementation of Queue",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SM1HwOjeRGE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SM1HwOjeRGE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SM1HwOjeRGE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "MTRHD",
          "liveBroadcastContent": "none",
          "publishTime": "2015-11-17T09:53:57Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "rbnNGvPZBF7cqsMtQpkdkOaqryM",
        "id": {
          "kind": "youtube#video",
          "videoId": "a3AVci8c5oU"
        },
        "snippet": {
          "publishedAt": "2020-08-10T22:47:25Z",
          "channelId": "UCJX2md6km6k5d1Ha6_pRvhg",
          "title": "Stack and it&#39;s implementation by using Array",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/a3AVci8c5oU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/a3AVci8c5oU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/a3AVci8c5oU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Mohit Jain",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-10T22:47:25Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "mXTI0A8GFFPzpDz50iIEuCyDK3U",
        "id": {
          "kind": "youtube#video",
          "videoId": "hDHE38rlA-c"
        },
        "snippet": {
          "publishedAt": "2018-08-05T00:36:00Z",
          "channelId": "UCwluLAvHjFyajnrs_50CHPA",
          "title": "Transforming Our Everyday Coding Into The Master Code",
          "description": "Transforming Our Everyday Coding Into The Master Code.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hDHE38rlA-c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hDHE38rlA-c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hDHE38rlA-c/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "AudioScape",
          "liveBroadcastContent": "none",
          "publishTime": "2018-08-05T00:36:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "7RSeGRI0L8aWWCnccUoFDnH8qtw",
        "id": {
          "kind": "youtube#video",
          "videoId": "Na22c3wfNuE"
        },
        "snippet": {
          "publishedAt": "2020-05-11T06:19:52Z",
          "channelId": "UC1qaer98vsyC2s-ETyu7OXA",
          "title": "5  Data Structure and Algorithms   Lab control  Statement  If Else, If Else if, Nested If",
          "description": "5 Data Structure and Algorithms Lab control Statement If Else, If Else if, Nested If.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Na22c3wfNuE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Na22c3wfNuE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Na22c3wfNuE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Keo Tongheng",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-11T06:19:52Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "yO70PU7Kpx7AH6RmwTlnF-w-rj0",
        "id": {
          "kind": "youtube#video",
          "videoId": "ne_xznfStaU"
        },
        "snippet": {
          "publishedAt": "2020-05-11T06:17:43Z",
          "channelId": "UC1qaer98vsyC2s-ETyu7OXA",
          "title": "2   Data Structure and Algorithms   Lab Assignment Statement",
          "description": "2 Data Structure and Algorithms Lab Assignment Statement.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ne_xznfStaU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ne_xznfStaU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ne_xznfStaU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Keo Tongheng",
          "liveBroadcastContent": "none",
          "publishTime": "2020-05-11T06:17:43Z"
        }
      }
    ]
  })

//   useEffect(() => {
//     axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=datastructureprogramming&type=video&videoCategoryId=10&key=AIzaSyBU0WQHc0bGDWhmwdtni7SnYzvn_vsmHVk')
// .then(function (response) {
// // handle success
// console.log(response.data.items[0].id.videoId);

// setData(response.data.items)
// })
// .catch(function (error) {
// // handle error
// console.log(error);
// })
// .then(function () {
// // always executed
// });
// },[])
  

  

  return (  

    <div className="App">
      <NavBar/>
      <Container>
        <List data={data} />
      </Container>
    </div>
  );
}

export default App;
