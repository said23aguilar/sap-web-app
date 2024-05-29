'use server'

import { cookies } from "next/headers";

type AuthState = {
  data: string | object;
}

export const login = async (_currentState: AuthState, formData: FormData) => {
  try {
    const user = {
      usuario: formData.get('user'),
      password: formData.get('password'),
    };
    const res = await fetch('https://login-service-production.up.railway.app/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (data?.token) {
      cookies().set('currentUser', JSON.stringify(data), {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
      });
      return data;
    } else {
      return 'Usuario y/o contraseña incorrecto';
    }
    // await new Promise<void>((resolve) => setTimeout(() => {
    //   resolve();
    // }, 2000));
  } catch (error) {
    console.log(error);
    if (error) {
      // switch (error.type) {
      //   case 'CredentialsSignin':
      //     return 'Invalid credentials.'
      //   default:
      //     return 'Something went wrong.'
      // }
      return 'Usuario y/o contraseña incorrecto';
    }
    throw error
  }
}

export const register = async (_currentState: String, formData: FormData) => {
  try {
    const newUser = {
      nombre: formData.get('name'),
      usuario: formData.get('user'),
      password: formData.get('password'),
      tipo: formData.get('type'),
    };
    const res = await fetch('https://login-service-production.up.railway.app/auth/registrar', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    if (res.status === 200) {
      return 'Se registro correctamente';
    } else {
      return 'Error desconocido';
    }
  } catch (error) {
    console.log(error);
    if (error) {
      return 'Error en el registro';
    }
    throw error;
  }
}