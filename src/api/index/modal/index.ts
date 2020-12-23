import {responseFormat} from '../../request'

interface goodsListItem{
  categoryName: string,
  enterpriseId: number
  id: number
}

export type goodsListModal = responseFormat<goodsListItem[]>