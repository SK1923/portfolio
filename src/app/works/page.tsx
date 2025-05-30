'use client';

import React from 'react';
import '../../css/layout/_works.scss';

type AboutItem = {
  id: number;
  ttl: string;
  term: string;
  team: string;
  url: string;
  point: string[];
};

const list01: AboutItem[] = [
  {
    id: 0,
    ttl: '化粧品のアンケートLP製作・運用',
    term: '製作期間：5日',
    team: 'プランナー：1名、デザイナー：複数名、フロント：1名',
    url: 'https://needle-biyou.com/lporder/002/all-TK37Pz2yt2zB',
    point: [
      'URLはクローズされていたので上記URLは横展したLPになります。',
      '動画の使用も多かった事から読み込みタイミングなどに気を使って製作しました。',
      '更新や別Verのリリースが頻発した事から、途中からは破綻しない事に重点をおいていました。'
    ],
  },
  {
    id: 1,
    ttl: '企業LP',
    term: '製作期間：5日',
    team: 'プランナー：1名、デザイナー：1名、フロント：1名',
    url: 'https://www.chibabank.co.jp/direct/education/ad/lp_01/',
    point: [
      '別件もあり、短納期でした。',
      '法務関連の記述が多く修正が入るなど、スピードと丁寧さを心がけました。'
    ],
  },
  {
    id: 2,
    ttl: '業務改善',
    term: '製作期間：3日',
    team: 'デザイナー：1名、フロント：1名',
    url: '',
    point: [
      'next15(pages・ts)で静的サイトとしてレンタルサーバーにアップ。',
      'デザインとURLが一致しないという事で一覧を作成',
      'タグ等でソートをかけられるようにし、ソートをかけるタグ等をブラウザでも変更したいという事でjsonファイルをpythonのcgiで変更できるように実装'
    ],
  },
];

const list02: AboutItem[] = [
  {
    id: 0,
    ttl: 'くじを使用したキャンペーン',
    term: '製作期間：2週間',
    team: 'ディレクター：複数名、デザイナー：複数名、フロント：1名、バックエンド：2名',
    url: 'https://toku.yahoo.co.jp/paypay-matsuri202202/lot',
    point: [
      'javaを使用。派遣期間の3年間で4回製作',
      '毎年深夜作業が発生するなど、大変でした。',
      'エンジニア2名と電車もなく朝方に終わった際にレンタルサイクルで家まで帰ったのは、いい思い出です。'
    ],
  },
  {
    id: 1,
    ttl: 'yahoo beauty ランキングページ',
    term: '製作期間：5日',
    team: 'ディレクター：複数名、デザイナー：1名、フロント：1名, バックエンド:1名',
    url: '',
    point: [
      'フロントとして企画から参加。',
      '目標は掲載する美容師の数を増やす事で、美容師を探してるユーザーが自分にあった美容師を見つけられるようにするかでした。',
      '約600枚の画像を読み込ませたり、yahooID等のデータから表示を出し分けたりしました。',
      'バックエンドが用意したデータをデザインに落とし込む際に、表示タイミングやスクリプトのスピード改善を学びました。'
    ],
  },
  {
    id: 2,
    ttl: '社内ツール',
    term: '製作期間：1年',
    team: 'ディレクター：1名、フロント：1名、バックエンド：4名',
    url: '',
    point: [
      'Vue/Nuxt（ts）で製作。キャンペーンのパーセントを計算するツール。',
      'CSSを対応するような人がいなかったので、フロント側のデザインやデータ処理、バリデーションを対応。',
      '退職まで各サービスから上がってくる要望等に都度対応、改善していました。'
    ],
  },
];

const Works = () => {
  return (
    <section className='works'>
      <div className='inner'>
        <h2 className='works_ttl'>works</h2>

        <div className='works_box'>
          <p className='works_box_company'>インターネット広告とメディア・ゲーム事業を柱とする総合IT企業</p>
          <p className='works_box_intro'>LP製作をメインに、業務の効率化等に従事</p>
          <ul className='works_list'>
            {list01.map((value) => (
              <li className='works_item' key={value.id}>
                <p className='works_item_ttl'>{value.ttl}</p>
                <p className='works_item_term'>{value.term}</p>
                <p className='works_item_team'>{value.team}</p>
                <p className='works_item_url'><a href={`${value.url}`} target='_blank' rel="noopener noreferrer">{value.url}</a></p>
                <p className="works_item_point">
                  {value.point.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className='works_box'>
          <p className='works_box_company'>ポータルサイトを中心とした総合インターネットサービス企業</p>
          <p className='works_box_intro'>HPの管理、新規キャンペーンの作成</p>
          <ul className='works_list'>
            {list02.map((value) => (
              <li className='works_item' key={value.id}>
                <p className='works_item_ttl'>{value.ttl}</p>
                <p className='works_item_term'>{value.term}</p>
                <p className='works_item_team'>{value.team}</p>
                <p className='works_item_url'><a href={`${value.url}`} target='_blank' rel="noopener noreferrer">{value.url}</a></p>
                <p className="works_item_point">
                  {value.point.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Works;
