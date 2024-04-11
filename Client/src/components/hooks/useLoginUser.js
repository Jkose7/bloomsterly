import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useToastify } from './useToastify'

export const useLoginUser = (URI) => {
    const [sesionUser, setSesionUser] = useState(()=>{
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    })

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(sesionUser))
    },[sesionUser])


    const navigate = useNavigate()
    const location = useLocation()
    const { showToastMessage } = useToastify()

    //funcion para el inicio de sesion del usuario
    const loginUser = async (data) => {
        try {
            const { Username, Password, Rol } = data
            console.log(URI)

            if (Rol == "Cliente") {
                const respuesta = await axios.post(URI, {
                    username: Username,
                    contrasena: Password
                })
                
                showToastMessage(`Bienvenido de nuevo ${Username}`)
                setSesionUser(data)
                navigate(!!location.state ? location.state.location.pathname : '/')
            } else {
                if (Rol == "Administrador") {
                    const respuesta = await axios.post("http://localhost:8000/login/admin/", {
                        username: Username,
                        contrasena: Password
                    })
                    console.log('Sesion iniciada correctamente Administrador')
                    alert(respuesta.data.message)
                    setSesionUser(data)
                    navigate('/administrador')
                }
            }

        } catch (error) {
            if (error.response) {
                showToastMessage("Revisa tu usuario o contraseña")
            } else if (error.request) {
                // La solicitud fue realizada pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor');
            } else {
                alert(error.message)
            }
        }
    }

    const logout = () => {
        localStorage.removeItem('user')

        showToastMessage("Sesion cerrada correctamente")
        setSesionUser(null)
        navigate('/')
    }

    return { sesionUser, loginUser, logout }

} 