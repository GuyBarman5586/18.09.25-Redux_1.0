import React from 'react'
import { useDispatch } from 'react-redux'
import { deletetodo } from '../slices/todoslice'

export default function DeleteTodo({ id, children }) {
  const dispatch = useDispatch()

  const onDelete = () => {
    if (!id) return
    dispatch(deletetodo(id))
  }

  return (
    <button onClick={onDelete} aria-label="Delete todo">
      {children || 'Delete'}
    </button>
  )
}


