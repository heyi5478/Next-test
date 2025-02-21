import { fetchUsers } from "@/services/api";

export async function getStaticPaths() {
  const data = await fetchUsers();

  return {
    paths: data.map((route: { id: number }) => ({
      params: { id: route.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await fetchUsers();
  const route = data.find((route: { id: number }) => route.id === +params.id);

  return {
    props: { route },
  };
}

type Route = {
  id: number;
  name: string;
  website: string;
  address: {
    city: string;
  };
  // Add other properties of the route object if needed
}

const Detail = ({ route }: { route: Route }) => {
  return (
    <div>
      <h1>{route.name}</h1>
      <p>ID: {route.id}</p>
      <p>{route.website}</p>
      <p>{route.address.city}</p>
      {/* Render other properties of the route object if needed */}
    </div>
  );
}

export default Detail;