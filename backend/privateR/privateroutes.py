import os
from dotenv import load_dotenv
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError


# busca el token en el header "Authorization"
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="iniciar")

def privateroutes(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="No se pudo validar el token",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        # se verifica la firma y el algoritmo
        payload = jwt.decode(token, os.getenv('SECRET_KEY'), algorithms=[os.getenv('ALGORITHM')])
        correo: str = payload.get("sub")
        if correo is None:
            raise credentials_exception
        return correo  # Si todo está bien, devuelve el correo del usuario
    except JWTError:
        raise credentials_exception