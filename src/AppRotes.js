import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute"
import { LoginPage } from "./pages/LoginPage"
import { MainPage } from "./pages/MainPage"
import { MyArticlePage } from "./pages/MyArticlePage"
import { ProfilePage } from "./pages/ProfilePage"
import { RegPage } from "./pages/RegPage"
import { SellerArticlePage } from "./pages/SellerArticlePage"
import { SellerProfilePage } from "./pages/SellerProfilePage"
import { useSelector } from "react-redux";
import { AddNewAdvPage } from "./pages/AddNewAdvPage"

export const AppRoutes = () => {
    const token = useSelector(state => state.auth.saveLogin.userToken)

    const tokenState = token.length >= 2 ? true : false
  
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/sellerProfilePage" element={<SellerProfilePage />}/>
            <Route path="/sellerArticlePage" element={<SellerArticlePage />}/>
            <Route path="/loginPage" element={<LoginPage />}/>
            <Route path="/regPage" element={<RegPage />}/>
            <Route path="/addNewAdvPage" element={<AddNewAdvPage />}/>

            <Route element={<ProtectedRoute isAllowed={Boolean(tokenState)} />}>
                <Route path="/myArticlePage" element={<MyArticlePage />}/>
                <Route path="/profilePage" element={<ProfilePage />}/>
            </Route>
        </Routes>
    )
}