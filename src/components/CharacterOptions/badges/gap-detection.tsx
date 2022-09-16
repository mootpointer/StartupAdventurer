import React from "react";
const GapDetection = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
            <g id="Icons">
                <g>
                    <rect x="10" y="10" width="230" height="230" fill="#008b71" />
                    <path d="M60,30h-20v30h30V30h-10Z" />
                    <path d="M50,190h-10v30h30v-30h-20Z" />
                    <path d="M50,110h-10v30h30v-30h-20Z" />
                    <path d="M50,70h-10v30h30v-30h-20Z" />
                </g>
            </g>
            <g id="Card">
                <g id="Frame">
                    <path d="M240,210V20h-10V10H20v10H10V230h10v10H230v-10h10v-20Z" fill="none" />
                    <path d="M10,210V20H0V230H10v-20Z" fill="gray" />
                    <rect x="10" y="230" width="10" height="10" fill="gray" />
                    <path d="M210,240H20v10H230v-10h-20Z" fill="gray" />
                    <rect x="230" y="230" width="10" height="10" fill="#666" />
                    <path d="M240,20V230h10V20h-10Z" fill="#666" />
                    <rect x="230" y="10" width="10" height="10" fill="#666" />
                    <path d="M40,10H230V0H20V10h20Z" fill="#666" />
                    <rect x="10" y="10" width="10" height="10" fill="#666" />
                </g>
            </g>
        </svg>
    )
}
export default GapDetection;