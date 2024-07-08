const { APP_ROUTES } = require("@/constants/app-routes");
const { useRouter } = require("next/navigation");
const { useEffect } = require("react");

const PrivateRoute = ({children}) => {
    // ele extrai o "push" do useRouter, para redirecionar o usuário para uma pagina
    const {push} = useRouter();
    const isUserAuthenticated = false;

    useEffect(() => {
        if(!isUserAuthenticated){
            push(APP_ROUTES.public.home)
        }
    }, [isUserAuthenticated, push])

    return (
        <>
            {!isUserAuthenticated && null}
            {isUserAuthenticated && children}
        </>
    )
}
export default PrivateRoute;