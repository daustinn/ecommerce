export default async function SearchPage({
  searchParams
}: {
  searchParams: {
    q: string
  }
}) {
  const { q } = await searchParams
  return <div>{q}</div>
}
