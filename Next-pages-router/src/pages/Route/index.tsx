import styles from "@/styles/Route.module.css"
import { fetchUsers } from "@/services/api";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = await fetchUsers();

  return {
    props: { routes: data }
  }
}

type Route = {
  id: number;
  name: string;
  // Add other properties of the route object if needed
};
  


const Route = ({ routes }: { routes: Route[] }) => {
  return (
    <div>
      <h1>Route</h1>
      {routes.map(route => (
        <Link href={'/Route/' + route.id} key={route.id} className={styles.single}>
          <h3>{ route.name }</h3>
        </Link>
      ))}
    </div>
  )
}

export default Route;