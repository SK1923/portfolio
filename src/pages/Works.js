import React, { useState, useEffect, useContext } from 'react';
import '../css/layout/_work.scss';

export const list = React.createContext();
export const reccomendPoint = React.createContext();

const countryList = [
  {
    id: 'Europa',
    name: 'イタリア',
    recommend: 90,
    text: '食べ物も美味しいです。ミラノはメンズファッションのお買い物ならパリより揃ってると個人的には思っています。',
  },
  {
    id: 'Europa',
    name: 'スペイン',
    recommend: 100,
    text: 'バルセロナは最高の町だと思います。スペインのどの町でも道を聞いたら近くまで連れて行ってくれる位優しいのに売店、スーパーなどあらゆる所でボッタくられます。',
  },
  {
    id: 'Europa',
    name: 'クロアチア',
    recommend: 70,
    text: 'お洒落なカフェやバルが多かったので、好きな人は好きだと思います。恐らく大多数の人がセルビアにいい印象が全くなく、これから行くと伝えるともの凄い心配してくれます。',
  },
  {
    id: 'Europa',
    name: 'セルビア',
    recommend: 70,
    text: '意外にご飯も美味しいし、地元の人も困ってる時にはめちゃ優しくなります。ベオグラードはナイトライフが充実していて、好きな人には面白いかもです。',
  },
  {
    id: 'North America',
    name: 'アメリカ',
    recommend: 80,
    text: 'LAとサンフランシスコしかないです。LA出身のミュージシャンが好きで若い頃は行っていました。',
  },
  {
    id: 'North America',
    name: 'メキシコ',
    recommend: 90,
    text: '僕が訪れた国の中では一番日本人の味覚に近い感じがしました。パクチーが苦手な人は克服してから行った方がいいです。カンクンもいいですが、南に行くとあるのプラヤデルカルメンもローカル感があっていいです。',
  },
  {
    id: 'Caribe',
    name: 'ジャマイカ',
    recommend: 10,
    text: 'レゲエが好きなら。お金をもって現地人となるべく避けた旅行なら行ってもいいかと。デボンアイスは世界で一番美味しいアイスです（僕調べです）。',
  },
  {
    id: 'Caribe',
    name: 'セントマーティン',
    recommend: 40,
    text: '有名な飛行機の発着陸以外見るものがないです。宿もケチらないで高級ホテルに泊まらないとビーチに辿り着くのにえらい時間がかかります。',
  },
  {
    id: 'Caribe',
    name: 'バルバドス',
    recommend: 100,
    text: '治安もコスパも島にしてはいいです。肌以上にサラサラになるビーチがあります。カリブ海の中で一番ビーチへのアクセスが容易でした。',
  },
  {
    id: 'South America',
    name: 'コロンビア',
    recommend: 50,
    text: 'トータルで1年以上滞在しました。たまたま友達が出来たのでいましたが、あまり治安もよくないし観光では微妙です。',
  },
  {
    id: 'South America',
    name: 'ペルー',
    recommend: 50,
    text: '少し小高いレストランに行けばご飯が美味しいです。マチュピチュやクスコに行ってないのですが、次にペルーに行っても首都のリマを歩き回ってる気がします。',
  },
  {
    id: 'South America',
    name: 'チリ',
    recommend: 50,
    text: '映画や小説が好きな人は面白いかもしれません。ネルーダ（詩人）の生地が記念館になってるというのを知ったので、町までは行きましたが治安があまりよろしくなく、記念館に到着せずに満足しちゃいました。',
  },
  {
    id: 'South America',
    name: 'アルゼンチン',
    recommend: 70,
    text: '駆け足で見たので、ブエノスアイレスに数週間でも滞在してみたいです。治安はよくはないですしゴミもめっちゃ落ちてました。それでも、なぜか綺麗な感じのする不思議な町でした。また行ってみたいです。',
  },
  {
    id: 'Asia',
    name: 'インドネシア',
    recommend: 80,
    text: 'バリしか行った事ないです。バリは高級ホテルが密集してる所以外は面白かったです。ご飯も美味しいです。可能ならバイクを借りた方が渋滞にはまらないです。',
  },
];

const ItemsBox = ({ countryName, filterText }) => {
  const lists = useContext(list);
  let recoPoint = useContext(reccomendPoint);

  if (recoPoint === '') {
    recoPoint = 0;
  }

  // count up
  const shuffleNumberCounter = (target) => {
    const targetNum = Number(target.getAttribute('data-num'))

    if (!targetNum) {
      return
    }

    let counterData = null
    const speed = 1000 / targetNum
    let initNum = 0

    const countUp = () => {
      if (Number.isInteger(targetNum)) {
        if (initNum < 10) {
          target.innerHTML = `0${initNum}`;
        } else {
          target.innerHTML = initNum
        }
      } else {
        target.innerHTML = `${initNum}`
      }

      initNum++

      if (initNum > targetNum) {
        target.innerHTML = targetNum
        clearInterval(counterData)
      }
    }

    counterData = setInterval(countUp, speed)
  }

  useEffect(() => {
    const boxes = document.querySelectorAll('.items_box-rec');
    const options = {
      threshold: 1
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    boxes.forEach(box => {
      observer.observe(box);
    });

    function doWhenIntersect(entries) {
      entries.forEach((entry, index) => {
        setTimeout(() => {
          if (entry.isIntersecting) {
            shuffleNumberCounter(entry.target);
            observer.unobserve(entry.target);
          }
        }, 1000 + 500 * index);
      });
    }
  })

  function classCheck() {
    setTimeout(() => {
      const box = document.getElementsByClassName('items_box');
      const boxArr = Array.from(box);
      boxArr.forEach(value => {
        value.classList.remove('isShow')
      })

    }, 1000)

  }

  return (
    <div className='items_wrap'>
      {lists.map((item, i) => {
        //filterNum
        let numText;
        let filterNum = 0;
        for (let i = 0; i < item.name.length; i++) {
          let text = item.name;
          if (text.indexOf(filterText) !== -1) {
            numText = 1;
          }
          filterNum += numText;
        }
        if (item.id === countryName && item.recommend >= recoPoint && filterNum > 0) {
          return (
            <div key={i} className={'items_box isShow ' + classCheck()}>
              <ul>
                <li className='items_box-name'>{item.name}</li>
                <li className='items_box-rec' data-num={item.recommend}>00</li>
                <li className='items_box-text'>{item.text}</li>
              </ul>
            </div>
          )
        }
        return void(0);
      })}
    </div>
  )
}

const ItemsArea = ({ listCatArr, selectId, selectRec, filterText }) => {
  const lists = useContext(list);
  let recFlag = false;

  // country name 
  let listItemsCat = listCatArr.map((value) => {
    if (selectId === '') {
      return value;
    } else if (selectId === value) {
      return value
    } else {
      return void(0);
    }
  });

  // there is recitem
  let listItemsRec = listItemsCat.map((value) => {
    let catRecArr = lists.filter((v) => {
      if (v.id === value) {
        return v
      }
      return void(0);
    })

    catRecArr.map((value) => {
      //filter num
      let numText;
      let filterNum = 0;
      for (let i = 0; i < value.name.length; i++) {
        let text = value.name;
        if (text.indexOf(filterText) !== -1) {
          numText = 1;
        }
        filterNum += numText;
      }
      // recomend point
      if (value.recommend >= selectRec && filterNum > 0) {
        recFlag = true
      }
      return void(0);
    });

    if (recFlag) {
      recFlag = false;
      return value
    }
    return void(0);
  });

  // rec & cat list
  let listItemCatRec = listItemsRec.map((value, i) => {
    if (value === listItemsCat[i]) {
      return value
    }
    return void(0);
  })

  return (
    <div className='items'>

      {listItemCatRec.map((value, i) => {
        if (value !== undefined) {
          return (
            <div key={i} className='items_cat'>
              <h3>{value}</h3>
              <ItemsBox
                countryName={value}
                filterText={filterText} />
            </div>
          )
        }
        return void(0);
      })}

    </div>
  )

}

const SearchArea = ({ listCatArr, listRecoArr, filterText, handleChangeCountry, handleChangeSelect, handleChangeText }) => {
  return (
    <div className='search'>
      <form className='search_form'>
        <div>
          <input className='search_window' type='text' placeholder='国名ー全角カタカナ' value={filterText} onChange={handleChangeText}></input>
        </div>
        <label className='search_select search_select-area'>
          地域
          <select onChange={handleChangeCountry}>
            <option value="">all</option>
            {listCatArr.map((value, i) => {
              return <option key={i} value={value}>{value}</option>
            })}
          </select>
        </label>

        <label className='search_select search_select-points'>
          おすすめ度
          <select onChange={handleChangeSelect}>
            <option value="">all</option>
            {listRecoArr.map((value, i) => {
              return <option key={i} value={value}>{value}</option>
            })}
          </select>
        </label>
      </form>
    </div>
  )
}

const Table = () => {
  const lists = useContext(list);

  const [filterText, setFilterText] = useState('');
  const [selectId, setSelectId] = useState('');
  const [selectRec, setSelectRec] = useState('');
  const listid = lists.map((value) => {
    return value.id
  })
  let listidArr = [...new Set(listid)];
  let listRecoArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const handleChangeCountry = (event) => {
    let boxes = document.getElementsByClassName('items_box');
    let boxRec = document.getElementsByClassName('items_box-rec');
    let boxesArr = Array.from(boxes);
    let boxRecArr = Array.from(boxRec);
    boxRecArr.forEach(value => {
      value.innerHTML = '00'
    })
    boxesArr.forEach(value => {
      value.classList.add('isShow')
    })
    setTimeout(() => {
      setSelectId(event.target.value);
    }, 1000)
  };

  const handleChangeSelect = (event) => {
    let boxes = document.getElementsByClassName('items_box');
    let boxRec = document.getElementsByClassName('items_box-rec');
    let boxesArr = Array.from(boxes);
    let boxRecArr = Array.from(boxRec);
    boxRecArr.forEach(value => {
      value.innerHTML = '00'
    })
    boxesArr.forEach(value => {
      value.classList.add('isShow')
    })
    setTimeout(() => {
      setSelectRec(event.target.value);
    }, 1000)
  };
  const handleChangeText = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div className='work_wrap'>
      <SearchArea
        listCatArr={listidArr}
        handleChangeSelect={handleChangeSelect}
        handleChangeText={handleChangeText}
        setSelectId={setSelectId}
        listRecoArr={listRecoArr}
        handleChangeCountry={handleChangeCountry}
        filterText={filterText} />
      <reccomendPoint.Provider value={selectRec}>
        <ItemsArea
          listCatArr={listidArr}
          selectId={selectId}
          selectRec={selectRec}
          filterText={filterText} />
      </reccomendPoint.Provider>
    </div>
  )

}

const Work = () => {
  return (
    <section className='work'>
      <div className='inner'>
        <h2 className='work_ttl'>Work</h2>
        <p className='work_subttl'>昔、海外を回ってたころのヒストリーを一覧にしてみました。</p>
        <list.Provider value={countryList}>
          <Table />
        </list.Provider>
      </div>
    </section>
  );
}
export default Work;
