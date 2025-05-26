"use client";

import React from "react";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Maps() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (apiKey == undefined) {
    return;
  }
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{
          width: "auto",
          height: "540px",
          paddingTop: "0.75rem",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
        defaultCenter={{ lat: 47.6458625793457, lng: 9.17112922668457 }}
        mapId={"DEMO_MAP_ID"}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
      <AdvancedMarker
        style={{
          width: "3rem",
          height: "3rem",
        }}
        position={{ lat: 47.6458625793457, lng: 9.17112922668457 }}
        title={"Team Mensch-Hund Region"}
      />
    </APIProvider>
  );
}
