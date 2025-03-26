import { Injectable } from '@nestjs/common';
import { SearchResult } from './dto/search-result.dto';

@Injectable()
export class SearchService {
  private data: SearchResult[] = [
    {
      id: 1,
      name: 'יום צילום',
      supplier: 'אורון',
      cost: 500,
      date: new Date('2024-01-01'),
      path: 'assets/images/invoice.png',
      status: 'success',
    },
    {
      id: 2,
      name: 'יום הקלטות',
      supplier: 'נתנאל',
      cost: 500,
      date: new Date('2024-01-02'),
      path: 'assets/images/invoice.png',
      status: 'error',
    },
    {
      id: 3,
      name: 'יום הכנה',
      supplier: 'נעמה',
      cost: 500,
      date: new Date('2024-01-03'),
      path: 'assets/images/invoice.png',
      status: 'success',
    },
    {
      id: 4,
      name: 'יום עיון',
      supplier: 'דוד',
      cost: 500,
      date: new Date('2025-01-03'),
      path: 'assets/images/invoice.png',
      status: 'panding',
    },
  ];

  async search(query: string): Promise<SearchResult[]> {

    return this.data.filter(item =>
      item.name.includes(query) || item.supplier.includes(query)
    );
  }
}