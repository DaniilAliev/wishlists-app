'use server'

import { revalidatePath } from 'next/cache'

import { CartServiсe } from '@/data/Cart/CartService'

export async function deleteCartItem(itemId: number) {
  try {
    await CartServiсe.deleteCart(itemId)
    revalidatePath('/cart')
    return { success: true }
  } catch (error) {
    console.error('Error deleting cart item:', error)
    return { success: false, error: 'Failed to delete cart item' }
  }
}
