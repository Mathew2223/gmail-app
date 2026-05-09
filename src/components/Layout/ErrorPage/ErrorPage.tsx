import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error);
    
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || error.data?.message || "Route error";
    }
    else if (error instanceof Error) {
        errorMessage = error.message;
    }
    else {
        errorMessage = "Unknown error";
    }

    return (
        <div id="error-page">
            <h1>Упс!</h1>
            <p>Что то пошло не так</p>
            <p>
                <i>{errorMessage}</i>
            </p>
            {isRouteErrorResponse(error) && (
                <p style={{ color: "#888" }}>Status: {error.status}</p>
            )}

            <button
                className="error-reload-btn"
                onClick={() => navigate('/gmail', { replace: true })}
            >
                Вернуться на главную страницу
            </button>
        </div>
    )
}