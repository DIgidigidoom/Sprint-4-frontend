import { useState } from 'react'
import Color from 'color-thief-react';
export function ColorThief({ imgSrc, onColorReady }) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Color src={imgSrc} crossOrigin="anonymous" format="hex">
                {({ data, loading }) => {
                    if (loading || !data) return null

                    // Pass the color to parent via callback
                    onColorReady?.(data)
                    return null // No visible rendering needed
                }}
            </Color>
            
        </div>
    )
}


