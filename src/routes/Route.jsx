import React from "react";

import EventDetails from "../pages/EventDetails/EventDetails";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventList from "../pages/EventList/EventList";

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/event/:id", element: <EventDetails /> },
];
