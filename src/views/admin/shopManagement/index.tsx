'use client'

import Link from 'next/link'
import { Table } from '@heroui/react'
import { shopPresenter } from './shopPresenetr'
import { ProductType } from '@/domain/product'
import { useEffect, useState } from 'react'

export const ShopManagementView = () => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const load = async () => {
      const { products } = await shopPresenter()
      setProducts(products ?? [])
    }

    load()
  }, [])

  return (
    <div className='flex flex-col gap-4 pt-10'>
      <Link href='/admin/shop/create'>
        <span className='border border-secondary rounded-lg p-4 font-bold bg-white hover:bg-secondary hover:text-white'>
          商品追加
        </span>
      </Link>
      <div>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label='Sortable table' className='min-w-[600px]'>
              <Table.Header>
                <Table.Column allowsSorting isRowHeader id='name'>
                  <Table.SortableColumnHeader>商品名</Table.SortableColumnHeader>
                </Table.Column>
              </Table.Header>
              <Table.Body>
                {products ? (
                  products?.map((product) => (
                    <Table.Row key={product.id} id={product.id}>
                      <Table.Cell>{product.title}</Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <>現在、出品中の商品がありません。</>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  )
}
