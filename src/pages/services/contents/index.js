import {useParams} from "react-router-dom";

function ServicesContent() {
    const {slug} = useParams()

    console.log(slug)

    return (
        <>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolore ducimus eius hic illum in nihil
                obcaecati optio pariatur possimus, praesentium quia quos repellat reprehenderit ut vel, velit veniam
                voluptatibus.</p>
        </>
    )
}

export default ServicesContent