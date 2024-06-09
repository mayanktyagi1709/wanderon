export default function UserProfile({ params}: { params: { id: number } }) {
  return (
    <section>
      <p>{params.id}</p>
    </section>
  )
}