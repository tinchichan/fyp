async function fetchData(getSave,getName,getScore) {
    const response = await fetch('https://api.jsonbin.io/v3/c/6438fa6ac0e7653a05a41ff6/bins', {
      method: 'GET',
      headers: {
        'X-Master-Key': '$2b$10$wMaUbDOWxD14dH3NzsrMD.FvLhIcRaD7ejGq3Ta8ZxxMVA/ETgWrq',
      },
    });
    const d = await response.json();
    test = d.map((i) => i.record);
    console.log(test);
    //fetch the student id and score
    for (let index = 0; index < test.length; index++) {
      const response2 = await fetch(`https://api.jsonbin.io/v3/b/${test[index]}`, {
        method: 'GET',
        headers: {
          'X-Master-Key': '$2b$10$wMaUbDOWxD14dH3NzsrMD.FvLhIcRaD7ejGq3Ta8ZxxMVA/ETgWrq',
        },
      });
      const d = await response2.json();
      data.push(d);
      console.log(data);
    }
    getSave();
    getName();
    getScore();
  }