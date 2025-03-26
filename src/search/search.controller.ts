import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResult } from './dto/search-result.dto';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async search(@Query('q') query: string): Promise<SearchResult[]> {
    if (!query || query.trim() === '') {
      throw new BadRequestException('חובה לציין פרמטר חיפוש');
    }
    return this.searchService.search(query);
  }
}