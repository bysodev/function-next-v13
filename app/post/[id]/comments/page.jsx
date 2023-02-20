import Image from "next/image";

const fetchComments = async (id) => {
    // await new Promise(resolve => setTimeout(resolve, 3000)) // Traer los datos suele tardar

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
    .then(data => data.json())
}

export default async function CommentsPage({params}) {
    const {id} = params
    let comments = await fetchComments(id);
    console.log(comments);
    return (
        <ul>
            {comments.map(comment => (
                <li>
                    <h5>{comment.name}</h5>
                    <h5 style={{color: '#09f'}}>{comment.email}</h5>
                    <h6>{comment.body}</h6>
                    {/* <Image width='50' height='50' src={`https://api.dicebear.com/5.x/pixel-art-neutral/svg?seed=${comment.email}`} alt={comment.name} /> */}
                    <img src={`https://api.dicebear.com/5.x/pixel-art-neutral/svg?seed=${comment.email}`} alt={comment.name} />
                </li>
            )) }
        </ul>
    )
}