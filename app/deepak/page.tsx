'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store/store'
export default function Deepak() {
    const { value } = useSelector((store: RootState) => store.data)
    console.log(value);
    return (
        <div>
            Deepak
        </div>
    )
}
