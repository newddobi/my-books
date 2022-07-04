import { Redirect } from "react-router-dom";
import AddContainer from "../container/AddContainer";
import useToken from "../hooks/useToken";

export default function Add() {
  const token = useToken();
  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return <AddContainer />;
}
