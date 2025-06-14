import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return <>
        <div>
            <h1>Opps! An error occured.</h1>
            <p>{error && error.data}</p>
        </div>
    </>
}