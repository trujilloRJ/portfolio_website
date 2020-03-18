import React from 'react'
import styles from './SectionHeading.module.scss'

export default function SectionHeading({text}) {
    return (
        <div className={styles.heading}>
            {text}
        </div>
    )
}
