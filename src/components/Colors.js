import React from 'react'
import { Button } from '@material-ui/core';

export default function Colors({colors}) {
    return (
        <div className="color-detail">
            {
                colors.map((color, index) => (
                    <span key={index}>
                        <Button variant="contained" color="primary" style={{backgroundColor:`${color}`}}>
                            {color}
                        </Button>
                    </span>
                ))
            }
        </div>
    )
}
