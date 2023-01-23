'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/store/dataSlice';
import { RootState } from '@/store/store';
export default function Copy(props: { text: string, color: string }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(increment())
    }, []);

    const { value } = useSelector((store: RootState) => store.data)
    console.log(value);
    return (
        <p className={`${props.color} rounded mr-2 hover:bg-gray-400`} onClick={() => { navigator.clipboard.writeText(props.text) }}>Copy</p>
    );
}
