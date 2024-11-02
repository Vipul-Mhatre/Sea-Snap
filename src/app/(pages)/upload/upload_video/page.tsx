"use client";

import { useState } from "react";

export default function Upload() {

    let liveLocationOn = navigator.geolocation
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    if (liveLocationOn === null) {
        return (
            <div>
                Geolocation not supported!
            </div>
        )
    }
    navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLongitude(coords.longitude)
        setLatitude(coords.latitude)
    })

    return (
        <div>
            {latitude},
            {longitude}
        </div>
    )
}