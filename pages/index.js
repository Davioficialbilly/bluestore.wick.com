import Link from 'next/link'
import content from '../data/content.json'
import { useState } from 'react'

export default function Home(){
  const [q, setQ] = useState('');
  const filtered = content.filter(item=> (item.title + ' ' + item.summary).toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <header className="header">
        <div className="container">
          <img src="https://i.postimg.cc/YCHPphjW/BLUE-STORE-29-08-2025.gif" alt="Blue Store Banner" />
          <div className="divider"></div>
          <h1>🧠 Steal a Brainrot — Blue Store Hub</h1>
          <p>Centralized info, guides, rules and community links.</p>
        </div>
      </header>

      <main className="container">
        <section>
          <h2>Quick Links</h2>
          <div className="grid">
            <div className="card">
              <h3>About the Game</h3>
              <p>Overview, modes and lore.</p>
              <Link href="/info/game-overview"><a className="btn">Open</a></Link>
            </div>
            <div className="card">
              <h3>Blue Store</h3>
              <p>Rules, trading and community.</p>
              <Link href="/info/server-rules"><a className="btn">Open</a></Link>
            </div>
            <div className="card">
              <h3>Guides & Tips</h3>
              <p>Play smarter, not harder.</p>
              <Link href="/info/how-to-play"><a className="btn">Open</a></Link>
            </div>
            <div className="card">
              <h3>Trades & Market</h3>
              <p>Safe trading practices.</p>
              <Link href="/info/trades-guide"><a className="btn">Open</a></Link>
            </div>
          </div>
        </section>

        <section style={{marginTop:30}}>
          <h2>Search & Quick Articles</h2>
          <input value={q} onChange={e=>setQ(e.target.value)} className="search" placeholder="Search articles, guides, rules..." />
          <div id="list" style={{marginTop:12}}>
            {filtered.slice(0,50).map(item=>(
              <div key={item.id} className="card" style={{marginBottom:8}}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link href={`/info/${item.id}`}><a className="btn">Read</a></Link>
              </div>
            ))}
            {filtered.length === 0 && <p style={{marginTop:12}}>No results</p>}
          </div>
        </section>

        <section style={{marginTop:30}}>
          <h2>Community Links</h2>
          <p>Official Discord & partners</p>
          <div className="link-list" style={{marginTop:12}}>
            <a className="link-pill" href="https://discord.gg/5fyfSZrn2W" target="_blank" rel="noreferrer">Blue Store Discord</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="divider"></div>
        <p>✨ Blue Store ┃ Administration & Staff wish you good trades ✨</p>
        <p style={{marginTop:8}}>🌐 SITE HOSTED ON https://vercel.com</p>
      </footer>
    </div>
  )
}
