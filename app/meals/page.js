import Link from 'next/link'

export default function Meals() {
  return (
  <main>
    <h1>Meal Page</h1>
    <p><Link href='/meals/recipe-1'>recipe 1</Link></p>
  </main>
  )
}
