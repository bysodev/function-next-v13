import Link from "next/link";

const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { // Para que se ejecute cada cierto timepo y no una sola vez al hacer el build
        next: {
            revalidate: 5
        }
    }).then(data=> data.json())
}

export default async function LayoutPage ({children, params}) {
    const {id} = params; 
    const post = await fetchPost(id);
    return ( 
        <article>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Link href={`/post/${id}/comments`}> 
                <button> Comentatarios </button>
            </Link>
            {children}
        </article>
    ) 
} 
 
 
