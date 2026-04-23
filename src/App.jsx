import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import reactLogo from './assets/dots.svg';
import ua from './image/ua.jpg';
import github from './image/github.png';
import x from './image/x.png';
import insta from './image/insta.png';
import tTherays from './image/t-therays.png';
import linkIcon from './image/link.png'; // なければ後でOK
import './App.css';

function Home({ setPage }) {
  return (
    <div className="home-page">
      <div id="home">
        <a href="https://vite.dev" target="_blank" rel="noreferrer"></a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            style={{ width: '40%', height: 'auto' }}
          />
        </a>
      </div>

      <h2>
        <span
          style={{ cursor: 'pointer', color: '#646cff' }}
          onClick={() => setPage('about')}
        >
          Learn Asahi
        </span>
      </h2>

      <p>
        <code>Node.js</code>と<code>React</code>で作って
        <code>GitHub</code>でデプロイしました.
      </p>
    </div>
  );
}

function About() { 
  return (
    <>
      <h1>About・Profile</h1>
      <div className="about-container">
        <div className="about-image">
          <img alt="雷" src={ua} />
        </div>

        <div className="about-text">
          <h1><span style={{ fontSize: '50px' }}>内田 朝陽</span> <br></br> Uchida Asahi</h1>
          <h2>出身：熊本</h2>
          <h3>学部：情理(2回~) 経済(1回)<br></br>年齢：28卒</h3>
          <p>京都産業大学 情報理工学部の内田朝陽です。主にWeb系に興味があり、React・Node.js、CSSなどを使ってバイブコーディングを行なっています。</p>
          <p>あまてくというエンジニアコミュニティの運営に携わっており、ハッカソンの開催やプロダクト制作の企画や運営を行っています。<br></br>他にC.A.C.というデジタル創作系の部活や登山部に所属し活動しています。</p>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="project-p">
        <h2>プロジェクト</h2>
        <p>今までに取り組んだプロジェクトの一部を紹介します。</p>
      </div>

      <div className="projects-grid">
        {/* 1個目 */}
        <div className="project-card">
          <img src={ua} alt="project1" />
          <h2>ポートフォリオサイト</h2>
          <p>React・Node.js、CSSで作成しGithubにデプロイした個人ポートフォリオサイト。ReactによりSPA化しています。レスポンシブデザインに対応する予定。</p>
          <div className="project-links">
            <a href="https://auksu.github.io/reactpage2/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt="site" 
              style={{ width: '15px', height: 'auto' }}
              />
              Site
            </a>
            <p></p>
            <a href="https://github.com/auksu/reactpage2" target="_blank" rel="noreferrer">
              <img src={github} alt="github" style={{ width: '15px', height: 'auto' }}
              />
              GitHub
            </a>
          </div>
        </div>

        {/* 2個目 */}
        <div className="project-card">
          <img src={github} alt="project2" />
          <h2>部内向けサンプルページ</h2>
          <p>React・Node.js、CSSを部員が学ぶために作成した基本的なページ</p>
                    <div className="project-links">
            <a href="https://auksu.github.io/food_react/" target="_blank" rel="noreferrer">
              <img src={linkIcon} alt="site" 
              style={{ width: '15px', height: 'auto' }}
              />
              Site
            </a>
            <p></p>
            <a href="https://github.com/auksu/food_react" target="_blank" rel="noreferrer">
              <img src={github} alt="github" style={{ width: '15px', height: 'auto' }}
              />
              GitHub
            </a>
          </div>
        </div>

        {/* 追加していけばOK */}
      </div>
      <div className='icons8'>
        <p>
          <br></br><a target="_blank" href="https://icons8.com/icon/83168/external-link">外部リンク</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>
      </div>
    </>
  );
}

function LinksPage() { 
  return (
    <>
      <div id = "hoge" className="myphoto">
        <a href="https://github.com/auksu">
          <img alt="github" width="100" src={github} />
        </a>
        <a href="https://x.com/ua_Rai_">
          <img alt="x" width="100" src={x} />
        </a>
        <a href="https://www.instagram.com/auuauaau1887/">
          <img alt="insta" width="100" src={insta} />
        </a>
        <div className='icons8'>
          <p><a target="_blank" href="https://icons8.com/icon/12599/github">GitHub</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/phOKFKYpe00C/x">ツイッターx</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          <p><a target="_blank" href="https://icons8.com/icon/59813/instagram">インスタグラム</a> アイコン by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        </div>
      </div>
    </>
  );
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <span onClick={() => setPage('home')}>
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
              style={{ width: '30%', height: 'auto' }}
            />
          </span>
        </div>

        <div className="nav-right">
          <span onClick={() => setPage('about')}>About・Profile</span>
          <span onClick={() => setPage('projects')}>Projects</span>
          <span onClick={() => setPage('links')}>LINKS</span>
        </div>
      </nav>

      <main
        key={page}
        className={`${page === 'home' ? 'home-bg' : 'white-bg'} fade`}
        >
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'about' && <About />}
        {page === 'projects' && <Projects />}
        {page === 'links' && <LinksPage />}
      </main>
    </>
  );
}

export default App;