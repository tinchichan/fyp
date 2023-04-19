import { useEffect, useCallback, useState, useMemo } from "react";

const defaultData = [{
  "name": "April 14, 2023 5:41:28 PM",
  "date": "2023-04-14T17:41:29+08:00",
  "image": "office",
  "game": {
    "history": {
      "image": [],
      "character": [
        "show character y normal"
      ],
      "scene": [
        "show scene office with fadeIn"
      ],
      "label": [],
      "canvas": [],
      "choice": [],
      "clear": [],
      "conditional": [],
      "jump": [],
      "particle": [],
      "music": [
        "play music mainTheme with loop"
      ],
      "sound": [],
      "voice": [],
      "sceneElements": [
        []
      ],
      "sceneState": [
        {
          "characters": [],
          "images": [],
          "textBoxMode": "adv"
        }
      ],
      "background": [
        "show background office with fadeIn"
      ],
      "video": [],
      "nvl": []
    },
    "state": {
      "step": 3,
      "label": "Start",
      "canvas": [],
      "particles": "",
      "music": [
        {
          "statement": "play music mainTheme with loop",
          "paused": false
        }
      ],
      "sound": [],
      "voice": [],
      "scene": "show scene office with fadeIn",
      "background": "show background office with fadeIn",
      "characters": [
        "show character y normal"
      ],
      "images": [],
      "videos": []
    },
    "storage": {
      "player": {
        "name": "John Doe",
        "student_id": "12654000",
        "hp": 50,
        "stage": 1,
        "usdScore": 0,
        "usdfq": {
          "q": ""
        },
        "classScore": 0,
        "classfq": {
          "q": ""
        },
        "componentScore": 0,
        "componentfq": {
          "q": ""
        },
        "commuScore": 0,
        "commufq": {
          "q": ""
        }
      },
      "ucddb": {
        "q1": {
          "q": "What is the primary purpose of a Use Case Diagram?",
          "a": "c) To represent the functional requirements of a system"
        },
        "q2": {
          "q": "In a Use Case Diagram, what does an actor represent?",
          "a": "c) A system or a person that interacts with the system"
        },
        "q3": {
          "q": "What symbol is used to represent a use case in a Use Case Diagram?",
          "a": "b) A circle or ellipse"
        },
        "q4": {
          "q": "What does the \"include\" relationship in a Use Case Diagram indicate?",
          "a": "c) A use case that is always executed as part of another use case"
        },
        "q5": {
          "q": "Which of the following is NOT a valid relationship between use cases in a Use Case Diagram?",
          "a": "d) Composition"
        },
        "q6": {
          "q": "What does the \"extend\" relationship in a Use Case Diagram signify?",
          "a": "a) An optional or conditionally executed behavior"
        },
        "q7": {
          "q": "Which of the following is a valid relationship between actors in a Use Case Diagram?",
          "a": "c) Generalization"
        },
        "q8": {
          "q": "In a Use Case Diagram, what does a system boundary represent?",
          "a": "a) The scope of the system"
        },
        "q9": {
          "q": "How is an \"include\" relationship represented in a Use Case Diagram?",
          "a": "d) A dashed arrow with an open arrowhead pointing towards the including use case"
        },
        "q10": {
          "q": "How is an \"extend\" relationship represented in a Use Case Diagram?",
          "a": "b) A dashed arrow with a triangle arrowhead pointing towards the extended use case"
        }
      }
    }
  }
}
];

// ----------------------------------------------------------------------

// async function fetchData() {
//   const response = await fetch('https://api.jsonbin.io/v3/c/6438fa6ac0e7653a05a41ff6/bins', {
//     method: 'GET',
//     headers: {
//       'X-Master-Key': '$2b$10$wMaUbDOWxD14dH3NzsrMD.FvLhIcRaD7ejGq3Ta8ZxxMVA/ETgWrq',
//     },
//   });
//   const d = await response.json();
//   test = d.map((i) => i.record);
//   console.log(test);
//   //fetch the student id and score
//   for (let index = 0; index < test.length; index++) {
//     const response2 = await fetch(`https://api.jsonbin.io/v3/b/${test[index]}`, {
//       method: 'GET',
//       headers: {
//         'X-Master-Key': '$2b$10$wMaUbDOWxD14dH3NzsrMD.FvLhIcRaD7ejGq3Ta8ZxxMVA/ETgWrq',
//       },
//     });
//     const d = await response2.json();
//     data.push(d);
//     console.log(data);
//   }
// }
// fetchData();

export const useFetchingUsers = () => {

  const [data, setData] = useState(defaultData);

  // sawa any idea?

  const delay = t => new Promise((res, rej) => setTimeout(() => res(), t));

  // useEffect(() => {
  //   fetch('https://api.jsonbin.io/v3/c/6438fa6ac0e7653a05a41ff6/bins', {
  //     method: 'GET',
  //     headers: {
  //       'X-Master-Key': '$2b$10$wMaUbDOWxD14dH3NzsrMD.FvLhIcRaD7ejGq3Ta8ZxxMVA/ETgWrq',
  //     },
  //   }).then(response => {
  //     response.json().then(d => {
  //       const test = d.map((i) => i.record);

  //       Promise.all(Array(test.length).fill(0).map((_, i) => {
  //         return delay(i * 2000).then(() => 
  //           fetch(`https://api.jsonbin.io/v3/b/${test[i]}`, {
  //             method: 'GET',
  //             headers: {
  //               'X-Master-Key': '$2b$10$wMaUbDOWxD14dH3NzsrMD.FvLhIcRaD7ejGq3Ta8ZxxMVA/ETgWrq',
  //             },
  //           })
  //         )
  //       }))
  //         .then(e => {
  //           Promise.all(e.map(o => o.json()))
  //             .then(e => {
  //               console.log([
  //                 ...data,
  //                 ...e.map(e => e.record),
  //               ]);
  //               setData([
  //                 ...data,
  //                 ...e.map(e => e.record),
  //               ]);
  //             })
  //         })
  //     });
  //   });
  // },[]);

  const users = useMemo(() => {
    return data.map((d, index) => ({
      id: index,
      avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
      name: d.game?.storage?.player?.name ?? "",
      score: d.game?.storage?.player?.hp ?? "",
      stage: d.game?.storage?.player?.stage ?? "",
      student_id: d.game?.storage?.player?.student_id ?? "",
    }));
  },[data])

  return { users };
}
