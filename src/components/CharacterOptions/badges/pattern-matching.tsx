import React from "react";

const PatternMatching = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
            <g id="Icons">
                <g id="Pattern_Matching" data-name="Pattern Matching">
                    <rect x="10" y="10" width="230" height="230" fill="#d20080" />
                    <g>
                        <rect x="120" y="50" width="10" height="10" fill="none" />
                        <rect x="120" y="190" width="10" height="10" fill="none" />
                        <rect x="50" y="120" width="10" height="10" fill="none" />
                        <rect x="190" y="120" width="10" height="10" fill="none" />
                        <polygon points="200 40 190 40 180 40 180 50 180 60 180 70 190 70 200 70 210 70 210 60 210 50 210 40 200 40" />
                        <polygon points="190 180 180 180 180 190 180 200 180 210 190 210 200 210 210 210 210 200 210 190 210 180 200 180 190 180" />
                        <path d="M190,110h-10v30h30v-30h-20Zm10,20h-10v-10h10v10Z" />
                        <path d="M120,180h-10v30h30v-30h-20Zm10,20h-10v-10h10v10Z" />
                        <polygon points="120 110 110 110 110 120 110 130 110 140 120 140 130 140 140 140 140 130 140 120 140 110 130 110 120 110" />
                        <path d="M120,40h-10v30h30v-30h-20Zm10,20h-10v-10h10v10Z" />
                        <polygon points="50 180 40 180 40 190 40 200 40 210 50 210 60 210 70 210 70 200 70 190 70 180 60 180 50 180" />
                        <path d="M50,110h-10v30h30v-30h-20Zm10,20h-10v-10h10v10Z" />
                        <polygon points="50 40 40 40 40 50 40 60 40 70 50 70 60 70 70 70 70 60 70 50 70 40 60 40 50 40" />
                    </g>
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

export default PatternMatching;