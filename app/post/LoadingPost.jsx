import Link from "next/link";
import LikeButton from "./LikeButton";


const loading_post = () => {
    console.log('SE VOVLIO A EJECUTAR')
    // return fetch('https://jsonplaceholder.typicode.com/posts').then(data=> data.json())
    return fetch('https://jsonplaceholder.typicode.com/posts', { // Para que se ejecute cada cierto timepo y no una sola vez al hacer el build
        next: {
            revalidate: 5
        }
    }).then(data=> data.json())
    return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}).then(data=> data.json())
}

export default async function LoadingPost () {

    const posts = await loading_post();

    return posts.slice(0, 5).map( post => (
            <article key={post.id}> 
                <Link href={`/post/${post.id}`} style={{textDecoration: 'none'}}>
                    <h3 style={{color: '#09f'}}>{post.title}</h3>
                    <p>{post.body}</p>
                 </Link>
                 <LikeButton title={post.title}  />
            </article>
        )
    )
}