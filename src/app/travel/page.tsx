'use client';

import React, { useContext, useState, useEffect } from 'react';
import { list, reccomendPoint, CountryItem } from '../../context/ListContext';
import '../../css/layout/_travel.scss';

const countryList: CountryItem[] = [
  {
    id: 'Europa',
    name: 'イタリア',
    recommend: 94,
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
    name: 'フランス',
    recommend: 78,
    text: 'パリのフランスパンは異常に美味しいです。新幹線に乗る際は分刻みで変動するので、大体の相場を掴む、もしくはその辺の人にいくら位か聞くと高値で乗らなくて済みます。',
  },
  {
    id: 'Europa',
    name: 'クロアチア',
    recommend: 72,
    text: 'お洒落なカフェやバルが多かったので、好きな人は好きだと思います。恐らく大多数の人がセルビアにいい印象が全くなく、これから行くと伝えるともの凄い心配してくれます。',
  },
  {
    id: 'Europa',
    name: 'セルビア',
    recommend: 72,
    text: '意外にご飯も美味しいし、地元の人も困ってる時にはめちゃ優しくなります。ベオグラードはナイトライフが充実していて、好きな人には面白いかもです。',
  },
  {
    id: 'North America',
    name: 'アメリカ',
    recommend: 83,
    text: 'LAとサンフランシスコしかないです。LA出身のミュージシャンが好きで若い頃は行っていました。',
  },
  {
    id: 'North America',
    name: 'メキシコ',
    recommend: 91,
    text: '僕が訪れた国の中では一番日本人の味覚に近い感じがしました。パクチーが苦手な人は克服してから行った方がいいです。カンクンもいいですが、南に行くとあるのプラヤデルカルメンもローカル感があっていいです。',
  },
  {
    id: 'Caribe',
    name: 'ジャマイカ',
    recommend: 16,
    text: 'レゲエが好きなら。お金をもって現地人となるべく避けた旅行なら行ってもいいかと。デボンアイスは世界で一番美味しいアイスです（僕調べです）。',
  },
  {
    id: 'Caribe',
    name: 'セントマーティン',
    recommend: 67,
    text: '有名な飛行機の発着陸以外見るものがないです。宿もケチらないで高級ホテルに泊まらないとビーチに辿り着くのにえらい時間がかかります。',
  },
  {
    id: 'Caribe',
    name: 'アンギラ',
    recommend: 87,
    text: 'セントマーチンから船で行けます。基本は高級リゾートなんですが、ギチギチに詰まってないのでゆっくりした時間を過ごせます。',
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
    recommend: 51,
    text: 'トータルで1年以上滞在しました。たまたま友達が出来たのでいましたが、あまり治安もよくないし観光では微妙です。',
  },
  {
    id: 'South America',
    name: 'ペルー',
    recommend: 59,
    text: '少し小高いレストランに行けばご飯が美味しいです。マチュピチュやクスコに行ってないのですが、次にペルーに行っても首都のリマを歩き回ってる気がします。',
  },
  {
    id: 'South America',
    name: 'エクアドル',
    recommend: 46,
    text: '首都のキトは交通も発展しているし、コンパクトな町で生活しやすかったです。中華が美味しかったです。',
  },
  {
    id: 'South America',
    name: 'チリ',
    recommend: 61,
    text: '映画や小説が好きな人は面白いかもしれません。ネルーダ（詩人）の生地が記念館になってるというのを知ったので、町までは行きましたが治安があまりよろしくなく、記念館に到着せずに満足しちゃいました。',
  },
  {
    id: 'South America',
    name: 'アルゼンチン',
    recommend: 78,
    text: '駆け足で見たので、ブエノスアイレスに数週間でも滞在してみたいです。治安はよくはないですしゴミもめっちゃ落ちてました。それでも、なぜか綺麗な感じのする不思議な町で、また行ってみたいです。',
  },
  {
    id: 'Asia',
    name: 'インドネシア',
    recommend: 75,
    text: 'バリしか行った事ないです。バリは高級ホテルが密集してる所以外は面白かったです。ご飯も美味しいです。可能ならバイクを借りた方が渋滞にはまらないです。',
  },
  {
    id: 'Asia',
    name: 'レバノン',
    recommend: 83,
    text: '中東のパリは名前負けしないです。綺麗な町とアラブ特有の猥雑さが交じり合った独特な街並みをしています。いい感じの雰囲気です。',
  },
  {
    id: 'Asia',
    name: 'イスラエル',
    recommend: 81,
    text: '予想外の国の一つです。戦争のイメージとは治安も空気感も優しい感じです。パレスチナ系以外は。。。',
  },
  {
    id: 'Asia',
    name: 'ドバイ',
    recommend: 75,
    text: '世界の話題の店や物が集まってます。個人的にはあまり面白くなかったですが、好きな人は好きかもしれません。アブダビになりますがフェラーリランドのジェットコースターは乗る価値ありです。',
  },
];


const ItemsBox = ({ countryName, filterText }: { countryName: string; filterText: string }) => {
  const lists = useContext(list);
  let recoPoint = useContext(reccomendPoint);

  if (typeof recoPoint === 'string') {
    recoPoint = Number(recoPoint) || 0;
  }

  const shuffleNumberCounter = (target: HTMLElement) => {
    const targetNum = Number(target.getAttribute('data-num'));
    if (!targetNum) {
      return;
    }

    let counterData: ReturnType<typeof setInterval> | null = null;
    const speed = 1000 / targetNum;
    let initNum = 0;

    const countUp = () => {
      if (Number.isInteger(targetNum)) {
        target.innerHTML = initNum < 10 ? `0${initNum}` : `${initNum}`;
      } else {
        target.innerHTML = `${initNum}`;
      }
      initNum++;
      if (initNum > targetNum) {
        target.innerHTML = `${targetNum}`;
        if (counterData) clearInterval(counterData);
      }
    };

    counterData = setInterval(countUp, speed);
  };

  useEffect(() => {
    const boxes = document.querySelectorAll<HTMLElement>('.items_box-rec');
    const options = { threshold: 1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        setTimeout(() => {
          if (entry.isIntersecting) {
            shuffleNumberCounter(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }, 1000 + 500 * index);
      });
    }, options);

    boxes.forEach((box) => observer.observe(box));
    return () => {
      observer.disconnect();
    };
}, [lists, countryName, filterText, recoPoint]);

  // 1秒後に isShow クラスを外す副作用
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const boxElements = document.getElementsByClassName('items_box');
      Array.from(boxElements).forEach((el) => el.classList.remove('isShow'));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [lists, countryName, filterText, recoPoint]); 

  return (
    <div className='items_wrap'>
      {lists.map((item, i) => {
        const numText = item.name.includes(filterText) ? 1 : 0;

        if (item.id === countryName && item.recommend >= recoPoint && numText > 0) {
          return (
            <div key={i} className='items_box isShow'>
              <ul>
                <li className='items_box-name'>{item.name}</li>
                <li className='items_box-rec' data-num={item.recommend}>00</li>
                <li className='items_box-text'>{item.text}</li>
              </ul>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};


const ItemsArea = ({
  listCatArr,
  selectId,
  selectRec,
  filterText,
}: {
  listCatArr: string[];
  selectId: string;
  selectRec: string | number;
  filterText: string;
}) => {
  const lists = useContext(list);

  const listItemsCat = listCatArr.filter((value) => {
    if (selectId === '') {
      return true;
    }
    return selectId === value;
  });

  const listItemsRec = listItemsCat.filter((cat) => {
    const catRecArr = lists.filter((v) => v.id === cat);
    return catRecArr.some((v) => {
      const matchText = v.name.indexOf(filterText) !== -1;
      const meetsRecommend = v.recommend >= Number(selectRec || 0);
      return meetsRecommend && matchText;
    });
  });

  return (
    <div className='items'>
      {listItemsRec.map((value, i) => (
        <div key={i} className='items_cat'>
          <h3>{value}</h3>
          <ItemsBox countryName={value} filterText={filterText} />
        </div>
      ))}
    </div>
  );
};

const SearchArea = ({
  listCatArr,
  listRecoArr,
  filterText,
  handleChangeCountry,
  handleChangeSelect,
  handleChangeText,
}: {
  listCatArr: string[];
  listRecoArr: number[];
  filterText: string;
  handleChangeCountry: React.ChangeEventHandler<HTMLSelectElement>;
  handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement>;
  handleChangeText: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className='search'>
      <form className='search_form'>
        <div>
          <input
            className='search_window'
            type='text'
            placeholder='国名ー全角カタカナ'
            value={filterText}
            onChange={handleChangeText}
          />
        </div>
        <label className='search_select search_select-area'>
          地域
          <select onChange={handleChangeCountry} defaultValue=''>
            <option value=''>all</option>
            {listCatArr.map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>

        <label className='search_select search_select-points'>
          おすすめ度
          <select onChange={handleChangeSelect} defaultValue=''>
            <option value=''>all</option>
            {listRecoArr.map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

const Table = () => {
  const lists = useContext(list);
  const [filterText, setFilterText] = useState('');
  const [selectId, setSelectId] = useState('');
  const [selectRec, setSelectRec] = useState<string | number>('');

  const listidArr = Array.from(new Set(lists.map((v) => v.id)));
  const listRecoArr = [50, 60, 70, 80, 90, 100];

  const handleChangeCountry: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const val = event.target.value;
    resetItems();
    setTimeout(() => {
      setSelectId(val);
    }, 1000);
  };

  const handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const val = event.target.value;
    resetItems();
    setTimeout(() => {
      setSelectRec(val);
    }, 1000);
  };

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFilterText(event.target.value);
  };

  const resetItems = () => {
    const boxRecs = document.querySelectorAll<HTMLElement>('.items_box-rec');
    const boxes = document.querySelectorAll<HTMLElement>('.items_box');
    boxRecs.forEach((el) => (el.innerHTML = '00'));
    boxes.forEach((el) => el.classList.add('isShow'));
  };

  return (
    <div className='travel_wrap'>
      <SearchArea
        listCatArr={listidArr}
        handleChangeSelect={handleChangeSelect}
        handleChangeText={handleChangeText}
        listRecoArr={listRecoArr}
        handleChangeCountry={handleChangeCountry}
        filterText={filterText}
      />
      <reccomendPoint.Provider value={Number(selectRec) || 0}>
        <ItemsArea listCatArr={listidArr} selectId={selectId} selectRec={selectRec} filterText={filterText} />
      </reccomendPoint.Provider>
    </div>
  );
};

const Travel = () => {
  return (
    <section className='travel'>
      <div className='inner'>
        <h2 className='travel_ttl'>Travel</h2>
        <p className='travel_subttl'>昔、海外を回ってたころのヒストリーを一覧にしてみました。</p>
        <list.Provider value={countryList}>
          <Table />
        </list.Provider>
      </div>
    </section>
  );
};

export default Travel;
