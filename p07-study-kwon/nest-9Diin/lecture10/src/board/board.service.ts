import { Injectable, NotFoundException } from '@nestjs/common';

interface Board {
  id: string;
  title: string;
  content: string;
}
@Injectable()
export class BoardService {
  private boards: Board[] = [
    {
      id: '1',
      title: '첫번째제목임',
      content: '첫번째본문임',
    },
    {
      id: '2',
      title: '두번째제목임',
      content: '두번째본문임',
    },
    {
      id: '3',
      title: '세번째제목임',
      content: '세번째본문임',
    },
  ];
  findAll(): Board[] {
    return this.boards;
  }

  findOne(id: string): Board {
    // return `게시물 조회 ID: ${id}`;
    const board = this.boards.find((board) => board.id === id);
    if (!board) {
      throw new NotFoundException(`ID ${id}에 해당하는 게시글을 찾을 수없슴`);
    }
    return board;
  }
}
