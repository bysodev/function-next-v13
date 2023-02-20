'use client'
import { useEffect, useState } from "react"

export default function LikeButton ({title, loading_post}) {
    const [like, setlike] = useState(false)

    useEffect(() => {
      console.log(title)
    }, [like])
    

    return (
        <button onClick={ () => setlike(!like) } >
            {like ? 'Me gusta' : 'No me gusta'}
        </button>
    )
}