import { supabase } from '@/api/supabase'

export const shopPresenter = async () => {
  const { data: products } = await supabase.from('products').select('*')

  const addProduct = async () => {
    const { data, error } = await supabase
      .from('products')
      .insert([{ some_column: 'someValue', other_column: 'otherValue' }])
      .select()

    return {
      data,
      error,
    }
  }

  return {
    products,
    addProduct,
  }
}
