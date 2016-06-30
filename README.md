# TDD 시작해보자

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


* **(AS A)** 해야할 일이 생겼지만 지금은 급하지 않은 나는
* **(SO THAT)** 그 일을 기록했다가 나중에 하기 위해
* **(I WANT)** 해야할 일을 기록할 수 있다


* **(AS A)** 해야할 일을 끝낸 나는
* **(SO THAT)** 그 일을 끝냈다는 것을 표시하기 위해
* **(I WANT)** 끝낸 일에 취소선을 그을 수 있다


* **(AS A)** 현재 내가 끝낸 일들/해야하는 일들이 무엇인지 궁금한 나는
* **(SO THAT)** 해당 일들을 보기 위해
* **(I WANT)** 종류에 맞게 해당 일들을 분류한다


* **(AS A)** 끝낸 일들을 너무 많아 해야할 일이 무엇인지 찾기 힘든 나는
* **(SO THAT)** 끝낸 일들을 없애기 위해
* **(I WANT)** 끝낸 일들을 지울 수 있다



### 2. 사용자 스토리에 맞게 테스트 코드 작성

Firefox는 47버전부터는 문제가 있어 Gecko Driver를 사용해야되는데 브라우저를 새로 띄우고 종료하는 과정에서 ``Connection Refused! Is selenium server started?``라는 에러가 뜬다. (노답)

그러므로 Firefox 테스트는 46이하 버전을 사용하도록 하자.


