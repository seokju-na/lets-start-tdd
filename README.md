# TDD 시작해보자

[![Build Status](https://travis-ci.org/seokju-na/lets-start-tdd.svg?branch=master)](https://travis-ci.org/seokju-na/lets-start-tdd)

## TDD: Test Driven Development

* TDD의 본질은 테스트가 아니라 개발 방식에 있다
* TDD는 *"Clean code that works"*를 실현하는 가장 이상적인 방법
* TDD의 일반적인 흐름
	1. 무엇을 테스트할 것인가 생각한다.
	1. 실패하는 테스트를 작성한다.
	1. 테스트를 통과하는 코드를 작성한다.
	1. 코드를 리팩토링한다. (테스트코드 또한 리팩토링한다)
	1. 구현해야 할 것이 있을 때까지 위의 작업을 반복한다.


### 사용자 스토리

- **(AS A)** 누가 = 어떤 이해 관계자가
- **(SO THAT)** 무엇을 달성하기 위해 = 가치 있는 무엇을 얻기 위해
- **(I WANT)** 이런 해결책/기능이 필요하다 = 어떤 시스템 기능이 필요
* 사용자 인터페이스는 가능하면 묘사하지 않기
* 테스트 코드는 사용자 스토리가 실패할 것 같은 시나리오로 작성
* 사용자의 니즈를 충족하는 기능 묘사에 집중
* **나쁜 사용자 스토리**
	* 너무 작은 스토리
	* 상호 의존적인 스토리
	* 과대해석
	* 너무 상세한 스토리
	* 스토리를 너무 많이 나누기
	* 고객이 우선 순위 부여를 어려워하는 경우


## TODO MVC로 하는 TDD

### 1. 사용자 스토리 구상

사용자로서 어떤 스토리가 이루어질지 생각해보자.

* **(AS A)** 무슨 일을 해야 하는지 궁금한 나는
* **(SO THAT)** 해야할 일을 보기 위해
* **(I WANT)** 내가 해야할 일을 기록한 목록이 필요하다

<br />

* **(AS A)** 해야할 일이 생겼지만 지금은 급하지 않은 나는
* **(SO THAT)** 그 일을 기록했다가 나중에 하기 위해
* **(I WANT)** 해야할 일을 기록할 수 있다

<br />

* **(AS A)** 해야할 일을 끝낸 나는
* **(SO THAT)** 그 일을 끝냈다는 것을 표시하기 위해
* **(I WANT)** 끝낸 일에 취소선을 그을 수 있다

<br />

* **(AS A)** 현재 내가 끝낸 일들/해야하는 일들이 무엇인지 궁금한 나는
* **(SO THAT)** 해당 일들을 보기 위해
* **(I WANT)** 종류에 맞게 해당 일들을 분류한다

<br />

* **(AS A)** 끝낸 일들을 너무 많아 해야할 일이 무엇인지 찾기 힘든 나는
* **(SO THAT)** 끝낸 일들을 없애기 위해
* **(I WANT)** 끝낸 일들을 지울 수 있다



### 2. 사용자 스토리에 맞게 테스트 코드 작성

* 먼저 퍼블리싱을 한다. Page Object를 만들어 전체 구조를 고려하며 개발한다. CSS Style을 BEM으로 작성하면 구조화 작업에 상당히 도움이 된다.
* HTML의 계층을 나누어 Controller를 적용할 곳을 정한다. 그리고 각 Controller마다의 단위 테스트를 작성한다.
* Todo Item의 경우 status 프로퍼티로 CSS Class로 다른 상태의 아이템으로 분류했다. HTML이 많이 바뀌는 아이템일 경우 Directive로 따로 빼는 것도 좋은 선택이다.
* 단위 테스트의 경우 함수 단위로 Spec을 작성한다.
* E2E 테스트의 경우 사용자 스토리 단위로 Spec을 작성한다.


### 3. Coverage 및 Demo

Coverage: ``tests/unit/coverage/``에 위치

Demo show case: [http://seokju-todo-app.surge.sh/](http://seokju-todo-app.surge.sh/)


### 4. 후기

* 테스트의 Spec을 잘 정하는 것이 중요. Spec을 결정하는 것은 꾸준한 연습이 필요한 과정인 것 같다.
* Angular 프레임워크를 사용하는 경우, 앱의 구조를 Html 퍼블리싱하는 과정에서 고려하는 것이 좋다. 컨트롤러가 들어갈 컴포넌트를 미리 정하여 $scope의 구조를 체계적으로 짤 수있고, Page Object을 만들어서 E2E 테스팅하기에도 편하다.
* Angular 프레임워크에서 Unit testing은 Angular Mock에 의존하기 때문에 (서비스 Provider의 의존 주입이 필요하기 때문에) 각 컨트롤러, 디렉티브, 서비스, 필터 파일마다 1대1 매칭으로 Spec을 작성하는 것이 좋은 방법인 것 같다.
* 테스트를 먼저 작성하고 그 테스트를 통과하는 코드를 작성하기에 간단한 로직이라도 실제 돌아가는 코드를 작성하는데 시간이 많이 걸렸다. 하지만 코드에 대한 신뢰도도 높고, 네이밍이나 앱의 구조에 신경을 많이 쓰게 되면서 전체적으로 깔끔한 코드를 작성할 수 있었다.

