/* eslint-disable */

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

@Controller('users')
export class AppController {
  /**
   * [C] Create - POST /users
   * 새로운 사용자 등록
   * 예) POST /users  { "name": "홍길동" }
   */
  @Post()
  create(@Body() body: { name: string }) {
    return `새로운 사용자 생성: ${body.name}`;
  }

  /**
   * [R] Read - GET /users
   * 전체 사용자 목록 조회
   * 예) GET /users?page=2
   */
  @Get()
  findAll(@Query('page') page?: number) {
    const currentPage = page || 1;
    return `모든 사용자 조회 (현재 페이지: ${currentPage})`;
  }

  /**
   * [R] Read - GET /users/:id
   * 특정 사용자 조회
   * 예) GET /users/5
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `사용자 조회 (ID: ${id})`;
  }

  /**
   * [U] Update - PUT /users/:id
   * 사용자 정보 수정
   * 예) PUT /users/5 { "name": "이몽룡" }
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string }) {
    return `사용자 ${id} 수정 -> 이름: ${body.name}`;
  }

  /**
   * [D] Delete - DELETE /users/:id
   * 사용자 삭제
   * 예) DELETE /users/5
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `사용자 삭제 (ID: ${id})`;
  }
}
