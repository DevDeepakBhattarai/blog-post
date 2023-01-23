'use client'
import React, { useEffect } from 'react';

export default function Copy(props: { text: string, color: string }) {
    return (
        <p className={`${props.color} rounded mr-2 hover:bg-gray-400`} onClick={() => { navigator.clipboard.writeText(props.text) }}>Copy</p>
    );
}
