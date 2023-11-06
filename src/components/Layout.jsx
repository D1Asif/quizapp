/* eslint-disable react/prop-types */
import Nav from "./Nav"
import classes from '../styles/Layout.module.css'
import { Outlet } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"

export default function Layout() {
    return (
        <>
            <AuthProvider>
                <Nav />
                <main className={classes.main}>
                    <div className={classes.container}>
                        <Outlet />
                    </div>
                </main>
            </AuthProvider>
        </>
    )
}