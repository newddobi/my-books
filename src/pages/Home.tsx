import { Redirect } from "react-router-dom";
import ListContainer from "../container/ListContainer";
import useToken from "../hooks/useToken";

export default function Home() {
  const token = useToken();

  if (token === null) {
    return <Redirect to="/signin" />;
  }

  return <ListContainer />;
}
