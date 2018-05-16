- normal flow : nothing

inline 의 경우 겹쳐지지 못함 -> 아 그래서 텍스트랑 이미지가 안겹쳐지는건가봄.

clear로 강제 마진 생기게 하는 것. 

http://www.csszengarden.com/057/

반응형 로고 : http://responsivelogos.co.uk/

shift+comd+g : 그룹 만드는거

# markup 
1. 논리적인 순서로 마크업 순서를 정함 
2. 의미에 맞는 마크업 sementic markup
3. 네이밍 (class | id -> class가 좀더 많이 사용됨)
  - 일관성 있게// 대문자는 function , _ 는 변수, - class명
  - 카테고리 위주로 네이밍

## html 
### header
- inline: 한줄로 나옴 / block: 줄바꿈으로 나타남

### main
outline: heading level이 필요함
- section
- article
- aside
- nav
  - outline의 경우, header에서 h1을 쓰면 다음 레벨은 자동적으로 h2, h3 .. 순서로 내려감.
  - 숨김 제목 h2.readable-hidden / a11y-hidden 
- keyboard focusing
  - a, area, form, tap-index
- div: block / span: inline 
- CSS 초기화: https://cssreset.com/scripts/eric-meyer-reset-css/
  - line-height: 1.2; 로 하는게 한글은 더 안정적임
  - ol은 조금 위험 : 순위 결정하는 컨텐츠가 있을 경우
  - table-collapse: collapse; <- 병합시킴 
- font : font-size, font-family, font-style, font-weight, font-variant, line-height

## css

### position 
  - offset top, right left bottom
  - 기준: 자기보다 상위에 있는 기준이 static이 아닐때. 기본값이 static임.
    - absolute 
    - relative 나를 기준으로 움직이는 아이. normal flow
    - fixed
    - sticky


### display
  - inline : 공백도 하나의 인라인으로 인식을 해서 플로팅이랑 다르게 공백이 생겨버림. 을 통해서도 옆으로 옮겨서 넣을 수 있음  
  float / flex 랑 같지만 다른 기법

  css layout inline / block 
  
### nth-child: http://nthmaster.com/

normal flow 인지 아닌지에 따라서 쓸 수 있는 기능들이 달라짐. 

- collapsing margine에 대해서 보면 좋음 


