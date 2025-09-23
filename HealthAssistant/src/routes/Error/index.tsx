import { useNavigate } from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="bg-red-500 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold mb-4">404</h1>
            <p className="text-white text-lg">Página não encontrada</p>
            <button onClick={handleNavigateHome} className="mt-4 px-4 py-2 bg-white text-red-500 rounded">
                Voltar para a Home
            </button>
        </div>
    );
}