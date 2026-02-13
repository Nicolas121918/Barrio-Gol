import os
from dotenv import load_dotenv
from fastapi import Depends, HTTPException, status, Request
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError


# busca el token en el header "Authorization"
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="iniciar")

def privateroutes(request: Request):
    # Buscamos la cookie que llamamos "access_token"
    token = request.cookies.get("access_token")
    
    if not token:
        raise HTTPException(status_code=401, detail="No hay cookie de sesión")
        
    try:
        payload = jwt.decode(token, os.getenv("SECRET_KEY"), algorithms=[os.getenv("ALGORITHM")])
        return payload.get("sub")
    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido")
    