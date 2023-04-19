import { useEffect, useCallback, useState, useMemo } from "react";

const defaultData = [];

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
