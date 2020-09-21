import React from 'react'
import { Button } from '@material-ui/core';
import Back from '@material-ui/icons/SettingsBackupRestore';
import { createBrowserHistory } from "history";


export default function BackHome() {
    // go to back
    const history = createBrowserHistory();
    const backToHome = () => {
        history.goBack();
    }
    return (
        <div className="back-to-product" >
            <Button variant="outlined" color="primary" startIcon={<Back />} onClick={backToHome}>
                Quay lại
            </Button>
        </div>
    )
}
