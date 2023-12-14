'use client';
import React from 'react'
import Link from 'next/link';
import styles from './style.module.scss';

export default function index({ index, title, manageModal }) {

    return (
        <div onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} className={styles.project}>
            <h2>{title}</h2>
            <p>Development</p>

            <a target="_blank" href={"https://github.com/letscodedanish"}>
                <p >Github</p>
            </a>


        </div>
    )
}
