import React from 'react'
import { Button } from '@material-ui/core';

export default function Sizes({sizes}) {
    return (
        <div className="size-detail">
            {
                sizes.map((size, index) => (
                    <span key={index}>
                        <Button variant="contained" color="secondary" style={{backgroundColor:`${size}`}}>
                            {size}
                        </Button>
                    </span>
                ))
            }
        </div>
    )
}
