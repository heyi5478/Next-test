import { fetchUsers, fetchUserById } from "@/services/api";
import { GetStaticProps } from "next";

export async function getStaticPaths() {
  const data = await fetchUsers();

  return {
    paths: data.map((route: { id: number }) => ({
      params: { id: route.id.toString() },
    })),
    fallback: false,
  };
}

type Route = {
  id: number;
  name: string;
  website?: string;
  address?: {
    city: string;
  };
  // Add other properties of the route object if needed
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) return { notFound: true };
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const data = await fetchUserById(id);
  
  return {
    props: { route: data },
  };
}

const Detail = ({ route }: { route: Route }) => {
  return (
    <div>
      <h1>{route.name}</h1>
      <p>ID: {route.id}</p>
      <p>{route.website}</p>
      {route.address && <p>{route.address.city}</p>}
      {/* Render other properties of the route object if needed */}
    </div>
  );
}

export default Detail;