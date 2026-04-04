import { Controller, Get, Param } from '@nestjs/common';
import { BoardService } from './board.service';
/**
 * 1. 전체 문ㄴ맥이해
 * 다음 코드는 뭐냐 컨트롤러에서 서비스 구조를 가진 전형적인 nest.js 패턴입니다.
 * 즉,
 * - BoardController: 요청 HTTP req를 받는 역할
 * - BoardService: 실제 비즈니스 로직(데이터 처리 등)을 담당
 *
 * 컨트롤러는 서비스를 직접 생성하지 않고, Nest가 자동으로 주입해주는 인스턴스를 사용합니다.
 * 그 "자동 주입"을 가능하게 하는 게 바로 의존성 주입이고, (--> 데이터베이스 프로그래밍 수업을 들었다면 DBlclass.cs를 하나의 생성자로 관리하는 것과 유사하다)
 * 이 의존성 주입을 설정하는게 constructor(private readonly boardService: BoardServcie) 입니다.
 *
 * 2. constructor()의 역할
 * Nest.js에서 클래스의 생성자는 객체가 생성될때 실행되며
 * 매개변수로 지정된 의존성(다른 클래스 즉, 서비스 등을) 자동으로 주입받습니다.
 *
 * BoardService가 @Injectable()로 등록되어 있으면,
 * Nest.js가 자동으로 그 인스턴스를 만들어 BoardController에 넣어줍니다.
 */
@Controller('board')
export class BoardController {
  /**
   * 구분분석
   * - constructor 어쩌구: 클래스가생성될때 실행되는 생성자
   * - private: 매개변수로 받은 값을 클래스 내부의 private 필드로 자동 선언
   * - readonly: 이후에 이 속성을 수정할 수 없도록(읽기 전용) 설정
   * - boardService: 실제 주입받을 객체의 이름(이름은 자유롭게 작성할수 있지만 클래스명 기반으로 작성하자 )
   * - boardservice: 주입받을 서비스의 타입 -> nestjs가 이 타입을 보고 인스턴스를 찾아 주입
   */
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    /**
     * 컨트롤러에서 요청을 받아서 서비스에서 findAll()에 있는걸 호출한다.
     */
    return this.boardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(id);
  }
}
