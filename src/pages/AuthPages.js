import React from "react"

export const AuthPage = ()=>{
    return(
        <div className={"row"}>
            <div className={"col s6 offset-s3"}>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"> авторизация</span>

                    </div>
                    <div className="card-action">
                        <button className={"btn yellow darken-4"} style={{marginRight: 10}}>войти</button>
                        <button className={"btn grey lighten-1 black-text"}>Регестрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}