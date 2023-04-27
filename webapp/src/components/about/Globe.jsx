import { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";

import  globeTexture  from "../../img/globe.svg";




const GlobeComponent = () => {
    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
    </svg>`;
    const N = 1;
    const globeData = Array.from({ length: N }, () => ({
        lat: 48.0,
        lng: 11.0,
        size: 20,
        color: "red",
    }));
    const [isMobile, setIsMobile] = useState(false);
    const globeEl = useRef();

    useEffect(() => {
        const handleResize = () => {
            const viewPort = window.innerWidth;
            setIsMobile(viewPort < 850);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        globeEl.current.controls().autoRotate = false;
        globeEl.current.controls().autoRotateSpeed = 0.7;
        globeEl.current.pointOfView({ lat: 11.0, lng: 9.0, altitude: 3 }, 4000);
        globeEl.current.controls().enableZoom = false;
    }, []);

    return (
        <div className="flex items-center justify-center cursor-grab">
            <Globe

                ref={globeEl}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl={globeTexture}
                htmlElementsData={globeData}
                htmlElement={(d) => {
                    const el = document.createElement("div");

                    el.innerHTML = markerSvg;
                    el.style.color = d.color;
                    el.style.width = `${d.size}px`;

                    el.style["pointer-events"] = "auto";
                    el.style.cursor = "pointer";
                    el.onclick = () => console.info(d);
                    return el;
                }}
                atmosphereColor="#2929c2"
                width={isMobile ? 400 : 1000}
                height={isMobile ? 400 : 1000}
            />
        </div>
    );
};

export default GlobeComponent;
