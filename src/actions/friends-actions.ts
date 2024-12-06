'use server'

import axios from '@/config/request'
import { type Friend } from '@/interfaces'

export const getAllFriends: () => Promise<Friend[]> = async () => {
  try {
    const responseApi = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/friends`)
    return responseApi.data
  } catch (error) {
    throw new Error(String(error.message) !== null ? String(error.message) : 'Unknown error message')
  }
}

export const deleteFriend = async (id: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/friends/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer asdas',
          'Content-Type': 'application/json'
        }
      }
    )

    const responseApi = await res.json()
    if (!res.ok) {
      throw new Error(responseApi.message || 'Unknown error message')
    }

    return responseApi
  } catch (error: any) {
    throw new Error(error.message || 'Unknown error message')
  }
}
