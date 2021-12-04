import React from 'react';
import {Route, Routes, Switch} from 'react-router-dom'
import {privateRoutes,publicRoutes} from "../../routes/routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../../utils/main";
import {onLog} from "firebase/compat";

const AppRouter = () => {
    const user = true
    return user ?
        (<Routes>
                {
                     privateRoutes.map(({path,Component})=>{
                        <Route path={path} element={Component}/>
                    })
                }
        </Routes>
        )
        :
        (<Routes>
                {
                    publicRoutes.map(({path,Component})=>{
                        <Route path={path} element={Component}/>
                    })
                }
        </Routes>
        )
};

export default AppRouter;