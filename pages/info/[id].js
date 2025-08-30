import { useRouter } from 'next/router'
import content from '../../data/content.json'
import Link from 'next/link'

export default function InfoPage(){
  const router = useRouter()
  const { id } = router.query
  const item = content.find(c=>c.id === id)
  if(!item) return <div style={{padding:40}}>Loading or not found...</div>

  return (
    <div>
      <div className="header">
        <div className="container">
          <img src="https://i.postimg.cc/YCHPphjW/BLUE-STORE-29-08-2025.gif" alt="banner" />
          <div className="divider"></div>
          <h1>{item.title}</h1>
        </div>
      </div>

      <main className="container" style={{paddingTop:20}}>
        <section className="card">
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <div style={{marginTop:12}}>
            <Link href="/"><a className="btn">Back Home</a></Link>
          </div>
        </section>
      </main>
    </div>
  )
}
