"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useState } from "react";

const query = gql`query {
  launchLatest {
    mission_name
  }
}`

export const Poll = () => {
  const [showResults, setShowResults] = useState(false);
  const { data } = useSuspenseQuery(query);

  return (
    <h1>Sell {data.launchLatest.mission_name}</h1>
  );
}

export default Poll